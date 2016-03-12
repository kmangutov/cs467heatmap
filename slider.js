

var updateLabel = function(hour) {
  var displayTime = hour % 12;
  var tag = hour > 11? "pm" : "am";

  if(hour == 0 || hour == 12)
    displayTime = 12;

  $('#display-time').text(displayTime + " " + tag);
  reloadWithHour(hour);
}

var slider = $('#slider');
slider.on("input change", function(){
    var val = $(this).val(); 
    updateLabel(val);
});

