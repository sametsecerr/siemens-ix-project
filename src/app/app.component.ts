import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'siemens-ix-project';
  loading = true;

  ngOnInit() {

    setTimeout(() => {
      this.loading = false;
    }, 0);
  }
}
