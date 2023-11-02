
import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import * as M from 'materialize-css'; // Importe o Materialize CSS

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {
  @ViewChild('mobile') sideNav?: ElementRef;
  title = 'gestaofotografo';
  inputname='';
  TranferData(name:any){
    this.inputname=name;
  }

  ngAfterViewInit(): void {
    if (this.sideNav) {
      const sidenavInstance = M.Sidenav.init(this.sideNav.nativeElement);
    }
  }
}

