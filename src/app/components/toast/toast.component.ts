import { Component, TemplateRef, ViewChild, AfterViewInit } from '@angular/core';
import { CustomToastService } from './toast.service';

@Component({
  selector: 'app-toast',
  template: `
    <ng-template #customToast let-toast>
      <div>
        <div>İşlem Başarılı</div>
      </div>
    </ng-template>
  `,
})
export class ToastComponent implements AfterViewInit {
  @ViewChild('customToast', { read: TemplateRef }) customToastRef!: TemplateRef<any>;

  constructor(private readonly customToastService: CustomToastService) {}

  ngAfterViewInit() {
    this.customToastService.setCustomToastTemplate(this.customToastRef);
  }
}
