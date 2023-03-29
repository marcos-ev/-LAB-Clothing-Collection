import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DadosService } from '../dados.service';

@Component({
  selector: 'app-criar-modelo',
  templateUrl: './criar-modelo.component.html',
  styleUrls: ['./criar-modelo.component.css']
})
export class CriarModeloComponent {
  criarModeloForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private dadosService: DadosService) {
    this.criarModeloForm = this.formBuilder.group({
      nomeModelo: ['', Validators.required],
      marca: ['', Validators.required],
      anoLancamento: ['', Validators.required],
      preco: ['', Validators.required],
      descricao: ['', Validators.required]
    });
  }

  onSubmit() {
    this.dadosService.addDado({
      nome: this.criarModeloForm.value.nomeModelo,
      marca: this.criarModeloForm.value.marca,
      anoLancamento: this.criarModeloForm.value.anoLancamento,
      preco: this.criarModeloForm.value.preco,
      descricao: this.criarModeloForm.value.descricao
    }, 'modelos');
    this.criarModeloForm.reset();
  }
}
