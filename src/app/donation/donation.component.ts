import { Component } from '@angular/core';

@Component({
  selector: 'app-donation',
  templateUrl: './donation.component.html',
  styleUrls: ['./donation.component.css']
})
export class DonationComponent {
  donationAmount: number = 0;
  depositMessage: string = '';
  depositInvalid: boolean = false;
  value: number = 0;
  name: string = '';

  onInputChange(event: any) {
    const inputValue = event.target.value;
    const numericValue = inputValue.replace(/[^0-9]/g, ''); // Remove caracteres não numéricos

    this.name = numericValue; // Atualiza o modelo com o valor numérico
  }
  onSubmit() {
    // Handle form submission here
    if (this.name !== '') {
      // Do something with the name, e.g., submit it to a server or perform other actions.
      console.log(`Name submitted: ${this.name}`);
    }
  }
  onResetClick() {
    // Implemente a lógica para redefinir o valor aqui
  }

  constructor() {}

  processDonation() {
    // adicionar a lógica para processar a doação.
  
    console.log(`Doação de ${this.donationAmount} realizada.`);
  }
}

