import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
})
export class HomePageComponent implements OnInit {
  public slides = [
    { src: 'https://source.unsplash.com/random/?city,night' },
    { src: 'https://source.unsplash.com/random/?city,arles' },
    { src: 'https://source.unsplash.com/random/?city,Paris' },
    { src: 'https://source.unsplash.com/random/?bird' },
  ];
  constructor() {}

  ngOnInit(): void {}
}
