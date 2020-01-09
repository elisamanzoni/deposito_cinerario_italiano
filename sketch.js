

function preload(){
  // put preload code here
}

function setup() {
  createCanvas(windowWidth,windowHeight);

  var page1 = select('#page1');
  page1.mousePressed(goToPage2);

  var page2 = select('#page2');
  page2.mousePressed(goToPage3);
    var arrow2 = select('#arrow2');
    arrow2.mousePressed(goToPage3);

  var page3 = select('#page3');
  page3.mousePressed(goToPage4);
    var arrow3 = select('#arrow3');
    arrow3.mousePressed(goToPage4);

  var page4 = select('#page4');
  page4.mousePressed(goToPage5);
    var arrow4 = select('#arrow4');
    arrow4.mousePressed(goToPage5);

  var button5 = select('#button5');
  button5.mousePressed(goToPage1);

}

function draw() {

}

function goToPage1() {

  //AGGIUNGERE CLASS ELIMINATED ALLA PAGINA PRIMA!
  var page4 = select('#page4');
  page4.removeClass('centered');
  page4.addClass('eliminated_slideup');

  //eliminare page1
  var page5 = select('#page5');
  page5.removeClass('centered_slideup');
  page5.addClass('eliminated');

  //compare page2
  var page1 = select('#page1');
  page1.removeClass('eliminated');
  page1.addClass('centered');


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

    //compare arrow2
    var arrow2 = select('#arrow2');
    arrow2.removeClass('eliminated_arrow');
    arrow2.addClass('centered_arrow');

    var quadratino_1 = select('#quadratino_1');
    quadratino_1.addClass('white');

    var quadratino_4 = select('#quadratino_4');
    quadratino_4.removeClass('white');


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

  //eliminare arrow2
  var arrow2 = select('#arrow2');
  arrow2.removeClass('centered_arrow');
  arrow2.addClass('eliminated_arrow');

  //compare arrow3
  var arrow3 = select('#arrow3');
  arrow3.removeClass('eliminated_arrow');
  arrow3.addClass('centered_arrow');

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
  page2.removeClass('eliminated_slideup');
  page2.addClass('eliminated');

  //spostare page3
  var page3 = select('#page3');
  page3.removeClass('centered_slideup');
  page3.addClass('eliminated_slideup');

  //compare page4
  var page4 = select('#page4');
  page4.removeClass('eliminated');
  page4.addClass('centered_slideup');

  //eliminare arrow3
  var arrow3 = select('#arrow3');
  arrow3.removeClass('centered_arrow');
  arrow3.addClass('eliminated_arrow');

  //compare arrow4
  var arrow4 = select('#arrow4');
  arrow4.removeClass('eliminated_arrow');
  arrow4.addClass('centered_arrow');

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
  page3.removeClass('eliminated_slideup');
  page3.addClass('eliminated');

  //spostare page4
  var page4 = select('#page4');
  page4.removeClass('centered_slideup');
  page4.addClass('eliminated_slideup');

  //compare page5
  var page5 = select('#page5');
  page5.removeClass('eliminated');
  page5.addClass('centered_slideup');

  //sparisce arrow1
  var arrow4 = select('#arrow4');
  arrow4.addClass('eliminated_arrow');
  arrow4.removeClass('centered_arrow');


  //quadratino 3 si decolora
  var quadratino_3 = select('#quadratino_3');
  quadratino_3.removeClass('white');

  //quadratino 4 si colora
  var quadratino_4 = select('#quadratino_4');
  quadratino_4.addClass('white');



}
