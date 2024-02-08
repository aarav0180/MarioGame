//import platform from './img/platform.png'

//console.log(platform)
const canvas = document.querySelector('canvas')
const context = canvas.getContext('2d')
canvas.width = 1024
canvas.height = 576

const accl = 1.5;

var pltfrming = new Image();
pltfrming.src = 'img/platform.png';

var bgground = new Image();
bgground.src = 'img/background.png';

var hillimg = new Image();
hillimg.src = 'img/hills.png'

var plttall = new Image();
plttall.src = 'img/platformSmallTall.png';

var plyrlft = new Image ();
plyrlft.src = 'img/spriteRunLeft.png';

var plyrrgt = new Image ();
plyrrgt.src = 'img/spriteRunRight.png';

var plyrstlft = new Image ();
plyrstlft.src = 'img/spriteStandLeft.png';

var plyrstrgt = new Image ();
plyrstrgt.src = 'img/spriteStandRight.png';


class Player {
    constructor(){
        this.position = { x: 100, y: 100 } 
        
        this.velocity = { x: 0, y: 0 }

        this.width = 66
        this.height = 150

        this.image = plyrstrgt
    }
    draw() {
        context.drawImage(this.image, 0, 0, 177, 400, this.position.x, this.position.y, this.width, this.height)
    }

    update(){
        this.draw()
        this.position.x += this.velocity.x
        this.position.y += this.velocity.y
        
        if(this.position.y + this.height + this.velocity.y <= canvas.height){
            this.velocity.y += accl;
        }
        
        
    }

}

class Platform {
    constructor(x, y , image) {
        this.position = {x, y}
        
        this.image = image
        this.width = image.width
        this.height = image.height

    }

    draw() {
        context.drawImage(this.image, this.position.x , this.position.y)
    }

}

class FaltuObjects {
    constructor(x, y , image) {
        this.position = {x, y}
        
        this.image = image
        this.width = image.width
        this.height = image.height

    }

    draw() {
        context.drawImage(this.image, this.position.x , this.position.y)
    }

}

let player = new Player()
let platforms = []

let faltuObjects = []

const keys = {
    right: {
        pressed: false 
    },
    left: {
        pressed: false
    } 
}

let distance = 0;


function init() {
class Player {
    constructor(){
        this.position = { x: 100, y: 100 } 
        
        this.velocity = { x: 0, y: 0 }

        this.width = 66
        this.height = 150
        this.image = plyrstrgt

        this.frame = 0

        this.move = {
            stand : {
                right: plyrstrgt,
                
            },
            stand2: {
                left: plyrstlft,

            }
        }

        this.currentMove = this.move.stand.right
        
    }
    draw() {
        context.drawImage(this.currentMove, 177 * this.frame, 0, 177, 400, this.position.x, this.position.y, this.width, this.height)
    }

    update(){
        this.frame++
        if(this.frame > 28){ this.frame = 0 } 
        this.draw()
        this.position.x += this.velocity.x
        this.position.y += this.velocity.y
        
        if(this.position.y + this.height + this.velocity.y <= canvas.height){
            this.velocity.y += accl;
        }
        
        
    }

}

class Platform {
    constructor(x, y , image) {
        this.position = {x, y}
        
        this.image = image
        this.width = image.width
        this.height = image.height

    }

    draw() {
        context.drawImage(this.image, this.position.x , this.position.y)
    }

}

class FaltuObjects {
    constructor(x, y , image) {
        this.position = {x, y}
        
        this.image = image
        this.width = image.width
        this.height = image.height

    }

    draw() {
        context.drawImage(this.image, this.position.x , this.position.y)
    }

}

player = new Player()
platforms = [new Platform(pltfrming.width * 5 -292 , 270, plttall), new Platform(-1, 470, pltfrming), new Platform(pltfrming.width  - 2, 470, pltfrming), new Platform(pltfrming.width * 2  + 280, 470, pltfrming), new Platform(pltfrming.width * 3  + 180, 470, pltfrming), new Platform(pltfrming.width * 4  , 470, pltfrming), new Platform(pltfrming.width * 6 - 90, 470, pltfrming), new Platform(pltfrming.width * 7 + 40  + 200, 470, pltfrming), new Platform(pltfrming.width * 8  + 200, 470, pltfrming)]

faltuObjects = [ new FaltuObjects(-1, -1, bgground ), new FaltuObjects(0, 0, hillimg)]

distance = 0;

}

function animate() {
    requestAnimationFrame(animate)
    context.fillStyle = 'white'
    context.fillRect(0, 0, canvas.width, canvas.height) 
    
    faltuObjects.forEach((FaltuObjects) => {
        FaltuObjects.draw()
    })
    
    platforms.forEach((platform) => {
        platform.draw()
    })
    player.update()
    
        //player move code
        if(keys.right.pressed && player. position.x < 400){
            player.velocity.x = 10
        }else if((keys.left.pressed && player.position.x > 50) || (keys.left.pressed && distance === 0 && player.position.x >0)){
            player.velocity.x = -10
        }
        else{player.velocity.x = 0

        if(keys.right.pressed) {
            distance += 10
            platforms.forEach((platform) => {
                platform.position.x -= 10
            })
            faltuObjects.forEach((FaltuObjects) => {
                FaltuObjects.position.x -= 10 * 0.66
            })
        } 
        else if(keys.left.pressed && distance > 0) {
            distance -= 10
            platforms.forEach((platform) => {
                platform.position.x += 10
            })
            faltuObjects.forEach((FaltuObjects) => {
                FaltuObjects.position.x += 10 * 0.66
            })
        }
        }
    
    platforms.forEach((platform) => {
        //platform code
        if(player.position.y + player.height <= platform.position.y && player.position.y + player.height + player.velocity.y >= platform.position.y && player.position.x + player.width >= platform.position.x && player.position.x <= platform.position.x + platform.width) {
            player.velocity.y = 0
        }
        //else if (player.position.y >= platform.position.y + platform.height && player.position.y + player.velocity.y + player.height <= platform.position.y && player.position.x + player.width >= platform.position.x ) {
        //    player.velocity.y = 0
        //}
        
    })

    if(distance > 4000) {
        console.log('You Win')
    }
    if(player.position.y >= canvas.height){
        init()
    }
} 

init()

animate()

addEventListener('keydown', ({keyCode}) => {
    //console.log(keyCode)
    switch(keyCode) {
        case 65:
            //console.log('left')
            keys.left.pressed = true
            player.currentMove = player.move.stand2.left
            break

        
        case 83:
            //console.log('down')
            break
        
        case 68:
            //console.log('right')
            keys.right.pressed = true
            player.currentMove = player.move.stand.right
            break

        case 87:
            //console.log('up')
            player.velocity.y -= 30
            break            

    }

    //console.log(keys.right.pressed)
})

    addEventListener('keyup', ({keyCode}) => {
        //console.log(keyCode)
        switch(keyCode) {
            case 65:
                //console.log('left')
                keys.left.pressed = false
                break
    
            
            case 83:
                //console.log('down')
                break
            
            case 68:
                //console.log('right')
                keys.right.pressed = false
                break
    
            case 87:
                //console.log('up')
                player.velocity.y = 0
                break            
    
        }
        
})