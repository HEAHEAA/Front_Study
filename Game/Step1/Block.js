var canvas = document.getElementById('gameCanvas');

var ctx = canvas.getContext('2d');

setInterval( draw, 10);

var x = canvas.width/2;
var y = canvas.height-30;
var dx = 2;
var dy = -2;

 

function draw( ){

     ctx.clearRect(0,0,canvas.width,canvas.height);
     ctx.beginPath();
     ctx.arc(x,y,25,0,Math.PI*2);
     ctx.fillStyle ='tomato';
     ctx.fill();
     ctx.closePath();

     x += dx;
     y += dy;

}



/////////////ball 구현하깅////////////////////

var canvas = document.getElementById('gameCanvas');

var ctx = canvas.getContext('2d'); 

//setInterval구현

setInterval( draw , 10 )

var x = canvas.width;

var y = canvas.height;

var dx = 2;

var dy = -2; 

 

function drawBall( ){ 



     ctx.beginPath( );

     ctx.arc( x , y , 20, 0, Math.PI * 2 );

     ctx.fillStyle = 'tomato';

     ctx.fill( );

     ctx.closePath( );

}

function draw( ) {

     ctx.clearRect( 1 , 1 , canvas.width , canvas.height );

     drawBall( );

     x += dx;

     y += dy;

}


/////방향전환/////

function draw( ) { 

    ctx.clearRect( 0 , 0 , canvas.width, canvas.height);

  

    if ( y + dy < 0 || y + dy > canvas.height ) {

         dy = -dy;

}else if( x + dx < 0 || x + dx > canvas.width ) {

         dx = -dx;

}

    x += dx;

    y += dy; 

}


// 충돌 코드

var canvas = document.getElementById('gameCanvas');

var ctx = canvas.getContext('2d');

var x = canvas.width/2;

var y = canvas.height-30;

var Radius = 10;

 

function drawBall( ){

     ctx.beginPath( );

     ctx.arc ( x, y, Radius, 0, Math.PI * 2);

     ctx.fillStyle = 'tomato';

     ctx.fill( );

     ctx.closePath( );

}



 function draw( ) { 

        ctx.clearRect ( 0, 0, canvas.width, canvas.height );

        if ( y + dy > canvas.height + ballRadius || y + dy > ballRadius ){

                   dy = -dy;

     }else if ( x + dx > canvas.width - ballRadius || x + dx > ballRadius ){

                  dx = -dx;

     }

    x += dx;

    y += dy;

}