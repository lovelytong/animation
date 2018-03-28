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
  moveElement('father','message',20);
}

addLoadEvent(positionMessage);
