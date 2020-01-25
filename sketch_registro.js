
var myData;
var counter = 0;

function preload(){
    myData = loadJSON("assets/foto.json");
    positive_popup_sound = loadSound('sound/zapsplat_multimedia_alert_prompt_keys_warm_bright_positive_001_42398.mp3');
  // put preload code here
}

function setup() {

  window.addEventListener('storage', pageClosed);
  localStorage.setItem("tabletRefresh", 0);
  localStorage.setItem("printRefresh", 0);

  function pageClosed(ev) {
    if (localStorage.getItem('registroRefresh') == 1) {
        window.location.reload(true);
    }
}
  var new_number = localStorage.getItem("storageNumber");

  for(var i = 0; i < new_number; i++) {
    console.log("i ="+i);

  var j = new_number - i;
  var name = myData.people[j].name;
  var born = myData.people[j].born;
  var dead = myData.people[j].dead;
  var job = myData.people[j].job;
  var religion = myData.people[j].religion;
  var bio = myData.people[j].bio;

  var name2 = myData.people[new_number].name;
  var born2 = myData.people[new_number].born;
  var dead2 = myData.people[new_number].dead;
  var job2 = myData.people[new_number].job;
  var religion2 = myData.people[new_number].religion;
  var bio2 = myData.people[new_number].bio;

  var popup_name = select('#pupup_name').html(name2);
  var popup_born = select('#pupup_born').html(born2 + ' - ' + dead2);
  // var new_age = select('#age').html(age);
  var popup_job = select('#pupup_job').html(job2);
  var popup_religion = select('#pupup_religion').html(religion2);
  var popup_bio = select('#pupup_bio').html(bio2);

  // var old_time = new_time + i;
  //var old_hour = new_hour;
  //preventDefault(new_time);

  var new_div_name = createDiv(name);
 new_div_name.parent('#person');
 new_div_name.addClass('bold');
 new_div_name.addClass('new_div_left');

 var new_div_profession = createDiv('Religione: ' + religion);
new_div_profession.parent('#person');
new_div_profession.addClass('new_div_left');

var new_div_religion = createDiv('Impiego: ' + job);
new_div_religion.parent('#person');
new_div_religion.addClass('new_div_left');

var new_div_born = createDiv(born + " - " + dead);
new_div_born.parent('#person');
new_div_born.addClass('new_div_right');
new_div_born.addClass('bold');

var new_div_bio = createDiv(bio);
new_div_bio.parent('#person');
new_div_bio.addClass('new_div_right');

//   var new_name = createDiv(name);
// new_name.parent('#person');
// new_name.parent('#left');
// new_name.class('bold');
//
// var new_date = createDiv(born + " - " + dead);
// new_date.parent('#person');
// new_date.parent('#right');
// new_date.class('bold');
//
// var new_job = createDiv('Professione: ' + job);
// new_job.parent('#person');
// new_job.parent('#left');
// new_job.class('regular');
//
// var new_religion = createDiv('Religione: ' + religion);
// new_religion.parent('#person');
// new_religion.parent('#left');
// new_religion.class('regular');
// new_religion.addClass('padding-bottom');
//
// var new_bio = createDiv(bio);
// new_bio.parent('#person');
// new_bio.parent('#right');
// new_bio.class('regular');
// new_bio.addClass('padding-bottom');
  }

  var button_popup = select('#button_popup');
  button_popup.mousePressed(buttonEliminated);

}

function draw() {
  counter ++;
  var black_background = select('#black_background');

  if(black_background.hasClass('eliminated_opacity') && counter>=0 && counter<5){
    localStorage.setItem("tabletRefresh", 1);
    localStorage.setItem("printRefresh", 1);
  }
  else{
    localStorage.setItem("tabletRefresh", 0);
    localStorage.setItem("printRefresh", 0);
  }
console.log(counter);
}

function buttonEliminated(){
  //eliminare page10
  var black_background = select('#black_background');
  black_background.addClass('eliminated_opacity');

  var popup = select('#popup');
  popup.addClass('eliminated');

  //invio item tablet
  counter=0;


}
