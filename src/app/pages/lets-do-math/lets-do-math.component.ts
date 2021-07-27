import { Component, OnInit } from '@angular/core';
import { AlertService } from 'src/app/components/alerts/alert-message.service';

@Component({
  selector: 'app-lets-do-math',
  templateUrl: './lets-do-math.component.html',
  styleUrls: ['./lets-do-math.component.scss']
})
export class LetsDoMathComponent implements OnInit {

  options = {
    autoClose: true,
    keepAfterRouteChange: false
  };

  kidName: any;
  firstNumber: number = 0;
  secondNumber: number = 0;
  sign: string = '+';
  arrAnswers: Array<number> = [];

  ctrlMsg: boolean = false;

  constructor(private readonly alertService: AlertService) { }

  ngOnInit(): void {
    this.initialize();
    this.selectType('+');
  }

  selectType(type: string) {
    this.sign = type;
    this.arrAnswers = [];

    const result = this.math(type);
    this.randomizeAnswers(result);
  }

  math(type: string): number {
    if (type === '+') {
      return this.firstNumber + this.secondNumber;
    } else if (type === '-') {
      return this.firstNumber - this.secondNumber;
    } else if (type === 'x') {
      return this.firstNumber * this.secondNumber;
    } else {
      return 0;
    }
  }

  generateRandomNumbers(): number {
    return Math.floor(Math.random() * 11) + 2;
  }

  randomizeAnswers(answer: number): void {

    this.arrAnswers.push(answer);

    let ctrlNumber = answer;

    for (var i = 0; i < 2; i++) {
      ctrlNumber = i < 3 ? answer + this.generateRandomNumbers() : answer - this.generateRandomNumbers();
      this.arrAnswers.push(ctrlNumber);
    }

    this.shuffle(this.arrAnswers);

  }

  shuffle(newArray: Array<number>): Array<number> {
    let currentIndex = newArray.length;
    let temporaryValue;
    let randomIndex;

    while (0 !== currentIndex) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
      temporaryValue = newArray[currentIndex];
      newArray[currentIndex] = newArray[randomIndex];
      newArray[randomIndex] = temporaryValue;
    }

    return newArray;
  }

  setupClickAnswer(sign: string, value: number) {

    const result = this.math(sign);

    if (value === result) {
      this.alertService.success('EBAAA VOCÊ ACERTOU', this.options);
      this.initialize(sign);
    } else if (value !== result) {
      this.alertService.error('OPS TENTA DE NOVO', this.options);

      const index = this.arrAnswers.indexOf(value);

      if (index > -1) {
        this.arrAnswers.splice(index, 1);
      }
      return this.arrAnswers;
    }

    return '';
  }

  initialize(sign?: string): void {
    this.kidName = window.localStorage.getItem('nome');

    this.firstNumber = this.generateRandomNumbers();
    this.secondNumber = this.generateRandomNumbers();


    if (sign)
      this.selectType(sign);
  }

}
