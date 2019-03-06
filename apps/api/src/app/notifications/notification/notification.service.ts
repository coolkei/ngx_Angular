import { Injectable, NotFoundException, OnModuleDestroy, OnModuleInit } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Any, In, Repository } from 'typeorm';
import { CrudService } from '../../core';
import { Notification, TargetType } from './notification.entity';
import { EventBusGateway } from '../../shared';
import { DeleteNotification, MarkAsRead } from '../index';
import { User } from '../../auth';
import { SubscriptionService } from '../subscription/subscription.service';
import { PushService } from './push.service';
import { Subscription } from '../subscription/subscription.entity';

@Injectable()
export class NotificationService extends CrudService<Notification> implements OnModuleInit, OnModuleDestroy {
  constructor(
    private readonly pushService: PushService,
    private readonly eventBus: EventBusGateway,
    private readonly subscriptionService: SubscriptionService,
    @InjectRepository(Notification) private readonly notificationsRepository: Repository<Notification>,
  ) {
    super(notificationsRepository);
  }

  async onModuleInit() {
    this.eventBus.on(MarkAsRead.type, this.onMarkAsRead.bind(this));
    this.eventBus.on(DeleteNotification.type, this.onDeleteNotification.bind(this));
  }
  onModuleDestroy() {
    this.eventBus.off(MarkAsRead.type, this.onMarkAsRead.bind(this));
    this.eventBus.off(DeleteNotification.type, this.onDeleteNotification.bind(this));
  }

  async getUserNotifications(user: User): Promise<[Notification[], number]> {
    const records = await this.repository.findAndCount({ target: In(['all', user.username]), isActive: true });
    if (records[1] === 0) {
      throw new NotFoundException(`The requested records were not found`);
    }
    return records;
  }

  async send(id: string | number) {
    const notification = await this.getOne(id);

    const pushNotification = {
      title: notification.title,
      body: notification.body,
      icon: 'assets/icons/icon-72x72.png',
      data: notification,
      vibrate: [200, 100, 200],
    };

    let subscriptions: Subscription[];
    let count: number;
    switch (notification.targetType) {
      case TargetType.USER:
        [subscriptions, count] = await this.subscriptionService.findAndCount({ username: notification.target });
        break;
      case TargetType.TOPIC:
        // FIXME: https://github.com/typeorm/typeorm/issues/3150
        [subscriptions, count] = await this.subscriptionService.findAndCount({ topics: Any([notification.target]) });
        break;
      case TargetType.ALL:
        [subscriptions, count] = await this.subscriptionService.getAll({ take: 10 }); // TODO: for now, lets send to 10
        break;
    }

    subscriptions.forEach(subscription => {
      const { endpoint, p256dh, auth } = subscription;
      return this.pushService.sendNotification({ endpoint, keys: { p256dh, auth } }, pushNotification as any);
    });
  }

  async onMarkAsRead(action: MarkAsRead, user: User) {
    await this.update(
      { id: parseInt(action.payload.id, 10), targetType: TargetType.USER, target: user.username },
      { read: true },
    );
  }
  async onDeleteNotification(action: DeleteNotification, user: User) {
    await this.update(
      { id: parseInt(action.payload.id, 10), targetType: TargetType.USER, target: user.username },
      { isActive: false },
    );
  }
}
