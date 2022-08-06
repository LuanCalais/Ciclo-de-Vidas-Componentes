import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <button (click)="mudarValor()">Mudar Valor</button>
  <button (click)="destruirCiclo()">Destruir</button>
  <app-principal [valorInicial]="valor" *ngIf="!deletarCiclo"></app-principal>
  `,
  styles: []
})
export class AppComponent {

  // Valor em property binding
  // Efetuamos o incremento atiavando alterações no compoenente
  // São disparados - ngOnChanges, ngDoCheck, ngAfterContentChecked e ngAfterViewChecked
  valor: number = 5;
  mudarValor(){
    this.valor++;
  }

  // Variável booleana que controla o aparecimento do componente <app-principal> com o ngIf
  // Assim que o ngIf for false, o que removera o carregamento do componente 
  // o ngOnDestroi() é chamado
  deletarCiclo: boolean = false;
  destruirCiclo(){
     this.deletarCiclo = true;
  }

}
