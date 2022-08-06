import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `<app-principal [valorInicial]="valor"></app-principal>
  `,
  styles: []
})
export class AppComponent {
  valor: number = 5;
}
