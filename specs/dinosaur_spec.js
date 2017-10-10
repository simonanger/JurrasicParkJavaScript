var assert = require ("assert");
var Dinosaur = require ("../dinosaur");

describe ("Dinosaur", function() {
  var velociraptor;

  beforeEach(function() {
    velociraptor = new Dinosaur("Velociraptor", 5);
  });

  it("has a type", function() {
    assert.strictEqual(velociraptor.type, "Velociraptor");
  });

  it("has how many children per year?", function() {
    assert.strictEqual(velociraptor.offspringPerYr, 5);
  });

});
