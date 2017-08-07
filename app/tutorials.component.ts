import { Component } from '@angular/core';

@Component({
    selector: 'my-tutorial',
    template: `<h4>{{title}}</h4>
    <p *ngIf="showElement">show element</p>
    <div [ngSwitch]="color">
        <p *ngSwitchWhen="'red'">red color displayed</p>
        <p *ngSwitchWhen="'blue'">blue color displayed</p>
        <p *ngSwitchDefault> invalid color</p>
    </div>
    <ul>
      <li *ngFor="let color of colors">{{color}}</li>
    </ul>`
})

export class TutorialsComponent{

    public title = 'Tutorial Heading Updated';
    public showElement = true;

    public color ="green";
    public colors =['red','green','blue','orange'];

 

  
}