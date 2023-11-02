import { Component, OnInit, Input,Output, EventEmitter, ElementRef,ViewChild } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  template: '<button (click)="sendData()">Send Data</button>',
  styleUrls: ['./child.component.css']
})
export class ChildComponent {
  @Input()
  data:string = 'Mensagem escrita no componente filho'

  @Output()
  eventoEnviarData = new EventEmitter<string>()

  @ViewChild('valores')
  valores!: ElementRef<HTMLInputElement>

  enviarData(valor:string) {
    this.eventoEnviarData.emit(valor)
    console.log(this.valores.nativeElement.value);
    
    //this.valores.nativeElement.value = ''
      
  }
}
