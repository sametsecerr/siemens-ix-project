import { Component } from '@angular/core';

@Component({
  selector: 'app-product-detail-form',
  templateUrl: './product-detail-form.component.html',
  styleUrl: './product-detail-form.component.css'
})
export class ProductDetailFormComponent {
  data = {
    firstName: '',
    lastName: '',
    email: '',
  };

  wasValidated = false;

  onSubmit(event: SubmitEvent) {
    event.preventDefault();

    this.wasValidated = true;
  }


}
