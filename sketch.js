var number=0;
var contatore_spinner = 0;

var myImage;

var date, hours, minutes, seconds;
var position;

var doc;

var button_sound;
var button_sound2;
var negative_popup_sound;


function preload(){
  myData = loadJSON("assets/foto.json");
  position = getCurrentPosition();

  button_sound = loadSound('sound/little_robot_sound_factory_multimedia_Click_Electronic_01.mp3');
  button_sound2 = loadSound('sound/little_robot_sound_factory_multimedia_Click_Electronic_01.mp3');
  negative_popup_sound = loadSound('sound/zapsplat_multimedia_game_harsh_negative_tone_007_24889.mp3');

}

function setup() {

  var page1 = select('#page1');
  page1.mousePressed(goToPage2);

  var arrow_down2 = select('#arrow_down2');
  arrow_down2.mousePressed(goToPage3);

  var arrow_down3 = select('#arrow_down3');
  arrow_down3.mousePressed(goToPage4);
    var arrow_top3 = select('#arrow_top3');
    arrow_top3.mousePressed(returnToPage2);

  var arrow_down4 = select('#arrow_down4');
  arrow_down4.mousePressed(goToPage5);
    var arrow_top4 = select('#arrow_top4');
    arrow_top4.mousePressed(returnToPage3);

  var button5 = select('#button5');
  button5.mousePressed(goToPage6);

  var button7 = select('#button7');
  button7.mousePressed(goToPage8);

  var page9 = select('#page9');
  page9.mousePressed(goToPage1);

}

function draw() {

//fermare spinner

contatore_spinner ++;
var page6 = select('#page6');
var page8 = select('#page8');


if(page6.hasClass('centered') && contatore_spinner==200){
  goToPage7();
  contatore_spinner=0;
}

if(page8.hasClass('centered') && contatore_spinner==200){
  goToPage9();
  contatore_spinner=0;
}


  // page6.removeClass('eliminated');
  // page6.addClass('centered');

}

function goToPage1() {

  //AGGIUNGERE CLASS ELIMINATED ALLA PAGINA PRIMA!

  //eliminare page1
  var page9 = select('#page9');
  page9.removeClass('centered');
  page9.addClass('eliminated');

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
  page2.addClass('centered_opacity');

  //compare background
  var background = select('#black_background');
  background.removeClass('eliminated');
  background.addClass('centered_opacity');

    //compare arrow_down2
    var arrow_down2 = select('#arrow_down2');
    arrow_down2.removeClass('eliminated_arrow');
    arrow_down2.addClass('centered_arrow');

    var quadratino_1 = select('#quadratino_1');
    quadratino_1.addClass('white');

    var quadratino_4 = select('#quadratino_4');
    quadratino_4.removeClass('white');

//sound
    if (button_sound.isPlaying() == false) {
          button_sound.play();
          button_sound2.pause();
        }

}

function returnToPage2() {
  //compare page2
  var page2 = select('#page2');
  page2.removeClass('eliminated_slideup');
  page2.addClass('centered_slidedown');

  //eliminare page3
  var page3 = select('#page3');
  page3.removeClass('centered_slideup');
  page3.removeClass('centered_slidedown');
  page3.addClass('eliminated_slidedown');

  //eliminare arrow_down3
  var arrow_down3 = select('#arrow_down3');
  arrow_down3.removeClass('centered_arrow');
  arrow_down3.addClass('eliminated_arrow');

  //compare arrow_down2
  var arrow_down2 = select('#arrow_down2');
  arrow_down2.removeClass('eliminated_arrow');
  arrow_down2.addClass('centered_arrow');

  //eliminare arrow_top3
  var arrow_top3 = select('#arrow_top3');
  arrow_top3.removeClass('centered_arrow');
  arrow_top3.addClass('eliminated_arrow');

  //quadratino 2 si decolora
  var quadratino_2 = select('#quadratino_2');
  quadratino_2.removeClass('white');

  //quadratino 3 si decolora
  var quadratino_3 = select('#quadratino_3');
  quadratino_3.removeClass('white');

  //quadratino 1 si colora
  var quadratino_1 = select('#quadratino_1');
  quadratino_1.addClass('white');


}

