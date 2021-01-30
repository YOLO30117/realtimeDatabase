var ball;
var mydb,loc,pos;

function setup(){
    createCanvas(500,500);
    ball = createSprite(250,250,10,10);
    ball.shapeColor = "red";
    mydb = firebase.database();
    loc = mydb.ref("Ball/position")
    loc.on("value",readOp,shower);
}

function draw(){
    background("white");
    if(keyDown(LEFT_ARROW)){
        changePosition(-1,0);
    }
    else if(keyDown(RIGHT_ARROW)){
        changePosition(1,0);
    }
    else if(keyDown(UP_ARROW)){
        changePosition(0,-1);
    }
    else if(keyDown(DOWN_ARROW)){
        changePosition(0,+1);
    }
    drawSprites();
}

function changePosition(x,y){
    mydb.ref("Ball/position").set({
        x : ball.x + x,
        y : ball.y + y
    })
    //ball.x = ball.x + x;
    //ball.y = ball.y + y;
}
function readOp(data){
    //val is a predefined function to retrieve some data from database
    pos = data.val()
    ball.x = pos.x
    ball.y = pos.y
}
function shower(){
    console.log("ERROR OMG")
}
