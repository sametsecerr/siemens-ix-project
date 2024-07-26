import { Injectable, TemplateRef } from '@angular/core';
import { ToastService } from '@siemens/ix-angular';

@Injectable({
  providedIn: 'root'
})
export class CustomToastService {
  private customToastRef!: TemplateRef<any>;

  constructor(private readonly toastService: ToastService) {}

  setCustomToastTemplate(template: TemplateRef<any>) {
    this.customToastRef = template;
  }

  showCustomToast() {
    if (this.customToastRef) {
      this.toastService.show({
        message: this.customToastRef,
      });
    } else {
      console.error('CustomToastRef is not set.');
    }
  }
}