function goToPage3() {
  //eliminare page1
  var page2 = select('#page2');
  page2.removeClass('centered_opacity');
  page2.removeClass('centered_slidedown');
  page2.addClass('eliminated_slideup');

  //compare page2
  var page3 = select('#page3');
  page3.removeClass('eliminated');
  page3.removeClass('eliminated_slidedown');
  page3.addClass('centered_slideup');

  //eliminare arrow_down2
  var arrow_down2 = select('#arrow_down2');
  arrow_down2.removeClass('centered_arrow');
  arrow_down2.addClass('eliminated_arrow');

  //compare arrow_down3
  var arrow_down3 = select('#arrow_down3');
  arrow_down3.removeClass('eliminated_arrow');
  arrow_down3.addClass('centered_arrow');

  //compare arrow_top3
  var arrow_top3 = select('#arrow_top3');
  arrow_top3.removeClass('eliminated_arrow');
  arrow_top3.addClass('centered_arrow');

  //quadratino 1 si decolora
  var quadratino_1 = select('#quadratino_1');
  quadratino_1.removeClass('white');

  //quadratino 2 si colora
  var quadratino_2 = select('#quadratino_2');
  quadratino_2.addClass('white');


}

function returnToPage3() {
  //compare page3
  var page3 = select('#page3');
  page3.removeClass('eliminated_slideup');
  page3.addClass('centered_slidedown');

  //eliminare page4
  var page4 = select('#page4');
  page4.removeClass('centered_slideup');
  page4.addClass('eliminated_slidedown');

  //eliminare arrow_down4
  var arrow_down4 = select('#arrow_down4');
  arrow_down4.removeClass('centered_arrow');
  arrow_down4.addClass('eliminated_arrow');

  //compare arrow_down3
  var arrow_down3 = select('#arrow_down3');
  arrow_down3.removeClass('eliminated_arrow');
  arrow_down3.addClass('centered_arrow');

  //eliminare arrow_top4
  var arrow_top4 = select('#arrow_top4');
  arrow_top4.removeClass('centered_arrow');
  arrow_top4.addClass('eliminated_arrow');

  //compare arrow_top3
  var arrow_top3 = select('#arrow_top3');
  arrow_top3.removeClass('eliminated_arrow');
  arrow_top3.addClass('centered_arrow');

  //quadratino 4 si decolora
  var quadratino_3 = select('#quadratino_3');
  quadratino_3.removeClass('white');

  //quadratino 2 si colora
  var quadratino_2 = select('#quadratino_2');
  quadratino_2.addClass('white');


}

function goToPage4() {

  //AGGIUNGERE CLASS ELIMINATED ALLA PAGINA PRIMA!
  var page2 = select('#page2');
  page2.removeClass('eliminated_slidedown');
  page2.removeClass('eliminated_slideup');
  page2.addClass('eliminated');

  //spostare page3
  var page3 = select('#page3');
  page3.removeClass('centered_slidedown');
  page3.removeClass('centered_slideup');
  page3.addClass('eliminated_slideup');

  //compare page4
  var page4 = select('#page4');
  page4.removeClass('eliminated');
  page4.removeClass('eliminated_slidedown');
  page4.addClass('centered_slideup');

  //eliminare arrow_down3
  var arrow_down3 = select('#arrow_down3');
  arrow_down3.removeClass('centered_arrow');
  arrow_down3.addClass('eliminated_arrow');

  //compare arrow_down4
  var arrow_down4 = select('#arrow_down4');
  arrow_down4.removeClass('eliminated_arrow');
  arrow_down4.addClass('centered_arrow');

  //eliminare arrow_top3
  var arrow_top3 = select('#arrow_top3');
  arrow_top3.removeClass('centered_arrow');
  arrow_top3.addClass('eliminated_arrow');

  //compare arrow_top4
  var arrow_top4 = select('#arrow_top4');
  arrow_top4.removeClass('eliminated_arrow');
  arrow_top4.addClass('centered_arrow');

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

  //sparisce arrow_down4
  var arrow_down4 = select('#arrow_down4');
  arrow_down4.addClass('eliminated_arrow');
  arrow_down4.removeClass('centered_arrow');

  //eliminare arrow_top4
  var arrow_top4 = select('#arrow_top4');
  arrow_top4.removeClass('centered_arrow');
  arrow_top4.addClass('eliminated_arrow');

  //compare arrow_top5
  var arrow_top5 = select('#arrow_top5');
  arrow_top5.removeClass('eliminated_arrow');
  arrow_top5.addClass('centered_arrow');


  //quadratino 3 si decolora
  var quadratino_3 = select('#quadratino_3');
  quadratino_3.removeClass('white');

  //quadratino 4 si colora
  var quadratino_4 = select('#quadratino_4');
  quadratino_4.addClass('white');

}

