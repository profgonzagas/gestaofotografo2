import { Component } from '@angular/core';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent {
  posts = [
    {
      id: 1,
      title: ' Post 1',
      date: new Date(),
      image: 'url_da_imagem_1',
      excerpt: 'Breve resumo do post 1...'
    },
    {
      id: 2,
      title: ' Post 2',
      date: new Date(),
      image: 'url_da_imagem_2',
      excerpt: 'Breve resumo do post 2...'
    },
    
  ];
}
