myStorage = window.document

var today = moment();
console.log(today);
$("#currentDay").text(today.format("dddd, MMMM Do"));

var currentHr = moment().hour();
console.log (currentHr);

var plannerHr = document.querySelectorAll("div.row");
console.log(plannerHr.length);



function findTime() {
for (let i = 0; i < plannerHr.length; i++) {
        var time = $(plannerHr[i]).attr('id').replace('hour', '');
        var stringHr = parseInt(time);

        if (stringHr < currentHr) {
          plannerHr[i].classList.add("past");
            console.log(plannerHr[i]);
        }
        else if (stringHr > currentHr) {
            plannerHr[i].classList.add("future");
            console.log(plannerHr[i]);

       }
       else if (stringHr = currentHr) {
        plannerHr[i].classList.add("present");
        console.log(plannerHr[i]);

       }

    };
};

findTime();



//compareHr();


//timeblocks

//coded for past, present, future
// if timeblock > moment, if timeblock < moment(add disabled class), if timeblock = moment
// maybe find away to isolate hour

//submit click event for timeblock to local storage and add active clas