// The weight and unit form controls
weight = document.getElementById('weight');
unit = document.getElementById('unit');

// The coefficient for converting lbs to kgs and vice versa
coefficient = 0.45359237;

// Rules define the difference in volume from the expert medium volume
rules = {
  expert: {
    low: -1.666666666666668,
    medium: 0,
    high: 0.333333333333332
  },
  advanced: {
    low: 1,
    medium: 1.5,
    high: 2
  },
  intermediate: {
    low: 3,
    medium: 3.5,
    high: 4
  },
  beginner: {
    low: 5,
    medium: 6,
    high: 7
  }
};

function update() {

  weightValue = parseFloat(weight.value);
  unitValue = unit.value;

  if (unitValue == 'lb') {
    weightPounds = weightValue;
    weightKilograms = weightPounds * coefficient;
  } else {
    weightKilograms = weightValue;
    weightPounds = weightKilograms / coefficient;
  }

  document.getElementById('weight-pounds').textContent = weightPounds.toFixed(2);
  document.getElementById('weight-kilograms').textContent = weightKilograms.toFixed(2);

  volume = weightPounds / 6;

  for (level in rules) {
    for (range in rules[level]) {
      id = `${level}-${range}`;
      levelRangeVolume = volume + rules[level][range];
      document.getElementById(id).textContent = levelRangeVolume.toFixed(2);
    }
  }

}

weight.addEventListener('change', (event) => {
  update();
});

unit.addEventListener('change', (event) => {
  update();
});
