import { Component } from '@angular/core';

@Component({
    selector: 'my-tutorial',
    template: '<h4>{{title}}</h4>'
})

export class TutorialsComponent{

    private title = 'Tutorial Heading Updated';
}