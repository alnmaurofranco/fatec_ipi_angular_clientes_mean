import { Component, Output, EventEmitter } from '@angular/core';
import { Cliente } from './cliente.inserir.interface';

@Component({
  selector: 'app-cliente-inserir',
  styleUrls: ['./cliente.inserir.component.css'],
  templateUrl: './cliente.inserir.component.html',
})
export class ClienteInserirComponent {
  @Output() clienteAdicionado = new EventEmitter<Cliente>();

  nome: string;
  email: string;
  telefone: string;

  onAdicionarCliente() {
    const cliente = {
      nome: this.nome,
      email: this.email,
      telefone: this.telefone,
    } as Cliente;

    this.clienteAdicionado.emit(cliente);

    console.log('inserindo...');
  }
}
