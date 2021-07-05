myStorage = window.localStorage

var today = moment();
var currentHr = moment().hour();

var plannerHr = document.querySelectorAll("div.row");
var saveButton= document.querySelectorAll("button");

$("#currentDay").text(today.format("dddd, MMMM Do"));


function findTime() {
for (let i = 0; i < plannerHr.length; i++) {
        var time = $(plannerHr[i]).attr('id').replace('hour', '');
        var stringHr = parseInt(time);

        if (stringHr < currentHr) {
          plannerHr[i].classList.add("past");
        }
        else if (stringHr > currentHr) {
            plannerHr[i].classList.add("future");
       }
       else if (stringHr = currentHr) {
        plannerHr[i].classList.add("present");
       }

    };
};

function showDay() {
  for (let i = 0; i < myStorage.length; i++) {
    j= 0;
    for (let j = 0; j < plannerHr.length; j++){
      if (myStorage.key([i]) == plannerHr[j].id) {
        var savedEvent = myStorage.getItem(myStorage.key([i]));
        plannerHr[j].setAttribute("type","text");
        plannerHr[j].children[1].innerHTML = savedEvent;

        console.log(plannerHr[j].children);
      };
    };
  };
}

function clickSave() {
  for (let i = 0; i < saveButton.length; i++ ) {
    saveButton[i].addEventListener("click", function(){
      var newEvent = this.previousElementSibling.value;
      var clickedId = this.parentElement.id;
      myStorage.setItem(clickedId, newEvent);

      for (let i = 0; i < this.children.length; i++){
        this.children[i].className = "bi bi-lock-fill";
      };
    });
  };
}


findTime();
showDay();
clickSave();



//compareHr();


//timeblocks

//coded for past, present, future
// if timeblock > moment, if timeblock < moment(add disabled class), if timeblock = moment
// maybe find away to isolate hour

//submit click event for timeblock to local storage and add active clas