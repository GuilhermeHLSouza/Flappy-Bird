class obj{
    constructor(posx,posy,largura,altura,imagem){
        this.posx = posx
        this.posy = posy
        this.largura = largura
        this.altura = altura
        this.imagem = imagem
    }

    //daqui pra baixo é codigo novo, gileme
    draw(){
        let img = new Image()
        img.src = this.imagem //variavel que está puxando a imagem lá de cima (a do construtor)
        canvas.drawImage(img,this.posx,this.posy,this.largura,this.altura) //puxando os parametro do construtor
    }
}

class Bg extends obj{ //fazer o efeito paralax
    move(velocidade,limite,posicao){
        this.posx -= velocidade
        if(this.posx < limite)
        this.posx = posicao
    }
}