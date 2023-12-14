import { Component } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent {
  portfolioItems = [
    {
      title: 'Casamento',
      description: 'Realizamos seu casamento',
      image: 'assets/casamento.jpg',
      link: 'link_para_detalhes_1'
    },
    {
      title: 'Festas',
      description: 'Registramos sua festa',
      image: 'assets/festas.jpg',
      link: 'link_para_detalhes_2'
    },
   
  ];
}
