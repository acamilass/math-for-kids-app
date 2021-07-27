export class Alert {
  id: string = '';
  type: AlertType = 0;
  message: string = '';
  autoClose: boolean = false;

  constructor(init?: Partial<Alert>) {
    Object.assign(this, init);
  }
}

export enum AlertType {
  Success,
  Error
}
