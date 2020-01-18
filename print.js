function setup(){

  var refresh = localStorage.getItem('storageRefresh');

  window.addEventListener('storage', pageClosed);

function pageClosed(ev) {
  if (localStorage.getItem('storageRefresh') == 1) {
      window.location.reload(true);
  }
  console.log(refresh)
}

window.print();
}

function draw(){


}
