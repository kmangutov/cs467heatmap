

var updateLabel = function(hour) {
  var displayTime = hour % 12 + 1;
  var tag = hour > 11? "pm" : "am";

  $('#display-time').text(displayTime + " " + tag);
  reloadWithHour(hour);
}

var slider = $('#slider');
slider.on("input change", function(){
    var val = $(this).val(); 
    updateLabel(val);
});

