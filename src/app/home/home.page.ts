import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
	dadosRepublicas = [];

	constructor() {}

  	ngOnInit() {
  		this.dadosRepublicas = [
  			{
  				nomeRepublica: 'RepublicaDosZé',
				endereco: 'Rua dos Zes',
				quantidadeDeQuartos: '5',
				preco: '600',
			},
			{
				nomeRepublica: 'RepublicaDoisZé',
				endereco: 'Rua dos Zes',
				quantidadeDeQuartos: '1',
				preco: '800',
			},
			{
  				nomeRepublica: 'RepublicaDosZézin',
				endereco: 'Rua dos Zes',
				quantidadeDeQuartos: '5',
				preco: '700',
			},
			{
  				nomeRepublica: 'RepublicaDosZézão',
				endereco: 'Rua dos Zes',
				quantidadeDeQuartos: '3',
				preco: '500',
			},
			{
  				nomeRepublica: 'RepublicaDosZéca',
				endereco: 'Rua dos Zes',
				quantidadeDeQuartos: '2',
				preco: '400',
			},
  		]
	}
}
