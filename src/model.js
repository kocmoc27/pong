//import data from './data';

class Model {
  constructor() {}

  changeCoordinates(state) {
    state.Ball.coordinates.x += state.moveStepX;
    state.Ball.coordinates.y += state.moveStepY;
  }

  checkBorderKick(state) {
    if (state.Ball.coordinates.y + state.moveStepY < 0) {
      state.moveStepY = -state.moveStepY;
    } else if (
      state.Ball.coordinates.y + state.moveStepY >
      state.Field.height - state.Ball.radius
    ) {
      if (
        state.Ball.coordinates.x >= state.Paddle.x &&
        state.Ball.coordinates.x <= state.Paddle.x + state.Paddle.width +state.Ball.radius
      ) {
        state.moveStepY *= -1;
      }
      else 
      {
        if(state.Lives == 0){
          alert("Game over!");
          document.location.reload();
        }
          state.Lives--;
          state.moveStepY *= -1;
      }
    }
    if (
      state.Ball.coordinates.x + state.moveStepX > state.Field.width ||
      state.Ball.coordinates.x + state.moveStepX < 0
    ) {
      state.moveStepX = -state.moveStepX;
    }
  }

  renderBricks(bricks, brick) {
    for (let c = 0; c < brick.col; c++) {
      bricks[c] = [];
      for (let r = 0; r < brick.row; r++) {
        bricks[c][r] = { x: 0, y: 0, status: 1 };
        let brickX = c * (brick.width + brick.padding) + brick.offsetLeft;
        let brickY = r * (brick.height + brick.padding) + brick.offsetTop;
        bricks[c][r].x = brickX;
        bricks[c][r].y = brickY;
      }
    }
  }

  collisionDetection(state, bricks) {
    let x = state.Ball.coordinates.x,
        y = state.Ball.coordinates.y,
        brick = state.Brick,
        score = state.Score;
     for (let c = 0; c < brick.col; c++) {
      for (let r = 0; r < brick.row; r++) {
        var b = bricks[c][r];
        if (b.status == 1) {
          if (x > b.x && x < b.x + brick.width &&
              y > b.y && y < b.y + brick.height) {
                state.moveStepY *= -1;
                b.status = 0;
                state.Score++;
                
                if(state.Score == brick.col*brick.row)
                {
                  alert('You win!');
                  document.location.reload();
                }

            }
        }
      }
    }
  }

}

export default Model;