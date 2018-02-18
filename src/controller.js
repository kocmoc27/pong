class Controller{
    constructor(model,view,state){
        this.self = this;
        this.model = model;
        this.view = view;
        this.a = this.draw.bind(this);
        this.state = state;
        this.bricks = [];

        this.model.renderBricks(this.bricks, this.state.Brick);
        view.on('move',this.changePaddleX.bind(this));
        //this.draw();
        setInterval(this.a,30);
    }

    draw(){
        this.view.clearField();
        this.view.viewBricks(this.bricks,this.state.Brick);
        this.view.drawBall(this.state.Ball);
        this.view.drawPaddle(this.state.Paddle);
        this.model.changeCoordinates(this.state);
        this.model.checkBorderKick(this.state);
        this.model.collisionDetection(this.state,this.bricks);
        this.view.drawScore(this.state.Score);
        this.view.drawLives(this.state.Lives);
        //requestAnimationFrame(this.a);
    }

    changePaddleX(){
        if(this.view.rightPressed 
            && this.state.Paddle.x < this.state.Field.width - this.state.Paddle.width)
        {
            this.state.Paddle.x += Math.abs(this.state.moveStepX) * 2;
        }
        else if (this.view.leftPressed && this.state.Paddle.x > 0) 
        {
            this.state.Paddle.x += Math.abs(this.state.moveStepX) * (-2);
        }
    }


}

export default Controller;