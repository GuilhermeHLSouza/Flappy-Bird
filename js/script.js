const canvas = document.getElementById('canvas').getContext('2d') 
//daqui pra baixo tem os códigos novos


let bg = new Bg(0,0,500,900,'img/ceu1.jpeg') //atribuindo valores aos parametros feitos no construtor: altura, largura, posições e imagem
let bg2 = new Bg(500,0,500,900,'img/ceu1.jpeg')
let ground = new Bg(0,700,500,200,'img/gameover.jpeg')
let ground2 = new Bg(0,700,500,200,'img/gameover.jpeg')

function draw(){
bg.draw()
bg2.draw()
ground.draw()
ground2.draw()
}

function update(){
    bg.move(10,-500,0)
    bg2.move(10,0,500)
    ground.move(10,-500,0)
    ground2.move(10,0,485)
}

function main(){ //função tipo o do jogo da abelha para reiniciar a pagina, deve ser praquela movimentação do cenário
    canvas.clearRect(0,0,500,900)
    update()
    draw()    
}

setInterval(main,100)