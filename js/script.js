var weight = document.getElementById('weight');
var unit = document.getElementById('unit');
var weightValue;
var unitValue;
var coefficient = 0.45359237;
var weightPounds;
var weightKilograms;
var volumeExpert;
var volumeAdvanced;
var volumeIntermediate;
var volumeBeginner;

function update() {

  weightValue = parseFloat(weight.value);
  unitValue = unit.value;

  console.log(weightValue, unitValue);

  if (unitValue == 'lb') {
    weightPounds = weightValue;
    weightKilograms = weightPounds * coefficient;
  }

  if (unitValue == 'kg') {
    weightKilograms = weightValue;
    weightPounds = weightKilograms / coefficient;
  }

  volumeExpert = weightPounds / 6;

  weightPounds = weightPounds.toFixed(2);
  weightKilograms = weightKilograms.toFixed(2);
  volumeExpert = volumeExpert.toFixed(2);

  document.getElementById('weight-pounds').textContent = weightPounds;
  document.getElementById('weight-kilograms').textContent = weightKilograms;
  document.getElementById('volume-expert').textContent = volumeExpert;
}

weight.addEventListener('change', (event) => {
  update();
});

unit.addEventListener('change', (event) => {
  update();
});
