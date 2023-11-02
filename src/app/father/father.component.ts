import { Component } from '@angular/core';

@Component({
  selector: 'app-father',
  templateUrl: './father.component.html',
  styleUrls: ['./father.component.css']
})
export class FatherComponent {
  dataPai = "Mensagem escrita no componete PAI"
  arrayCores: string[] = ['Verde', 'Amarelo', 'Roxo'];

  // Método para adicionar dados ao array
  agregarArray(novosValores: string) {
    this.arrayCores.push(novosValores);
}
}
