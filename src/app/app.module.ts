import { LoginComponent } from './login/login.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router'; 
import { ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { FooterComponent} from './footer/footer.component';
import { DonationComponent } from './donation/donation.component';
import { HomeComponent } from './home/home.component'; 
import { SobreComponent } from './sobre/sobre.component'; 
import { ContatoComponent } from './contato/contato.component';
import { ChildComponent } from './child/child.component';
import { FatherComponent } from './father/father.component';
import { ButtonComponent } from './button/button.component';

import { CamelCasePipe } from './camel-case.pipe';
import { CrudComponent } from './componentes/crud/crud.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatToolbarModule} from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import { MatMenuTrigger } from '@angular/material/menu';
import { ServicosComponent } from './servicos/servicos.component';
import { BlogComponent } from './blog/blog.component';
import { PortfolioComponent } from './portfolio/portfolio.component';



@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    FooterComponent,
    DonationComponent,
    ChildComponent,
    FatherComponent,
    ButtonComponent,
    
   
    CamelCasePipe,
         CrudComponent,
         ContatoComponent,
         ServicosComponent,
         BlogComponent,
         PortfolioComponent,
    
   
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    AppRoutingModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    

    RouterModule.forRoot([ 
      { path: '', component: HomeComponent },
      { path: 'sobre', component: SobreComponent },
      { path: 'contato', component: ContatoComponent },
      { path: 'portfolio', component: PortfolioComponent },
      { path: 'servicos', component: ServicosComponent },
      { path: 'blog', component: BlogComponent },
      
    ]),
                 BrowserAnimationsModule,
  ],
  providers: [HttpClient, MatMenuTrigger],
  bootstrap: [AppComponent]
})
export class AppModule { }
