var canvas = document.getElementById('mycan');
var ctx = canvas.getContext('2d');

var score = 0; //점수영역

var x = canvas.width / 2;
var y = canvas.height - 30;
var dx  = 2;
var dy = -2;

var brickRowCount = 3;  //블록 행
var brickColumnCount = 5; //블록 열
var brickWidth = 75; // 블록 폭 사이즈
var brickHeight = 20; // 블록 높이 사이즈
var brickPadding = 10; //  블록 패딩값 사이즈
var brickOffsetTop = 30; // 블록 top차감 값
var brickOffsetLeft = 30; // 블록 왼쪽 차감값

var ballRedius = 10; //반지름 값 공

var paddleHeight = 10; //패들 높이
var paddleWidth = 75; // 패들 넓이
var paddleX = (canvas.width - paddleWidth) / 2; //패들위치 값

var rightPressed = false; //오른쪽 패들이동
var leftPressed = false; // 왼쪽 패들이동

document.addEventListener('keydown', keyDownHandler, false);
document.addEventListener('keyup', keyUpHandler, false);

var bricks = [];
for(i=0; i<brickColumnCount; ++i) {
    bricks[i] = [];
    for(q =0; q<brickRowCount; ++q) {
        bricks[i][q] ={
            x:0,
            y:0,
            status:1
        };
    }
}
//▲ 사각형 함수

function drawBall() {
    ctx.beginPath();
    ctx.arc(x, y, ballRedius, 0, Math.PI*2);
    ctx.fillStyle = 'pink';
    ctx.fill();
    ctx.closePath();
}

function drawPaddle() {
    ctx.beginPath();
    ctx.rect(paddleX, canvas.height - paddleHeight, paddleWidth, paddleHeight);
    ctx.fillStyle = 'pink';
    ctx.fill();
    ctx.closePath();
}

function drawBricks() {
    for(i=0; i<brickColumnCount; ++i) {
        for(q =0; q<brickRowCount; ++q) {
            if(bricks[i][q].status == 1) {
                var brickX = (i*(brickWidth + brickPadding)) + brickOffsetLeft;
                var brickY = (q*(brickHeight + brickPadding)) + brickOffsetTop;
                bricks[i][q].x = brickX;
                bricks[i][q].y = brickY;
                ctx.beginPath();
                ctx.rect(brickX, brickY, brickWidth, brickHeight);
                ctx.fillStyle = 'pink';
                ctx.fill();
                ctx.closePath();
            }
        }
    }
}

function draw(){
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawBricks();
    drawBall();
    drawPaddle();
    drawScore();
    collisionDetection();

    if(x + dx > canvas.width - ballRedius || x + dx < ballRedius) {
        dx = -dx;
        changeBallColor('pink');
    }
    if(y + dy < ballRedius) {
        dy = -dy;
        changeBallColor('pink');
    }else if (y + dy > canvas.height - ballRedius) {
        if(x>paddleX && x<paddleX+paddleWidth) {
            dy = -dy;
    }else{
        alert('Game Over');
        document.location.reload();
    }
}

if(rightPressed && paddleX < canvas.width - paddleWidth) {
    paddleX += 7;

}else if(leftPressed && paddleX > 0) {
    paddleX -= 7;
}

x += dx;
y += dy;
}

function changeBallColor(code){
    ctx.fillStyle = code;
    ctx.fill();
}
function keyDownHandler(e) {
    if(e.keyCode == 39) {
        rightPressed = true;
    }else if(e.keyCode == 37) {
        leftPressed = true;
    }
}
function keyUpHandler(e) {
    if(e.keyCode == 39) {
        rightPressed = false;
    }else if(e.keyCode == 37) {
        leftPressed = false;
}
}

function collisionDetection() {
    for(i=0; i<brickColumnCount; ++i) {
        for(q =0; q<brickRowCount; ++q) {
            var b = bricks[i][q];

            if(b.status == 1) {
                if(x > b.x && x < b.x + brickWidth && y > b.y && y > b.y + brickHeight) {
                    dy = -dy;
                    b.status = 0;
                    score ++;

                    if(score == brickRowCount * brickColumnCount) {
                        alert('You Win');
                        document.location.reload();
                        break;
                    }

                }
            }
        }
    }
}

setInterval(draw, 10);



