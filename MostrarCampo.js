

function agElemento() {
   var aInput=document.querySelector('#mispan').getElementsByTagName('input');
   for(var i=0; i<aInput.length; i++) {
       aInput[i].onclick=new Function('agEliminar(this)');
   }
}

function agEliminar(obj) {
  var parentSpan=document.querySelector('#mispan');
  if(obj.nextSibling.nodeName!='INPUT') { // agregar
      var oInputTexto=document.createElement('input');
      oInputTexto.setAttribute('type', 'text');
      parentSpan.insertBefore(oInputTexto, obj.nextSibling);
  }
  else { // eliminar
      parentSpan.removeChild(obj.nextSibling);
  }
}


function agCargarEvento(func) {
  var oldonload = window.onload;
  if (typeof window.onload != 'function') {
    window.onload = func;
  } else {
    window.onload = function() {
      if (oldonload) {
        oldonload();
      }
      func();
    }
  }
}

agCargarEvento(function() {
  agElemento();
});

