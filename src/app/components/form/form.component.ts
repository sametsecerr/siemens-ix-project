import { Component } from '@angular/core';
import { CustomToastService } from '../toast/toast.service';
@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {
  data = {
    firstName: '',
    lastName: '',
    email: '',
  };

  wasValidated = false;

  constructor(private readonly customToastService: CustomToastService) {}

  onSubmit(event: SubmitEvent) {
    event.preventDefault();
    this.wasValidated = true;


     localStorage.setItem('formData', JSON.stringify(this.data));


    this.customToastService.showCustomToast();

  }
}
