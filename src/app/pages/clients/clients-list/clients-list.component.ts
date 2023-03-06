import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import ListaAtivosJson from './oikos_teste_frontend-lista_ativos.json';

interface ATIVOS {
  _id:string;
  company: string;
  asset: string;
  type: string;
  additionalInfo: {
    allotmentSize: number;
    unitPrice: number;
  }
}

@Component({
  selector: 'app-clients-list',
  templateUrl: './clients-list.component.html',
  styleUrls: ['./clients-list.component.css']
})
export class ClientsListComponent implements OnInit {
  ativos: any[] = ListaAtivosJson;

  constructor(private router:Router) {}

  ngOnInit(): void {

  }

  voltarParaLogin() {
    this.router.navigate(['']);
  }
}
