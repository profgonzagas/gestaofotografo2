import { Component } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent {
  portfolioItems = [
    {
      title: 'Projeto 1',
      description: 'Descrição do projeto 1...',
      image: 'url_da_imagem_1',
      link: 'link_para_detalhes_1'
    },
    {
      title: 'Projeto 2',
      description: 'Descrição do projeto 2...',
      image: 'url_da_imagem_2',
      link: 'link_para_detalhes_2'
    },
   
  ];
}
