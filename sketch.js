

function preload(){
  // put preload code here
}

function setup() {
  createCanvas(windowWidth,windowHeight);

  var page1 = select('#page1');
  page1.mousePressed(goToPage2);

  var page2 = select('#page2');
  page2.mousePressed(goToPage3);

  var page3 = select('#page3');
  page3.mousePressed(goToPage4);

  var page4 = select('#page4');
  page4.mousePressed(goToPage5);

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

    //compare arrow1
    var arrow1 = select('#arrow1');
    arrow1.removeClass('eliminated_arrow');
    arrow1.addClass('centered_arrow');


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

function goToPage4() {

  //AGGIUNGERE CLASS ELIMINATED ALLA PAGINA PRIMA!
  var page2 = select('#page2');
  page2.addClass('eliminated');

  //spostare page3
  var page3 = select('#page3');
  page3.removeClass('centered_slideup');
  page3.addClass('eliminated_slideup');

  //compare page4
  var page4 = select('#page4');
  page4.removeClass('eliminated');
  page4.addClass('centered_slideup');

  //quadratino 2 si decolora
  var quadratino_2 = select('#quadratino_2');
  quadratino_2.removeClass('white');

  //quadratino 3 si colora
  var quadratino_3 = select('#quadratino_3');
  quadratino_3.addClass('white');

}


function goToPage5() {

  //AGGIUNGERE CLASS ELIMINATED ALLA PAGINA PRIMA!
  var page3 = select('#page3');
  page3.addClass('eliminated');

  //spostare page4
  var page4 = select('#page4');
  page4.removeClass('centered_slideup');
  page4.addClass('eliminated_slideup');

  //compare page5
  var page5 = select('#page5');
  page5.removeClass('eliminated');
  page5.addClass('centered_slideup');

  //quadratino 3 si decolora
  var quadratino_3 = select('#quadratino_3');
  quadratino_3.removeClass('white');

  //quadratino 4 si colora
  var quadratino_4 = select('#quadratino_4');
  quadratino_4.addClass('white');

  //sparisce arrow1
  var arrow1 = select('#arrow1');
  arrow1.addClass('eliminated_arrow');
  arrow1.removeClass('centered_arrow');


}
