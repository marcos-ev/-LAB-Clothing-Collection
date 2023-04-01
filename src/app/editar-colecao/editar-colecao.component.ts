import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-editar-colecao',
  templateUrl: './editar-colecao.component.html',
  styleUrls: ['./editar-colecao.component.css']
})
export class EditarColecaoComponent implements OnInit {

  criarColecaoForm: FormGroup = new FormGroup({});

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.criarColecaoForm = this.formBuilder.group({
      nome: [''],
      descricao: ['']
    });
  }

  onSubmit() {
    console.log(this.criarColecaoForm.value);
  }

}
