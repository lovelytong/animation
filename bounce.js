function positionMessage() {
    //浏览器嗅探
    if (!document.getElementById) return false;
    if (!document.getElementById('ball')) return false;
    if (!document.getElementById('father')) return false;

    var ball = document.getElementById('ball');
    var father = document.getElementById('father');
    ball.style.position = "absolute";
    ball.style.left = "0px";
    ball.style.top = "0px";
    father.style.position = "relative";

    ballMove(father, ball, 10, 1, 1);
}


function ballMove(father, ball, interval, xdirection, ydirection) {


    // 获取小球坐标
    var xpos = parseFloat(ball.style.left);
    var ypos = parseFloat(ball.style.top);

    //设置移动速度，x为横向移动速度，y为纵向移动速度
    // var xspeed = document.getElementById('xspeed').value;
    // var yspeed = document.getElementById('yspeed').value;
    var xspeed = 1;
    var yspeed = 2;

    // 计算小球按照指定的方向移动距离
    xpos += (xspeed * xdirection)
    ypos += (yspeed * ydirection)

    // 如果碰到容器边缘，则改变方向
    if (xpos > parseInt(father.style.width) - parseInt(ball.style.width) + 30) {
        xdirection *= -1;
    }

    if (xpos < -35) {
        xdirection *= -1;
    }

    if (ypos > parseInt(father.style.height) - parseInt(ball.style.height) + 30) {
        ydirection *= -1;
    }

    if (ypos < -35) {
        ydirection *= -1;
    }

    // 重新给小球设置定位
    ball.style.left = xpos + "px";
    ball.style.top = ypos + "px";


    setTimeout(() => ballMove(father, ball, interval, xdirection, ydirection), interval);
}

window.onload = positionMessage;
