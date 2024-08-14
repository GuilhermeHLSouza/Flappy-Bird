class obj{
    quadro = 0
    tempo = 0
    constructor(posx,posy,largura,altura,imagem){
        this.posx = posx
        this.posy = posy
        this.largura = largura
        this.altura = altura
        this.imagem = imagem
    }


      draw(){
        let img = new Image()
        img.src = this.imagem //variavel que está puxando a imagem lá de cima (a do construtor)
        canvas.drawImage(img,this.posx,this.posy,this.largura,this.altura) //puxando os parametro do construtor
     }


      animacao(vel,limite,nomeImg){ //função para a animação do passaro bird eba 
        this.tempo +=1;
        if(this.tempo >= vel){
            this.tempo = 0
            this.quadro += 1
        }
        if(this.quadro >= limite){
            this.quadro = 0
        }
        this.imagem = 'img/'+nomeImg+this.quadro+'.jpeg'
     }
}


class Bg extends obj{ //fazer o efeito paralax
     move(velocidade,limite,posicao){
        this.posx -= velocidade
        if(this.posx < limite)
        this.posx = posicao
     } 
   
}


class Ground extends Bg{

}
class Bird extends obj{

}

