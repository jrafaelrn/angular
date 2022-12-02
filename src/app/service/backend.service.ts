import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { delay, first, Observable, tap } from 'rxjs';

import { Login } from '../model/login';
import { Usuario } from '../model/usuario';
import { ProvasRealizadas } from '../model/provas-realizadas';
import { NovaProva } from '../model/nova-prova';


@Injectable({
  providedIn: 'root'
})
export class BackendService {

  private readonly API_QUESTOES = '/controller/listar/questoes?disciplina=';
  private readonly API_POST = '/controller/listar/gabarito/avaliacao?avaliacao=';
  private readonly API_CADASTRO = '/controller/adicionar/usuario';
  private readonly API_LIST_PROVAS = '/controller/listar/gabarito?id_aluno=';
  private readonly API_NOVA_PROVA = '/controller/adicionar/prova';
  private readonly API_PROVA = '/controller/listar/prova';
  private readonly API_GABARITO = '/controller/adicionar/gabarito';

  
  LS_CHAVE: string = "usuarioLogado";

  constructor(private httpClient: HttpClient) { }

  //efetua o login, buscando no banco
  public login(request: Login): Observable<Usuario> {
    const api = '/controller/login?login=';
    console.log(api + request.login+'&senha='+request.senha)
    return this.httpClient.get<Usuario>(api + request.login+'&senha='+request.senha).pipe(
      tap((loginResponse) => (this.salvarSessionStorage(loginResponse)))
    );
  }

  save(record: Usuario) {
    return this.httpClient.post<Usuario>(this.API_CADASTRO, record).pipe(first());
  }

  saveProva(record: NovaProva) {
    return this.httpClient.post<NovaProva>(this.API_NOVA_PROVA, record).pipe(first());
  }

  saveGabarito(record: ProvasRealizadas) {
    return this.httpClient.post<ProvasRealizadas>(this.API_GABARITO, record).pipe(first());
  }



  //retorna o usuario logado
  public get usuarioLogado(): Usuario {
    let usu = sessionStorage.getItem(this.LS_CHAVE);
    return (usu ? JSON.parse(usu) : null);
  }

  public set usuarioLogado(usuario: Usuario) {
    localStorage[this.LS_CHAVE] = JSON.stringify(usuario);
  }

  //remove o usuario do registro
  logout() {
    sessionStorage.clear();
    delete localStorage[this.LS_CHAVE];
  }

  public salvarSessionStorage(usuario: Usuario) {
    sessionStorage.setItem(this.LS_CHAVE, JSON.stringify(usuario));
  }


  //para o rank
  public listQuestoes(disciplina: string) {
    return this.httpClient.get<any[]>(this.API_QUESTOES+disciplina).pipe(
      first(),
      tap(questoes => console.log(questoes))
    );
  }

   //para o rank
   public listProvas() {
    return this.httpClient.get<any[]>(this.API_PROVA).pipe(
      first(),
      tap(provas => console.log(provas))
    );
  }


  //carregar os posts de todos os usuarios
  public listProvasCorrigir() {
    return this.httpClient.get<any[]>(this.API_POST+'nao').pipe(
      first(),
      tap(diagnosticos => console.log(diagnosticos))
    );
  }




  public listProvasRealizadas() {

    return this.httpClient.get<ProvasRealizadas[]>(this.API_LIST_PROVAS+this.usuarioLogado.id).pipe(
      first(),
      tap(provas => console.log(provas))
    );
  }


}
