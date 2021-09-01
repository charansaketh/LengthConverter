
import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'length-converter',
  templateUrl: './lengthConverter.component.html',
  styleUrls: ['./lengthConverter.component.scss']
})
export class LengthConverter implements OnInit {
  lengthOptions = [
    {
      id: 0,
      label: 'Kilometre',
      unit: 'km'
    },
    {
      id: 1,
      label: 'Metre',
      unit: 'm'
    },
    {
      id: 2,
      label: 'Centimetre',
      unit: 'cm'
    }
  ];

  input1: number;
  input2: number;
  select1: number;
  select2: number;
  unit1: string;
  unit2: string;

  ngOnInit() {
    this.unit1 = this.lengthOptions[0].unit;
    this.select1 = this.lengthOptions[0].id;

    this.unit2 = this.lengthOptions[1].unit;
    this.select2 = this.lengthOptions[1].id;
  }

  onInputChange(value: number, input: string) {
    if(value) {
      this.evaluate(input);
    } else {
      this.input1 = null;
      this.input2 = null;
    }
  }

  onOptionChange(value: string, select: string) {
    if(value) {
      if(select === 'select1') {
        this.unit1 = (this.lengthOptions.find(val => val.id === +value)).unit;
      } else {
        this.unit2 = (this.lengthOptions.find(val => val.id === +value)).unit;
      }
      this.evaluate(select)
    }
  }

  evaluate(input: string) {
    if(input === 'input1' || input === 'select2') {
      if((this.unit1 === 'km' && this.unit2 === 'km') || (this.unit1 === 'm' && this.unit2 === 'm') || (this.unit1 === 'cm' && this.unit2 === 'cm')) {
        this.input2 = this.input1;
      } else if(this.unit1 === 'km' && this.unit2 === 'm') {
        this.input2 = this.input1 * 1000;
      } else if(this.unit1 === 'km' && this.unit2 === 'cm') {
        this.input2 = this.input1 * 100000;
      } else if(this.unit1 === 'm' && this.unit2 === 'cm') {
        this.input2 = this.input1 * 100;
      } else if(this.unit1 === 'm' && this.unit2 === 'km') {
        this.input2 = this.input1 / 1000;
      } else if(this.unit1 === 'cm' && this.unit2 === 'm') {
        this.input2 = this.input1 / 100;
      } else if(this.unit1 === 'cm' && this.unit2 === 'km') {
        this.input2 = this.input1 / 100000;
      }
    } else {
      if((this.unit2 === 'km' && this.unit1 === 'km') || (this.unit2 === 'm' && this.unit1 === 'm') || (this.unit2 === 'cm' && this.unit1 === 'cm')) {
        this.input1 = this.input2;
      } else if(this.unit2 === 'km' && this.unit1 === 'm') {
        this.input1 = this.input2 * 1000;
      } else if(this.unit2 === 'km' && this.unit1 === 'cm') {
        this.input1 = this.input2 * 100000;
      } else if(this.unit2 === 'm' && this.unit1 === 'cm') {
        this.input1 = this.input2 * 100;
      } else if(this.unit2 === 'm' && this.unit1 === 'km') {
        this.input1 = this.input2 / 1000;
      } else if(this.unit2 === 'cm' && this.unit1 === 'm') {
        this.input1 = this.input2 / 100;
      } else if(this.unit2 === 'cm' && this.unit1 === 'km') {
        this.input1 = this.input2 / 100000;
      } 
    }
  }
}
