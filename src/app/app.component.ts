import { NgFor } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NgFor, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements OnInit{
  filtro = '';

  linguagens = [
    { id: 1, nome: 'Java', tipo: 'Compilada' },
    { id: 2, nome: 'Python', tipo: 'Interpretada' },
    { id: 3, nome: 'JavaScript', tipo: 'Interpretada' },
    { id: 4, nome: 'C#', tipo: 'Compilada' },
  ];

  constructor(
    private acRouter: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    this.acRouter.queryParams.subscribe(params => {
      const param = params['filtro'] || '';
      console.log(param);
      this.linguagens = this.linguagens.filter(l => l.nome.toLowerCase().includes(param.toLowerCase()));
    });

  }

  filtrar() {
    const queryParams = {
      filtro: this.filtro,
    };
    this.router.navigate(['/pesquisar'], { queryParams });
  }

}
