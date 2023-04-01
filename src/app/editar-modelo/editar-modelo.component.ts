import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-editar-modelo',
  templateUrl: './editar-modelo.component.html',
  styleUrls: ['./editar-modelo.component.css']
})
export class EditarModeloComponent {
  criarModeloForm: FormGroup;
  opcoesSelecionarColecao = [
    { value: '1', label: 'Coleção 1' },
    { value: '2', label: 'Coleção 2' },
    { value: '3', label: 'Coleção 3' },
  ];

  constructor(private formBuilder: FormBuilder) {
    this.criarModeloForm = this.formBuilder.group({
      nomeModelo: '',
      tipoModelo: '',
      Selecionarcolecao: '',
      responsavel: '',
      possuiBordas: '',
      possuiEstampa: ''
    });
  }

  onSubmit() {
    // Lógica para submeter o formulário
  }
}
