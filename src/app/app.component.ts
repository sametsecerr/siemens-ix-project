import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'siemens-ix-project';
  loading = true;


  logoPath: string = 'assets/images/logo.svg';

  ngOnInit() {
    setTimeout(() => {
      this.loading = false;
    }, 2000);
  }
}
