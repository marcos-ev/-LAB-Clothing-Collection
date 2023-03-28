import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-tabela-dados',
  templateUrl: './tabela-dados.component.html',
  styleUrls: ['./tabela-dados.component.css']
})
export class TabelaDadosComponent {
  @Input() dados!: any[];
}
