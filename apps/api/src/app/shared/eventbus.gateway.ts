import {
  OnGatewayConnection,
  OnGatewayDisconnect,
  OnGatewayInit,
  SubscribeMessage,
  WebSocketGateway,
  WebSocketServer,
  WsResponse,
} from '@nestjs/websockets';
import { Observable, of } from 'rxjs';
import { EventEmitter } from 'events';
import { Logger, UseGuards } from '@nestjs/common';
import { delay } from 'rxjs/operators';
import { ISocket } from './interfaces/socket.interface';
import { Server } from 'socket.io';
import { AuthService, User, WsAuthGuard } from '../auth';

@WebSocketGateway({ namespace: 'eventbus' })
export class EventBusGateway extends EventEmitter implements OnGatewayInit, OnGatewayConnection, OnGatewayDisconnect {
  static EVENTS = 'events';
  static ACTIONS = 'actions';
  private readonly logger = new Logger(EventBusGateway.name);

  @WebSocketServer()
  server: Server;
  clients: ISocket[] = [];

  constructor(/*private authService: AuthService*/) {
    super();
  }

  afterInit(server) {}

  handleConnection(client: ISocket) {
    // this.logger.log(`Client connected => ${client.id}  ${client.handshake.query.token}`);
    // TODO do auth here
    this.clients.push(client);
  }

  handleDisconnect(client: ISocket) {
    // this.logger.log(`Client disconnected => ${client.id}`);
    // FIXME: remove any. only needed for docker build
    this.clients = this.clients.filter(c => (c as any).id !== (client as any).id);
  }

  @UseGuards(WsAuthGuard)
  @SubscribeMessage('auth')
  onAuthenticate(client: ISocket, data: any) {
    // this.logger.log(`auth  => ${client.id}  ${client.user.username}`);
    const event = 'auth';
    return { event, status: 'success' };
  }

  @SubscribeMessage('test')
  onTest(client: ISocket, data: any): Observable<WsResponse<any>> {
    // this.logger.log(`test  => ${client.id}  ${client.user.username}`);
    const event = 'test';
    // client.broadcast.emit({event, data});
    return of({ event, data }).pipe(delay(1000));
  }

  @SubscribeMessage('actions')
  onActions(client: ISocket, action: any) {
    // this.logger.log(`actions  => ${client.id}  ${client.user.username} ${action.type} ${action.payload}`);
    this.emit(action.type, action, client.user);
  }

  sendActionToUser<T>(user: User, action: any): void {
    const clients = this.getSocketsForUser(user);
    const type = this.getActionTypeFromInstance(action);
    // FIXME: remove any. only needed for docker build
    clients.forEach(socket => (socket as any).emit(EventBusGateway.ACTIONS, { ...action, type }));
  }

  sendActionToAll<T>(action: any): void {
    const type = this.getActionTypeFromInstance(action);
    // FIXME: remove any. only needed for docker build
    this.clients.forEach(socket => (socket as any).emit(EventBusGateway.ACTIONS, { ...action, type }));
  }

  private getSocketsForUser(user: User): ISocket[] {
    return this.clients.filter(c => c.user && c.user.username === user.username);
  }

  private getActionTypeFromInstance(action: any): string {
    if (action.constructor && action.constructor.type) {
      return action.constructor.type;
    }
    return action.type;
  }
}

// https://github.com/evebook/api/blob/master/src/modules/websocket/websocket.gateway.ts
