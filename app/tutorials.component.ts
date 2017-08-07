import { Component } from '@angular/core';

@Component({
    selector: 'my-tutorial',
    template: `<h4>{{title}}</h4>
    <input type="text" [(ngModel)]="fname">
    <input type="text" [(ngModel)]="lname">
    Full Name:{{fname}} {{lname}}`
})

export class TutorialsComponent{

    public title = 'Tutorial Heading Updated';

    public fname;
    public lname;

  
}