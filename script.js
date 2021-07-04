myStorage = window.localStorage

var today = moment();
console.log(today);
$("#currentDay").text(today.format("dddd, MMMM Do"));

var currentHr = moment().hour();
console.log (currentHr);

var plannerHr = document.querySelectorAll("div.row");
console.log(plannerHr.length);

var saveButton= document.querySelectorAll("button");
console.log(saveButton);

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

function clickSave() {
  for (let i = 0; i < saveButton.length; i++ ) {
    saveButton[i].addEventListener("click", function(){
      var newEvent = this.previousElementSibling.value;
      var clickedId = this.parentElement.id;

      myStorage.setItem(clickedId, newEvent);
      for (let i = 0; i < this.children.length; i++){
        this.children[i].className = "bi bi-lock";
      }

      // myStorage.setItem()
      console.log(this.children[0]);
    });
  };
};


findTime();
clickSave();



//compareHr();


//timeblocks

//coded for past, present, future
// if timeblock > moment, if timeblock < moment(add disabled class), if timeblock = moment
// maybe find away to isolate hour

//submit click event for timeblock to local storage and add active clas