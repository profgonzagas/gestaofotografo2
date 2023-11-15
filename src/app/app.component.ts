import { Component, ElementRef, ViewChild, AfterViewInit } from '@angular/core';
import * as M from 'materialize-css'; 
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { LocalStorageService } from './local-storage.service';  // Corrigido o caminho de importação


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {
  @ViewChild('mobile') sideNav?: ElementRef;
  title = 'gestaofotografo';
  inputname = '';
  formulario: FormGroup;
  resultadoLocalStorage: any; 
  mostrarResultado: boolean = false;
  today: Date = new Date();
  username: string = '';

  constructor(private fb: FormBuilder, private localStorageService: LocalStorageService) {
    this.formulario = this.fb.group({
      nome: ['', Validators.required],
      username: [''],
      email: ['', [Validators.required, Validators.email]],
      senha: ['', [Validators.required, Validators.pattern(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/)]],
    });
  }
  
  onUsernameInput(event: any): void {
    this.username = event.target.value.toUpperCase();
  }
  TranferData(name: any) {
    this.inputname = name;
  }

  ngAfterViewInit(): void {
    if (this.sideNav) {
      const sidenavInstance = M.Sidenav.init(this.sideNav.nativeElement);
    }
  }
  cadastrarUsuario() {
    const dadosUsuario = this.formulario.value;
    this.localStorageService.set('usuario', dadosUsuario);
    this.resultadoLocalStorage = dadosUsuario;
    this.mostrarResultado = true;
  }

  testLocalStorage() {
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
