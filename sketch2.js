function setup(){

  window.addEventListener('storage', pageClosed);

function pageClosed(ev) {
  if (localStorage.getItem('storageRefresh') == 1) {
      window.location.reload(true);
  }
}
//
// window.print();
}

function draw(){


}
