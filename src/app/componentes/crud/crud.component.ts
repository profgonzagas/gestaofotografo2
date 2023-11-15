// crud.component.ts
import { Component, OnInit } from '@angular/core';
import { CrudService } from './../../services/crud.service';
import { Images } from 'src/app/models/placeholder.model';

@Component({
  selector: 'app-crud',
  templateUrl: './crud.component.html',
  styleUrls: ['./crud.component.css']
})
export class CrudComponent implements OnInit {
  firstImage: Images | undefined;
  erro: any;
  ids: number[] = [];
  images: any;
  
  constructor(private crudService: CrudService) {
    this.getter();
  }

  ngOnInit() {}

  getter() {
    this.crudService.getFotos().subscribe(
      (data: Images) => {
        this.images = data;
        console.log('Imagem data: ', data);
        console.log('Imagem do banco de dados: ', this.images);
      },
      (error: any) => {
        this.erro = error;
        console.error('Error:', error);
      }
    );
  }
}
