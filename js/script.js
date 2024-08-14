const canvas = document.getElementById('canvas').getContext('2d') 
//daqui pra baixo tem os códigos novos


let bg = new Bg(0,0,500,900,'img/ceu1.jpeg') //atribuindo valores aos parametros feitos no construtor: altura, largura, posições e imagem
let bg2 = new Bg(500,0,500,900,'img/ceu1.jpeg')
let ground = new Ground(0,700,500,200,'img/chao.jpeg')
let ground2 = new Ground(500,700,500,200,'img/chao.jpeg')
let bird = new Bird(50,400,63,51, 'img/flip1.jpeg') //inserindo a imagem do bird pra depois fazemo a animação


function draw(){
bg.draw()
bg2.draw()
ground.draw()
ground2.draw()
bird.draw()
}

function update(){
    bg.move(5,-500,0)
    bg2.move(5,0,500)
    ground.move(2,-500,0)
    ground2.move(2,0,500)
    bird.animacao(7,4,'flip')
}

function main(){ //função tipo o do jogo da abelha para reiniciar a pagina, deve ser praquela movimentação do cenário
    canvas.clearRect(0,0,500,900)
    update()
    draw()
    requestAnimationFrame(main)
}
main()