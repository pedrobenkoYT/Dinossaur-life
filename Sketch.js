var player
var bot
var botImg
var playerImg
var playerImgesquerda
var playerImgidle
function preload() {
    playerImg= loadAnimation("estego/player1.png","estego/player2.png","estego/player3.png","estego/player4.png","estego/player5.png","estego/player6.png","estego/player7.png","estego/player8.png")
    playerImgesquerda= loadAnimation("estego/player-esquerda1","estego/player-esquerda2","estego/player-esquerda3","estego/player-esquerda4","estego/player-esquerda5","estego/player-esquerda6","estego/player-esquerda7","estego/player-esquerda8")
    playerImgidle= loadAnimation("estego/player3.png")
}
function setup(){

    createCanvas(800,600)
     player = createSprite(200,500,30,30)
     player.addAnimation("parado",playerImgidle)
     player.addAnimation("direita",playerImg)
     player.addAnimation("esquerda",playerImgesquerda)
    
}
function draw(){
    
background("lightblue")

drawSprites()
}