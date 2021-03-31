$('#weight, #unit').change(function() {

  var weight = parseFloat($('#weight').val());
  var unit = $('#unit').val();

  var coefficient = 0.45359237;
  var weightPounds;
  var weightKilograms;
  var volumeExpert;
  var volumeAdvanced;
  var volumeIntermediate;
  var volumeBeginner;

  if (unit == 'lb') {
    weightPounds = weight;
    weightKilograms = weightPounds * coefficient;
  }

  if (unit == 'kg') {
    weightKilograms = weight;
    weightPounds = weightKilograms / coefficient;
  }

  volumeExpert = weightPounds / 6;

  weightPounds = weightPounds.toFixed(1);
  weightKilograms = weightKilograms.toFixed(1);
  volumeExpert = volumeExpert.toFixed(1);

  $('#weight-pounds').text(weightPounds);
  $('#weight-kilograms').text(weightKilograms);
  $('#volume-expert').text(volumeExpert);

});
