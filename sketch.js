var number=499;
var contatore_spinner = 0;

var myImage;

var date, hours, minutes, seconds;
var position;

var doc;

var button_sound;
var button_sound2;
var negative_popup_sound;
var positive_popup_sound;
var positive_popup_sound2;



function preload(){
  myData = loadJSON("assets/foto.json");
  position = getCurrentPosition();

  button_sound = loadSound('sound/little_robot_sound_factory_multimedia_Click_Electronic_01.mp3');
  button_sound2 = loadSound('sound/little_robot_sound_factory_multimedia_Click_Electronic_01.mp3');
  negative_popup_sound = loadSound('sound/zapsplat_multimedia_game_harsh_negative_tone_007_24889.mp3');
  positive_popup_sound = loadSound('sound/zapsplat_multimedia_alert_prompt_keys_warm_bright_positive_001_42398.mp3');
  positive_popup_sound2 = loadSound('sound/zapsplat_multimedia_alert_prompt_keys_warm_bright_positive_001_42398.mp3');

}

function setup() {
  localStorage.setItem("registroRefresh", 0);
  localStorage.setItem("printRefresh", 0);

  var page1 = select('#page1');
  page1.mousePressed(goToPage2);

  var arrow_down2 = select('#arrow_down2');
  arrow_down2.mousePressed(goToPage3);

  var arrow_down3 = select('#arrow_down3');
  arrow_down3.mousePressed(goToPage4);
    var arrow_top3 = select('#arrow_top3');
    arrow_top3.mousePressed(returnToPage2);

  var button4 = select('#button4');
  button4.mousePressed(goToPage5);
    var arrow_top4 = select('#arrow_top4');
    arrow_top4.mousePressed(returnToPage3);

  var button_attention_box = select('#button_attention_box');
  button_attention_box.mousePressed(goToPage6);
  //
  var button7 = select('#button7');
  button7.mousePressed(goToPage8);
  //
  // var page9 = select('#page9');
  // page9.mousePressed(goToPage1);

}

function draw() {

//fermare spinner

contatore_spinner ++;
var page5 = select('#page5');
var page6 = select('#page6');
var page8 = select('#page8');
var page9 = select('#page9');
var page10 = select('#page10');
var page1 = select('#page1');

if(page5.hasClass('centered_opacity') && contatore_spinner==100){
  attention_popup();
}

//200
if(page6.hasClass('centered') && contatore_spinner==200){
  goToPage7();



  contatore_spinner=0;

}

//270
if(page8.hasClass('centered') && contatore_spinner==270){
    var elaborazione = select('#elaborazione').html(' ');
  }

//320
if(page8.hasClass('centered') && contatore_spinner==320){
  var elaborazione_completata = select('#elaborazione_completata');
  elaborazione_completata.removeClass('opacity_0');
    var name = myData.people[number].name;
    var sex = myData.people[number].sex;
    var elaborazione = select('#elaborazione').html(name + ' è pront' + sex +' per la deposizione.');
}

//560
if(page8.hasClass('centered') && contatore_spinner==500){
goToPage9();
var elaborazione_completata = select('#elaborazione_completata');
elaborazione_completata.addClass('opacity_0');
  contatore_spinner=0;
}

//300
if(page9.hasClass('centered') && contatore_spinner==200){
goToPage10();
  contatore_spinner=0;
}

//300
if(page10.hasClass('centered') && contatore_spinner==160){
complete_popup();
}

if (page1.hasClass('eliminated') && localStorage.getItem('tabletRefresh') == 1) {
    goToPage1();
}

// if(page10.hasClass('centered') && contatore_spinner==300){
//
// goToPage1();
// }


}

function goToPage1() {

  //refresh
  localStorage.setItem("registroRefresh", 0);

  //AGGIUNGERE CLASS ELIMINATED ALLA PAGINA PRIMA!

  //eliminare page10
  var page10 = select('#page10');
  page10.removeClass('centered');
  page10.addClass('eliminated');

  //eliminare popup
  var complete_box = select ('#complete_box');
  complete_box.addClass('opacity_0');
  complete_box.removeClass('comparsa_dopo');

  //compare page2
  var page1 = select('#page1');
  page1.removeClass('eliminated');
  page1.addClass('centered');

  var logo_background = select('#logo_background');
  logo_background.addClass('logo');
  logo_background.removeClass('eliminated');

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

    var quadratino_2 = select('#quadratino_2');
    quadratino_2.removeClass('white');

    var quadratino_3 = select('#quadratino_3');
    quadratino_3.removeClass('white');

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

    var logo_background = select('#logo_background');
    logo_background.addClass('eliminated');
    logo_background.removeClass('logo');


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
  page4.addClass('eliminated_opacity');

  //compare page5
  var page5 = select('#page5');
  page5.removeClass('eliminated');
  page5.addClass('centered_opacity');

  //compare scheda vuota
  var nuovi_nomi_empty = select('#nuovi_nomi_empty');
  nuovi_nomi_empty.removeClass('eliminated');
  nuovi_nomi_empty.addClass('centered_opacity_leggero');
  nuovi_nomi_empty.addClass('nuovi_nomi_div');

  //eliminare arrow_top4
  var arrow_top4 = select('#arrow_top4');
  arrow_top4.removeClass('centered_arrow');
  arrow_top4.addClass('eliminated_arrow');

  //quadratino 3 si decolora
  var quadratino_3 = select('#quadratino_3');
  quadratino_3.removeClass('white');

  //eliminare background
  var background = select('#black_background');
  background.removeClass('centered_opacity');
  background.addClass('eliminated_opacity');




    //sound
        if (button_sound2.isPlaying() == false) {
              button_sound2.play();
            //mettere in pausa suono precedente
              button_sound.pause();
            }

contatore_spinner = 0;

}

