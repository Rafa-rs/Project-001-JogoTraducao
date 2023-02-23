export class Coracao {
    constructor(
        public cheio: boolean,
        public urlCoracaoCheio: string = '/assets/coracao_cheio.png',
        public urlCoracaoVazio: string = '/assets/coracao_vazio.png'
    ){  }

    public exibeCoracao(): string{
        if(this.cheio){
            return this.urlCoracaoCheio //Se verdadeiro
        }else{
            return this.urlCoracaoVazio //Se falso
        }
    }
}