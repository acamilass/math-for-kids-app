import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tell-your-name',
  templateUrl: './tell-your-name.component.html',
  styleUrls: ['./tell-your-name.component.scss']
})
export class TellYourNameComponent implements OnInit {

  kidName: string = '';

  constructor(private readonly router: Router) { }

  ngOnInit(): void {
  }

  getKidName() {
    window.localStorage.setItem('nome', this.kidName);
    setTimeout(() => this.router.navigate(['continhas']), 400);
  }

}
