import { Component } from '@angular/core';

@Component({
    selector: 'my-tutorial',
    template: `<h3>{{title}}</h3>`
   
})

export class TutorialsComponent{
    private title="Tutorial Heading Updated"

}