function attention_popup(){
  var attention_box = select ('#attention_box');
  attention_box.addClass('comparsa_dopo');
  attention_box.removeClass('opacity_0');

  if (negative_popup_sound.isPlaying() == false) {
        negative_popup_sound.play();
      //mettere in pausa suono precedente
        button_sound2.pause();
      }
}

function goToPage6() {

  //AGGIUNGERE CLASS ELIMINATED ALLA PAGINA PRIMA!
  var page4 = select('#page4');
  page4.removeClass('eliminated_opacity');
  page4.addClass('eliminated');

  //eliminare page5
  var page5 = select('#page5');
  page5.removeClass('centered_opacity');
  page5.addClass('eliminated');

  //eliminare attention_box
  var attention_box = select ('#attention_box');
  attention_box.addClass('opacity_0');
  attention_box.removeClass('comparsa_dopo');

  //compare page6
  var page6 = select('#page6');
  page6.removeClass('eliminated');
  page6.addClass('centered');

  contatore_spinner=0;

//creo foto
  number += 1;
  var photo = myData.people[number].photo;
  var new_photo = createImg('fototessere/'+photo);
  new_photo.parent('#nuovi_nomi');
  new_photo.addClass('fototessera');

  contatore_spinner=0;


}

function goToPage7(){
  //eliminare page5
  var page6 = select('#page6');
  page6.removeClass('centered');
  page6.addClass('eliminated');

  //eliminare scheda vuota
  var nuovi_nomi_empty = select('#nuovi_nomi_empty');
  nuovi_nomi_empty.removeClass('centered_opacity_leggero');
  nuovi_nomi_empty.removeClass('nuovi_nomi_div');
  nuovi_nomi_empty.addClass('eliminated');

  //compare page7
  var page7 = select('#page7');
  page7.removeClass('eliminated');
  page7.addClass('centered');

//sound
  if (positive_popup_sound.isPlaying() == false) {
        positive_popup_sound.play();
      //mettere in pausa suono precedente
        negative_popup_sound.pause();
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
  var new_born = select('#born').html(born + ' - ' + dead);
  // var new_age = select('#age').html(age);
  var new_job = select('#job').html(job);
  var new_religion = select('#religion').html(religion);
  var new_bio = select('#bio').html(bio);

  var date = new Date;
    hours = date.getHours();
    minutes = '0' + date.getMinutes();
    seconds = '0' + date.getSeconds();
    var formattedTime = hours + ":" + minutes.substr(-2);

 // var nome_certificato = select('#nome_certificato').html(name);
 // var born_certificato = select('#born_certificato').html(born);
 // var dead_certificato = select('#dead_certificato').html(dead);
 // var job_certificato = select('#job_certificato').html(job);
 // var religion_certificato = select('#religion_certificato').html(religion);
 // var testo_certificato4 = select('#testo_certificato4').html('La registrazione è avvenuta alle ore ' + formattedTime + ' del 12.03.2020 presso l’ufficio di Deposito Cinerario Italiano di Milano.');

 //refresh
 localStorage.setItem("storageNumber", number);
 localStorage.setItem("storageTime", formattedTime);
  // window.print();


}

function goToPage8(){
  // window.print();
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

  if (button_sound.isPlaying() == false) {
        button_sound.play();
      //mettere in pausa suono precedente
        positive_popup_sound.pause();
      }

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

  //togliere eliminated_opacity da black_background
  var black_background = select('#black_background');
  black_background.removeClass('eliminated_opacity');
  black_background.addClass('eliminated');

  //sound
    if (positive_popup_sound.isPlaying() == false) {
          positive_popup_sound.play();
        //mettere in pausa suono precedente
          button_sound.pause();
        }

  //si crea pdf

  var name = myData.people[number].name;

  var date = new Date;
    hours = date.getHours();
    minutes = '0' + date.getMinutes();
    seconds = '0' + date.getSeconds();
    var formattedTime = hours + ":" + minutes.substr(-2) + ':' + seconds.substr(-2);

    console.log('time: ' + formattedTime);
    contatore_spinner=0;

}

function goToPage10(){
  // window.print();
  //eliminare page9
  var page9 = select('#page9');
  page9.removeClass('centered');
  page9.addClass('eliminated');

  //compare page10
  var page10 = select('#page10');
  page10.removeClass('eliminated');
  page10.addClass('centered');

    var name = myData.people[number].name;
    var sex = myData.people[number].sex;
    var text_complete_box = select('#text_complete_box').html(name +' è stat'+ sex + ' correttamente depositat'+ sex +'.' + ' Controllare il registro.');


}

function complete_popup(){
  var complete_box = select ('#complete_box');
  complete_box.addClass('comparsa_dopo');
  complete_box.removeClass('opacity_0');

  if (positive_popup_sound2.isPlaying() == false) {
        positive_popup_sound2.play();
      //mettere in pausa suono precedente
        positive_popup_sound.pause();
      }


        //refresh
        localStorage.setItem("registroRefresh", 1);

}
