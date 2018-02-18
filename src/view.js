import EventEmitter from './ee';

class View extends EventEmitter {

    constructor(){
        super();

        this.canvas = document.getElementById("myCanvas");
        this.ctx = this.canvas.getContext("2d");
        this.rightPressed = false;
        this.leftPressed = false;
        document.addEventListener("keydown", this.keyDownHandler.bind(this), false);
        document.addEventListener("keyup", this.keyUpHandler.bind(this), false);
    }

    drawBall(ball) {
        this.ctx.beginPath();
        this.ctx.arc(ball.coordinates.x, ball.coordinates.y, ball.radius * 2, 0, Math.PI * 2, false);
        this.ctx.fillStyle = 'blue';
        this.ctx.fill();
        this.ctx.closePath();
    }

    clearField(){
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    }

    drawPaddle(paddle){
        this.ctx.beginPath();
        this.ctx.rect(paddle.x, this.canvas.height - paddle.height, 
            paddle.width,paddle.height);
        this.fillStyle = "blue";
        this.ctx.fill();
        this.ctx.closePath();
    }

    viewBricks(bricks,brick){
        for(let c=0; c<brick.col; c++) {
            for(let r=0; r<brick.row; r++) {
                if(bricks[c][r].status == 1) 
                    this.drawBrick(bricks[c][r],brick.width,brick.height);
            }
        }   
    }

    drawBrick(brick,width,height){
        this.ctx.beginPath();
        this.ctx.rect(brick.x, brick.y, width, height);
        this.ctx.fillStyle = "blue";
        this.ctx.fill();
        this.ctx.closePath();
    }

    keyDownHandler(e) {
        if(e.keyCode == 39) {
            this.rightPressed = true;
            this.emit('move')

        }
        else if(e.keyCode == 37) {
            this.leftPressed = true;
            this.emit("move");
        }
    }

    keyUpHandler(e) {
        if(e.keyCode == 39) {
            this.rightPressed = false;
        }
        else if(e.keyCode == 37) {
            this.leftPressed = false;
        }
    }
    
    drawScore(score) {
        this.ctx.font = "16px Arial";
        this.ctx.fillStyle = "#0095DD";
        this.ctx.fillText("Score: "+score, 8, 20);   
    }

    drawLives(lives) {
        this.ctx.font = "16px Arial";
        this.ctx.fillStyle = "#0095DD";
        this.ctx.fillText("Lives: "+lives, this.canvas.width-65, 20);
    }
}

export default View;