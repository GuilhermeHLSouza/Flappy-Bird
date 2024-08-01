class obj{
    constructor(posx,posy,largura,altura,imagem){
        this.posx = posx
        this.posy = posy
        this.largura = largura
        this.altura = altura
        this.imagem = imagem
    }
    draw(){
        let img = new Image(this.imagem)
    }
}