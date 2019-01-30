import { Injectable } from '@angular/core';
import { LinkDirective } from './link.directive';
import { RouterPreloader } from '@angular/router';
import { PrefetchRegistryService } from './prefetch-registry.service';

type RequestIdleCallbackHandle = any;
interface RequestIdleCallbackOptions {
  timeout: number;
}
interface RequestIdleCallbackDeadline {
  readonly didTimeout: boolean;
  timeRemaining: () => number;
}

declare global {
  interface Window {
    requestIdleCallback: (
      callback: (deadline: RequestIdleCallbackDeadline) => void,
      opts?: RequestIdleCallbackOptions,
    ) => RequestIdleCallbackHandle;
    cancelIdleCallback: (handle: RequestIdleCallbackHandle) => void;
  }
}

const requestIdleCallback =
  window.requestIdleCallback ||
  function(cb: Function) {
    const start = Date.now();
    return setTimeout(function() {
      cb({
        didTimeout: false,
        timeRemaining: function() {
          return Math.max(0, 50 - (Date.now() - start));
        },
      });
    }, 1);
  };

const cancelIdleCallback = window.cancelIdleCallback || clearTimeout;

@Injectable({
  providedIn: 'root',
})
export class LinkHandlerService {
  private registerIdle: any;
  private unregisterIdle: any;
  private registerBuffer: Element[] = [];
  private unregisterBuffer: Element[] = [];
  private elementLink = new Map<Element, LinkDirective>();
  private observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const link = entry.target as HTMLAnchorElement;
        this.queue.add(this.elementLink.get(link).urlTree);
        this.observer.unobserve(link);
        requestIdleCallback(() => {
          this.loader.preload().subscribe(() => void 0);
        });
      }
    });
  });

  constructor(private loader: RouterPreloader, private queue: PrefetchRegistryService) {}

  register(el: LinkDirective) {
    this.elementLink.set(el.element, el);
    cancelIdleCallback(this.registerIdle);
    this.registerBuffer.push(el.element);
    this.registerIdle = requestIdleCallback(() => {
      this.registerBuffer.forEach(e => this.observer.observe(e));
      this.registerBuffer = [];
    });
  }

  unregister(el: LinkDirective) {
    this.elementLink.delete(el.element);
    cancelIdleCallback(this.unregisterIdle);
    this.unregisterBuffer.push(el.element);
    this.unregisterIdle = window.requestIdleCallback(() => {
      this.unregisterBuffer.forEach(e => this.observer.unobserve(e));
      this.unregisterBuffer = [];
    });
  }
}
