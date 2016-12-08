// JavaScript source code
var obj=document.getElementById('life');//获取canvas元素
var ctx=obj.getContext("2d");
var chessboard=[];
var count;
//画棋盘
for(var i=0;i<25;i++){
    chessboard[i]=[];
    for(var j=0;j<25;j++){
        ctx.beginPath();
        ctx.arc((i*20)+10,(j*20)+10,10,0,2*Math.PI);
        ctx.strokeStyle="#ccc";
        ctx.stroke();
        chessboard[i][j]=0;
        console.log(chessboard[i][j])
    }
}
console.log(chessboard[1][1]);
//画图案 生命
function live(i,j){
    ctx.beginPath();
    ctx.arc((i*20)+10,(j*20)+10,10,0,2*Math.PI);
    ctx.fillStyle="green";
    ctx.fill();
    chessboard[i][j]=1;
};
//初始图案
live(12,9);
live(11,11);
live(12,12);
live(11,10);
live(13,11);
live(13,10);
live(12,10);
console.log(chessboard[13][10]);
//消失
function die(i,j){
    ctx.beginPath();
    ctx.arc((i*20)+10,(j*20)+10,10,0,2*Math.PI);
    ctx.fillStyle="#fff";
    ctx.strokeStyle="#ccc";
    ctx.fill();
    ctx.stroke();
    chessboard[i][j]=0;
};
// die(12,9);
// console.log(chessboard[12][9])
// $('#life').click(function(e){
// 	var x=e.offsetX;
// 	var y=e.offsetY;
// 	console.log(x);
// 	console.log(y);
// 	ctx.beginPath();
// 	ctx.arc(x,y,6,0,2*Math.PI);
// 	ctx.fillStyle="green";
// 	ctx.fill();
// })
//画细胞
function change(i,j){
    count=calculate(i,j);
    console.log(count);
    if(count<2){
        die(i-1,j-1);
    }
    if(count>3){
        live(i-1,j-1);
    }
}
<!--不算该细胞，周围八个格子细胞存活数 -->
function calculate(x,y){
    count=0;
    for(var i=x-1;i<=x+1;i++){
        for(var j=y-1;j<=y+1;j++){
            if(i<0||i>=25||j<0||j>=25){
                continue;
            }
            if(chessboard[i][j]){
                count++;
            }
        }
    }
    return count;
}
for(var i=1;i<25;i++){
    for(var j=1;j<25;j++){
        change(i,j);
    }
}











