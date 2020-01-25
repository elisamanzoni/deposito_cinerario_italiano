
function preload(){
  myData = loadJSON("assets/foto.json");
}

function setup(){

  window.addEventListener('storage', pageClosed);

function pageClosed(ev) {
  if (localStorage.getItem('printRefresh') == 1) {
      window.location.reload(true);
  }
}
//


var new_number = localStorage.getItem("storageNumber");
var new_time = localStorage.getItem("storageTime");
console.log(new_number)

var name2 = myData.people[new_number].name;
var born2 = myData.people[new_number].born;
var dead2 = myData.people[new_number].dead;
var job2 = myData.people[new_number].job;
var religion2 = myData.people[new_number].religion;
var bio2 = myData.people[new_number].bio;

var nome_certificato = select('#nome_certificato').html(name2);
var born_certificato = select('#born_certificato').html(born2);
var dead_certificato = select('#dead_certificato').html(dead2);
var job_certificato = select('#job_certificato').html(job2);
var religion_certificato = select('#religion_certificato').html(religion2);
var testo_certificato4 = select('#testo_certificato4').html('La registrazione è avvenuta alle ore ' + new_time + ' del 12.03.2020 presso l’ufficio di Deposito Cinerario Italiano di Milano.');

window.print();
}

function draw(){


}
