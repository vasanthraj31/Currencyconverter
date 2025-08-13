import { CommonModule, DecimalPipe } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-converter',
  imports: [FormsModule,DecimalPipe,CommonModule],
  templateUrl: './converter.html',
  styleUrl: './converter.css'
})
export class Converter {
  amount: number = 0;
  fromCurrency: string = 'USD';
  toCurrency: string = 'INR';
  result: number | null = null;

  

  convertCurrency() {
    if (this.fromCurrency === 'USD' && this.toCurrency === 'INR') {
    this.result = this.amount * 83.2;
  } 
  else if (this.fromCurrency === 'INR' && this.toCurrency === 'USD') {
    this.result = this.amount * 0.012;
  } 
  else if (this.fromCurrency === 'USD' && this.toCurrency === 'EUR') {
    this.result = this.amount * 0.91;
  } 
  else if (this.fromCurrency === 'EUR' && this.toCurrency === 'USD') {
    this.result = this.amount * 1.1;
  }
  else if (this.fromCurrency === 'INR' && this.toCurrency === 'EUR') {
    this.result = this.amount * 0.011;
  }
  else if (this.fromCurrency === 'EUR' && this.toCurrency === 'INR') {
    this.result = this.amount * 89.5;
  }
  else {
    this.result = null;
    alert('Exchange rate not found');
  }
  }

}
