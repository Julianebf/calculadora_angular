import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-minhacalculadora',
  standalone: true,
  imports: [FormsModule], 
  templateUrl: './minhacalculadora.component.html',
  styleUrls: ['./minhacalculadora.component.scss'] 
})
export class MinhacalculadoraComponent {

  numero1: number = 0;
  numero2: number = 0;

  resultado: number = 0;

  calcularResultado(){
    this.resultado = this.numero1 + this.numero2;
  }
}