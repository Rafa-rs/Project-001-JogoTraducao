import { Component, OnInit, EventEmitter, Output, OnDestroy } from '@angular/core';

import { Frase } from '../shared/frase.model';

import { FRASES } from './frases-mock';

@Component({
  selector: 'app-painel',
  templateUrl: './painel.component.html',
  styleUrls: ['./painel.component.css']
})
export class PainelComponent implements OnInit, OnDestroy {

  public instrucao: String = 'Traduza a Frase:'
  public frases: Frase[]= FRASES //Atributo
  public resposta: string= ''

  public rodada: number = 0
  public rodadaFrase!: Frase
  public progressoPai: number = 0

  public tentativas: number = 3

  @Output() public encerrarJogo: EventEmitter<string> = new EventEmitter

  constructor() { 
    
    this.atualizaRodada()
    
  }

  ngOnInit(): void {  }

  ngOnDestroy(): void {
      //testar se o componente foi destruído realmente
      //console.log('Componente Destruido!!!!!!!!!!!!!')
  }

  public atualizaResposta(resposta: Event): void {
    this.resposta= ((<HTMLInputElement>resposta.target).value)
    //console.log(this.resposta)
  }

  public verificarResposta(): void{

    if (this.rodadaFrase.frasePtBr == this.resposta){
       alert('Tradução correta!!!')

       //trocar pergunta da rodada
      this.rodada++

      //Avançar o progresso
      this.progressoPai = this.progressoPai + (100 / this.frases.length)
      //console.log(this.progressoPai)
      
      //atualiza a rodada
      this.atualizaRodada()
      
      //Fim da rodada
      if(this.rodada === 4){
        this.encerrarJogo.emit('vitória') //Emissão do evento
      }
      
    }else{ 
      
      //diminuir as tentativas
      this.tentativas --
      if(this.tentativas === -1){
        this.encerrarJogo.emit('derrota') //Emissão do evento
      }
    }

  }

  public atualizaRodada(): void {

    //recuperar a frase de acordo com a rodada
    this.rodadaFrase= this.frases[this.rodada]

    //Limpar resposta
    this.resposta= ''
  }

}
