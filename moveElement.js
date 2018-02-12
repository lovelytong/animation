function moveElement(elementID,interval) {
  if(!document.getElementById) return false;
  if(!document.getElementById(elementID)) return false;
  var elem = document.getElementById(elementID);
  var xpos = parseInt(elem.style.left);
  var ypos = parseInt(elem.style.top);
  if(xpos < 412){
    xpos++;
  }
  if(ypos < 478){
    ypos++;
  }

  elem.style.left = xpos + "px";
  elem.style.top = ypos + "px";
  var repeat = "moveElement('"+elementID+"',"+interval+")";

  movement = setTimeout(repeat,interval);
}