function goToPage6() {

  //AGGIUNGERE CLASS ELIMINATED ALLA PAGINA PRIMA!
  var page4 = select('#page4');
  page4.removeClass('eliminated_slideup');
  page4.addClass('eliminated');

  //eliminare page5
  var page5 = select('#page5');
  page5.removeClass('centered_slideup');
  page5.addClass('eliminated');

  //compare page6
  var page6 = select('#page6');
  page6.removeClass('eliminated');
  page6.addClass('centered');

  //eliminare arrow_top5
  var arrow_top5 = select('#arrow_top5');
  arrow_top5.removeClass('centered_arrow');
  arrow_top5.addClass('eliminated_arrow');

  //eliminare background
  var background = select('#black_background');
  background.removeClass('centered_opacity');
  background.addClass('eliminated');

  //sound
      if (button_sound2.isPlaying() == false) {
            button_sound2.play();
          //mettere in pausa suono precedente
            button_sound.pause();
          }

  contatore_spinner=0;

//creo foto
  number += 1;
  var photo = myData.people[number].photo;
  var new_photo = createImg(photo);
  new_photo.parent('#page7');
  new_photo.addClass('fototessera');


}

function goToPage7(){
  //eliminare page5
  var page6 = select('#page6');
  page6.removeClass('centered');
  page6.addClass('eliminated');

  //compare page7
  var page7 = select('#page7');
  page7.removeClass('eliminated');
  page7.addClass('centered');

//sound
  if (negative_popup_sound.isPlaying() == false) {
        negative_popup_sound.play();
      //mettere in pausa suono precedente
        button_sound2.pause();
      }

  //si aggiungono nomi

  var name = myData.people[number].name;
  var born = myData.people[number].born;
  var dead = myData.people[number].dead;
  var age = myData.people[number].age;
  var job = myData.people[number].job;
  var religion = myData.people[number].religion;
  var bio = myData.people[number].bio;
  var sex = myData.people[number].sex;


  console.log(number)

  var new_name = select('#name').html(name);
  var new_born = select('#born').html(born);
  var new_dead = select('#dead').html(dead);
  var new_age = select('#age').html(age);
  var new_job = select('#job').html(job);
  var new_religion = select('#religion').html(religion);
  var new_bio = select('#bio').html(bio);

  var date = new Date;
    hours = date.getHours();
    minutes = '0' + date.getMinutes();
    seconds = '0' + date.getSeconds();
    var formattedTime = hours + ":" + minutes.substr(-2);

  var testo_certificato2 = select('#testo_certificato2').html('certifica che l’operatore di deposito  ha correttamente depositato ' + name+
 ', ' + job + ' di religione ' + religion + ' nat' +sex+ ' nel ' + born + ' e mort'+sex+' nel ' + dead +'.');

 var testo_certificato3 = select('#testo_certificato3').html('La registrazione è avvenuta alle ore ' + formattedTime + ' del 12.03.2020 presso l’ufficio di Deposito Cinerario Italiano di Milano.');

}

function goToPage8(){
  window.print();
  //eliminare page7
  var page7 = select('#page7');
  page7.removeClass('centered');
  page7.addClass('eliminated');

  //compare page8
  var page8 = select('#page8');
  page8.removeClass('eliminated');
  page8.addClass('centered');

console.log(number)
  var name = myData.people[number].name;
  var elaborazione = select('#elaborazione').html('Elaborazione di ' + name +' in corso');


  var elaborazione_barra_piena = select('#elaborazione_barra_piena');
  elaborazione_barra_piena.addClass('elaborazione_barra_piena');

  contatore_spinner=0;
}

function goToPage9(){
  // window.print();
  //eliminare page8
  var page8 = select('#page8');
  page8.removeClass('centered');
  page8.addClass('eliminated');

  //eliminare page8
  var elaborazione_barra_piena= select('#elaborazione_barra_piena');
  elaborazione_barra_piena.removeClass('elaborazione_barra_piena');

  //compare page9
  var page9 = select('#page9');
  page9.removeClass('eliminated');
  page9.addClass('centered');

  //si crea pdf

  var name = myData.people[number].name;

  var date = new Date;
    hours = date.getHours();
    minutes = '0' + date.getMinutes();
    seconds = '0' + date.getSeconds();
    var formattedTime = hours + ":" + minutes.substr(-2) + ':' + seconds.substr(-2);

    console.log('time: ' + formattedTime);

}
