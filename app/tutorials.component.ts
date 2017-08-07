import { Component } from '@angular/core';

@Component({
    selector: 'my-tutorial',
    template: `<h4>{{title}}</h4>
               <div [class.myClass]='ApplyClass'>My Class Activated</div>
               <div [style.color]="inlineStyle? 'brown': 'green'">Inline style Testing</div>`,
    styles: [`.myClass{
            color: red;
        }`]   
})

export class TutorialsComponent{

    public title = 'Tutorial Heading Updated';
    public ApplyClass = true;
    public inlineStyle = true;
  
}