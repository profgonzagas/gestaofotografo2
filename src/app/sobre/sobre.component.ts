// Importações necessárias do Angular
import { Component, ElementRef, ViewChild, AfterViewInit, NgModule } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

// Importações específicas do seu projeto
import { LocalStorageService } from '../local-storage.service';
import { ActivatedRoute } from '@angular/router';
import * as M from 'materialize-css';  

@Component({
  selector: 'app-sobre',
  templateUrl: './sobre.component.html',
  styleUrls: ['./sobre.component.css']
})
export class SobreComponent implements AfterViewInit {
  @ViewChild('mobile') sideNav?: ElementRef;
  title = 'gestaofotografo';
  formGroup: FormGroup;
  resultadoLocalStorage: any; 
  mostrarResultado: boolean = false;
  today: Date = new Date();
  username: string = '';
  inputname: string = ''; 

  
  constructor(
    private fb: FormBuilder,
    private localStorageService: LocalStorageService,
    private route: ActivatedRoute
  ) {
    this.formGroup = this.fb.group({
      username: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.required, Validators.email]),
      senha: new FormControl('', [Validators.required, Validators.pattern(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/)]),
    });
  }
  
  onUsernameInput(event: any): void {
    this.username = event.target.value.toUpperCase();
  }

  TransferData(name: any): void {
    this.inputname = name;
  }

  ngAfterViewInit(): void {
    if (this.sideNav) {
      const sidenavInstance = M.Sidenav.init(this.sideNav.nativeElement);
    }
  }

  cadastrarUsuario(): void {
    const dadosUsuario = this.formGroup.value;
    this.localStorageService.set('usuario', dadosUsuario);
    this.resultadoLocalStorage = dadosUsuario;
    this.mostrarResultado = true;
  }

  testLocalStorage(): void {
    // Testando o serviço LocalStorage
    const key = 'exemplo';
    const value = { mensagem: 'Isso é um exemplo.' };

    // Setando no LocalStorage
    this.localStorageService.set(key, value);

    // Obtendo do LocalStorage
    const resultado = this.localStorageService.get(key);
    console.log('Resultado do LocalStorage:', resultado);

    // Armazenando o resultado para exibição no HTML
    this.resultadoLocalStorage = resultado;

    // Exibindo o resultado no HTML
    this.mostrarResultado = true;

    // Removendo do LocalStorage
    this.localStorageService.remove(key);

    // Limpando o LocalStorage
    this.localStorageService.clear();
  }
}

@NgModule({
  imports: [CommonModule, ReactiveFormsModule],
  declarations: [SobreComponent],
})
export class SobreModule { }
