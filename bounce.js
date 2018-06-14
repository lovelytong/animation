
function positionMessage() {
  if(!document.getElementById) return false;
  if(!document.getElementById('message')) return false;
  var elem = document.getElementById('message');
  var elem2 = document.getElementById('message2');
  var elem3 = document.getElementById('message3');
  var father = document.getElementById('father');
  elem.style.position = "absolute";
  elem.style.left = "0px";
  elem.style.top = "0px";
  elem2.style.position = "absolute";
  elem2.style.left = "50px";
  elem2.style.top = "0px";
  elem3.style.position = "absolute";
  elem3.style.left = "150px";
  elem3.style.top = "0px";
  father.style.position = "relative";
  father.style.margin = "auto";
  father.style.top = "60px";

  moveElement('father','message', 30, 1, 1);
  moveElement('father','message2',50, -1, 1);
  moveElement('father','message3',20, 1, 1);
}


function moveElement(fatherID, elementID, interval, xdirection, ydirection) {
  if(!document.getElementById) return false;
  if(!document.getElementById(elementID)) return false;
  var elem = document.getElementById(elementID);
  var father = document.getElementById(fatherID);
  var xpos = parseInt(elem.style.left);
  var ypos = parseInt(elem.style.top);
  //设置移动速度
  var xspeed = 5, yspeed = 9

  xpos += (xspeed * xdirection)
  ypos += (yspeed * ydirection)

  if(xpos > parseInt(father.style.width) - parseInt(elem.style.width) - 1){
    xdirection *= -1;
  }

  if(xpos < 1){
    xdirection *= -1;
  }

  if(ypos > parseInt(father.style.height) - parseInt(elem.style.height) - 1){
    ydirection *= -1;
  }

  if(ypos < 1){
    ydirection *= -1;
  }

  elem.style.left = xpos + "px";
  elem.style.top = ypos + "px";
  var repeat = "moveElement('"+fatherID+"','"+elementID+"',"+interval+","+xdirection+","+ydirection+")";

  movement = setTimeout(repeat,interval);
}

addLoadEvent(positionMessage);

