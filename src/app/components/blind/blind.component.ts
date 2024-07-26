import { Component, OnInit } from '@angular/core';
import faqs from '../../../../public/assest/data/faq.json';

interface FAQ {
  faq_title: string;
  faq_answer: string;
}

@Component({
  selector: 'app-blind',
  templateUrl: './blind.component.html',
  styleUrls: ['./blind.component.css']
})
export class BlindComponent implements OnInit {
  faqs: FAQ[] = faqs;

  constructor() {}

  ngOnInit() {}
}
