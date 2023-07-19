
$(function(){
  var currentDate = dayjs().format('MMMM D, YYYY');
  $("#currentDay").text(currentDate);
})

$(function(){
  var times= ["9AM", "10AM", "11AM", "12PM", "1PM", "2PM", "3PM", "4PM", "5PM"];

  times.forEach(function(time, index){
  var timeBlockRow = $(".hidden-template").clone();
  timeBlockRow.removeClass("hidden-template")
  timeBlockRow.addClass("time-block")
  timeBlockRow.attr('id', 'hour-'+ (index + 9));
 
  var savedValue = localStorage.getItem('hour-' + (index + 9));
  timeBlockRow.find('.hour').text(time);
  timeBlockRow.find('textarea').val(savedValue ? savedValue : '');

  var currentHour = dayjs().hour();
  var timeBlockHour = index + 9;

  if (timeBlockHour < currentHour) {
  timeBlockRow.addClass('past');
  } else if (timeBlockHour === currentHour) {
  timeBlockRow.addClass('present');
  } else {
  timeBlockRow.addClass('future');
  }

  $(".btn") .on('click', function(){
    var timeBlockId = $(this).parent().attr('id');
    var userInput = $(this).siblings('textarea').val();
    localStorage.setItem( timeBlockId, userInput);
  });

  $(".container-lg").append(timeBlockRow);
 })});
