import { Component } from '@angular/core';

@Component({
  selector: 'app-cliente-inserir',
  styleUrls: ['./cliente.inserir.component.css'],
  templateUrl: './cliente.inserir.component.html',
})
export class ClienteInserirComponent {
  nome: string;
  email: string;
  telefone: string;

  onAdicionarCliente() {
    console.log('inserindo...');
  }
}
