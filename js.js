function positionMessage() {
  if(!document.getElementById) return false;
  if(!document.getElementById('message')) return false;
  var elem = document.getElementById('message');
  var father = document.getElementById('father')
  elem.style.position = "absolute";
  elem.style.left = "0px";
  elem.style.top = "0px";
  father.style.position = "absolute";
  father.style.left = "30px";
  father.style.top = "30px";
  moveElement('father','message',30);
}


function moveElement(fatherID, elementID, interval) {
  if(!document.getElementById) return false;
  if(!document.getElementById(elementID)) return false;
  var elem = document.getElementById(elementID);
  var father = document.getElementById(fatherID);
  var xpos = parseInt(elem.style.left);
  var ypos = parseInt(elem.style.top);
  //设置移动速度
  var xspeed = 5, yspeed = 5

  xpos += (xspeed * xdirection)
  ypos += (yspeed * ydirection)

  if(xpos > parseInt(father.style.width) - parseInt(elem.style.width)){
    xdirection *= -1;
  }

  if(xpos < 0){
    xdirection *= -1;
  }

  if(ypos > parseInt(father.style.height) - parseInt(elem.style.height)){
    ydirection *= -1;
  }

  if(ypos < 0){
    ydirection *= -1;
  }

  elem.style.left = xpos + "px";
  elem.style.top = ypos + "px";
  var repeat = "moveElement('"+fatherID+"','"+elementID+"',"+interval+")";

  movement = setTimeout(repeat,interval);
}

addLoadEvent(positionMessage);
var xdirection = 1, ydirection = 1
