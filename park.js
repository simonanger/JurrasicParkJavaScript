var Park = function() {
  this.enclosure = [];
}

Park.prototype.add = function (dinosaur) {
  this.enclosure.push(dinosaur);
};

Park.prototype.removeType = function (dinosaurType) {
  var dinosToKeep = [];
  for (var dino of this.enclosure) {
    if(dino.type !== dinosaurType) {
      dinosToKeep.push(dinosaurType);
    };
  };
this.enclosure = dinosToKeep;
};

Park.prototype.primeBreeders = function () {
  var primeBreeders = [];
  for (var dino of this.enclosure) {
    if (dino.offspringPerYr > 2) {
      primeBreeders.push(dino);
    };
  };
  return primeBreeders;
};

Park.prototype.yearTotal = function (numberOfYears) {
  var total = 0;
  for (var dino of this.enclosure) {
    total += 1;
    total += dino.offspringPerYr;
  };
  return (total * numberOfYears);
};

module.exports = Park;
