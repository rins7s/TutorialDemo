import { Component } from '@angular/core';

@Component({
    selector: 'my-tutorial',
    template: `<h4>{{title}}</h4>
    <p [ngClass]='{classOne:cOne,classTwo:cTwo}'>ngClass activated</p>
    <button (click)="toggle()">Toggle</button>
    <p [ngStyle]="{'font-style':style,'font-size':size}">ngStyle paragraph</p>`,
    styles: [`.classOne{color:white;}
               .classTwo{background-color:black;}`]
})

export class TutorialsComponent{

    public title = 'Tutorial Heading Updated';
    
    public cOne = true;
    public cTwo = true;

    public style= 'italic';
    public size = '30px';
 
    toggle(){
       this.cOne = !this.cOne;
       this.cTwo = !this.cTwo;


    }
  
}