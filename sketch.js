

function preload(){
  // put preload code here
}

function setup() {
  createCanvas(windowWidth,windowHeight);

  var page1 = select('#page1');
  page1.mousePressed(goToPage2);

  var page2 = select('#page2');
  page2.mousePressed(goToPage3);

}

function draw() {

}

function goToPage2() {

  //eliminare page1
  var page1 = select('#page1');
  page1.removeClass('centered');
  page1.addClass('eliminated');

  //compare page2
  var page2 = select('#page2');
  page2.removeClass('eliminated');
  page2.addClass('centered');

  //compare button2
  var button2 = select('#button2');
  button2.removeClass('eliminated');
  button2.addClass('button2');

}


function goToPage3() {

  //spostare page1
  var page2 = select('#page2');
  page2.removeClass('centered');
  page2.addClass('eliminated_slideup');

  //compare page2
  var page3 = select('#page3');
  page3.removeClass('eliminated');
  page3.addClass('centered_slideup');

  //quadratino 1 si decolora
  var quadratino_1 = select('#quadratino_1');
  quadratino_1.removeClass('white');

  //quadratino 2 si colora
  var quadratino_2 = select('#quadratino_2');
  quadratino_2.addClass('white');


}
