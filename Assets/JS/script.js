// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
$(function () {

  // Get current time
  displayTime();
  // Set time to tick each second
  setInterval(displayTime, 1000);
  // run time tracker to set background indicators
  timeTracker();
  // Loads saved tasks from memory
  loadTask()


  function displayTime() {
    var currentTime = $("#currentDay");
    var current = dayjs().format('MMM DD, YYYY [at] hh:mm:ss a');
    currentTime.text(current);
  }

  // save button event listener
  $(".saveBtn").on("click", function () {
    // Get nearby values of the description in JQuery
    var text = $(this).siblings(".description").val();
    // get time slot id
    var time = $(this).parent().attr("id");

    // Save text in local storage
    localStorage.setItem(time, text);
  })


  function timeTracker() {
    //get current number of hours.
    var timeNow = dayjs().hour();

    // loop over time blocks
    $(".time-block").each(function () {
      var blockTime = parseInt($(this).attr("id").split("-")[1]);

      // To check the time and add the classes for background indicators
      if (blockTime < timeNow) {
        $(this).removeClass("future");
        $(this).removeClass("present");
        $(this).addClass("past");
      }
      else if (blockTime === timeNow) {
        $(this).removeClass("past");
        $(this).removeClass("future");
        $(this).addClass("present");
      }
      else {
        $(this).removeClass("present");
        $(this).removeClass("past");
        $(this).addClass("future");

      }
    })
  }

  function loadTask() {
    // Sets value of descriptions
    $(".1").val(localStorage.getItem("hour-6"));
    $(".2").val(localStorage.getItem("hour-7"));
    $(".3").val(localStorage.getItem("hour-8"));
    $(".4").val(localStorage.getItem("hour-9"));
    $(".5").val(localStorage.getItem("hour-10"));
    $(".6").val(localStorage.getItem("hour-11"));
    $(".7").val(localStorage.getItem("hour-12"));
    $(".8").val(localStorage.getItem("hour-13"));
    $(".9").val(localStorage.getItem("hour-14"));
    $(".10").val(localStorage.getItem("hour-15"));
    $(".11").val(localStorage.getItem("hour-16"));
    $(".12").val(localStorage.getItem("hour-17"));
    $(".13").val(localStorage.getItem("hour-18"));
  }

});
