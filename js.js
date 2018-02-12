function positionMessage() {
  if(!document.getElementById) return false;
  if(!document.getElementById('message')) return false;
  var elem = document.getElementById('message');
  elem.style.position = "absolute";
  elem.style.left = "0px";
  elem.style.top = "0px";
  moveElement('message',5);
}

addLoadEvent(positionMessage);
