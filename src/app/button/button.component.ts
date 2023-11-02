import { Component, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent {
  @ViewChild('myButton') myButton!: ElementRef;

  constructor() {
    // Não é necessário inicializar myButton aqui.
  }

  handleClick() {
    // Acessando o botão usando ViewChild
    this.myButton.nativeElement.textContent = 'Clicado!';
    this.myButton.nativeElement.disabled = true;
  }
}


