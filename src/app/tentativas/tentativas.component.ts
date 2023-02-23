import { Component, OnInit, OnChanges, Input, SimpleChanges } from '@angular/core';
import { Coracao } from '../shared/coracao.model';


@Component({
  selector: 'app-tentativas',
  templateUrl: './tentativas.component.html',
  styleUrls: ['./tentativas.component.css']
})
export class TentativasComponent implements OnInit, OnChanges {

  //public coracaoVazio: string = "/assets/coracao_vazio.png"
  //public coracaoCheio: string = "/assets/coracao_cheio.png"

  @Input() public tentativas!: number

  public coracoes: Coracao[] = [
    new Coracao(true),
    new Coracao(true),
    new Coracao(true)
  ]

  constructor() { }

  ngOnChanges(changes: SimpleChanges): void {
    //console.log(this.tentativas)

    if(this.tentativas !== this.coracoes.length){
      // 3 - 2 = 1
      let indice= this.coracoes.length - this.tentativas - 1
      this.coracoes[indice].cheio = false
    }

    
  }

  ngOnInit(): void {
    
  }

}
