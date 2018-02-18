const data = { 
    Field: { height: 320, width: 480 },
    Ball: { 
        coordinates: { x: 240, y: 305 },
        radius: 5 
    }, 
    moveStepX : -5,
    moveStepY : -5,

    Paddle : {height: 10, width: 100, x: 200 },

    Brick : { 
        col: 5, row: 3,
        width : 75,
        height : 20,
        padding : 10,
        offsetTop : 30,
        offsetLeft : 30,
    },

    Score : 0,
    Lives: 3

};

export default data;