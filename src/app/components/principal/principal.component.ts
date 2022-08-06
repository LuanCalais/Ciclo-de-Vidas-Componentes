import { Component, OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy, Input } from '@angular/core';

@Component({
  selector: 'app-principal',
  templateUrl: "./principal.component.html",
  styleUrls: [ './principal.component.css'
  ]
})
export class PrincipalComponent implements OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {

  // Expondo variável através de input propety
  @Input() valorInicial: number = 10;
  // valorIncial: number = 10;

  constructor() {
     this.log('constructor');
   }

  ngOnChanges(){
    this.log('ngOnChanges');
  }

  ngOnInit() {
    this.log('ngOnInit');
  }

  ngDoCheck() {
    this.log('ngDoCheck');
  }

  ngAfterContentInit() {
    this.log('ngAfterContentInit');
  }

  ngAfterContentChecked() {
    this.log('ngAfterContentChecked');
  }

  ngAfterViewInit(){
    this.log('ngAfterViewInit')
  }

  ngAfterViewChecked() {
    this.log('ngAfterViewChecked');
  }

  ngOnDestroy() {
    this.log('ngOnDestroy');
  }

  log(hook: string){
    console.log(`iniciado ${hook}`);
  }

}
