import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { Router, NavigationStart } from '@angular/router';

import { AlertService } from '../alert-message.service';
import { Alert, AlertType } from '../models/alert.model';

@Component({ selector: 'alert', templateUrl: 'alert.component.html' })
export class AlertComponent implements OnInit, OnDestroy {

  @Input() id = 'default-alert';

  alerts: Alert[] = [];
  alertSubscription: any;
  routeSubscription: any;

  constructor(private router: Router, private alertService: AlertService) { }

  ngOnInit() {
    this.alertSubscription = this.alertService.onAlert(this.id)
      .subscribe(alert => {
        this.alerts.push(alert);

        if (alert.autoClose) {
          setTimeout(() => this.removeAlert(alert), 2800);
        }
      });

    this.routeSubscription = this.router.events.subscribe(event => {
      if (event instanceof NavigationStart) {
        this.alertService.clear(this.id);
      }
    });
  }

  ngOnDestroy() {
    this.alertSubscription.unsubscribe();
    this.routeSubscription.unsubscribe();
  }

  removeAlert(alert: Alert) {
    if (!this.alerts.includes(alert)) return;

    this.alerts = this.alerts.filter(x => x !== alert);

  }

  cssClass(alert: Alert) {
    // if (!alert) return;

    const alertTypeClass = {
      [AlertType.Success]: 'success',
      [AlertType.Error]: 'error',
    }

    return alertTypeClass[alert.type];
  }
}