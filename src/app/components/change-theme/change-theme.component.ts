import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-change-theme',
  templateUrl: './change-theme.component.html',
  styleUrls: ['./change-theme.component.scss']
})
export class ChangeThemeComponent implements OnInit {

  constructor() {
  }

  ngOnInit(): void {
  }

  changeToBlue() {
    document.getElementById('page-body').style.backgroundColor = '#84a9c0';
    document.getElementById('flash-card').style.backgroundColor = '#bce7fd';
    document.getElementById('sign__btn-1').style.backgroundColor = '#bce7fd';
    document.getElementById('sign__btn-2').style.backgroundColor = '#bce7fd';
    document.getElementById('sign__btn-3').style.backgroundColor = '#bce7fd';
    document.getElementById('header').style.backgroundColor = '#6689a1';
  }

  changeToPink() {
    document.getElementById('page-body').style.backgroundColor = '#fe938c';
    document.getElementById('flash-card').style.backgroundColor = '#eac8ca';
    document.getElementById('sign__btn-1').style.backgroundColor = '#eac8ca';
    document.getElementById('sign__btn-2').style.backgroundColor = '#eac8ca';
    document.getElementById('sign__btn-3').style.backgroundColor = '#eac8ca';
    document.getElementById('header').style.backgroundColor = '#eb8258';
  }

}
