
var doc;

function preload(){
  // put preload code here
}

function setup() {
//ho usato la libreria Print.js (https://printjs.crabbly.com/)
printJS('id_print', 'html');

//Stampa l'html ma senza lo style del css
}

function draw() {
}

function createPDF(){
  var doc = new jsPDF();
doc.text(10, 10, 'This is a test');
doc.save('a4.pdf');
doc.autoPrint({variant: 'non-conform'});
window.print();


console.log(counter);
// doc.save('autoprint.pdf');
    // printJS(doc);
}

function print(){
  // printJS(doc);
  // console.log('print')
}
