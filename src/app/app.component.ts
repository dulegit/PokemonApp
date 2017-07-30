import { Component } from '@angular/core';
import { Http, Response } from '@angular/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Pokémon App';
  link = 'http://pokeapi.co/api/v2/pokemon/';
  linkColor = 'http://pokeapi.co/api/v2/pokemon-color/';
  http: Http;
  pokemon = [];
  pokemonColor = [];

  constructor(http:Http) {
  	this.http = http;
  }

  performSearch(searchTerm: HTMLInputElement): void {
  	var apiLink = this.link + searchTerm.value;
  	this.http.request(apiLink)
  		.subscribe(
  			(res: Response) => {
  				this.pokemon = res.json();
  				console.log(this.pokemon);
  			},
  			err => {
  				this.pokemon = err;
  				console.log(err);
  			}
  		);
  	//console.log('User entered: ${searchTerm.value}');
  	// bulbasaur
  }
  performSearchColor(searchColor: HTMLInputElement): void {
  	var apiLink2 = this.linkColor + searchColor.value;
  	this.http.request(apiLink2)
  		.subscribe((res: Response) => {
  			this.pokemonColor = res.json();
  			console.log(this.pokemonColor);
  		});
  }
}
