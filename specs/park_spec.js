var assert = require ("assert");
var Park = require ("../park");
var Dinosaur = require ("../dinosaur");

describe ("Park", function() {
  var park;
  var velociraptor1;
  var velociraptor2;
  var tRex;
  var erketu;

  beforeEach(function() {
    park = new Park;
    velociraptor1 = new Dinosaur("velociraptor", 5);
    velociraptor2 = new Dinosaur("velociraptor", 5);
    tRex = new Dinosaur("t-rex", 1);
    erketu = new Dinosaur("erketu", 7);
  });

  it("starts with an empty enclosure", function() {
    assert.strictEqual(park.enclosure.length, 0);
  });

  it("can add a dinosaur to the enclosure", function() {
    assert.strictEqual(park.enclosure.length, 0);
    park.add(velociraptor1);
    assert.strictEqual(park.enclosure.length, 1);
    assert.strictEqual(park.enclosure[0].type, "velociraptor");
  });

  it("can remove dinosaurs based on type", function() {
    park.add(velociraptor1);
    park.add(tRex);
    park.add(velociraptor2);
    assert.strictEqual(park.enclosure.length, 3);
    park.removeType("velociraptor");
    assert.strictEqual(park.enclosure.length, 1);
  });

  it("can get all dinosaurs with more than 2 offspring", function() {
    park.add(velociraptor1);
    park.add(tRex);
    park.add(erketu);
    park.add(velociraptor2);
    assert.strictEqual(park.enclosure.length, 4);
    assert.strictEqual(park.primeBreeders().length, 3);
  });

  it("can workout number of dinosaurs in first year starting with one", function() {
    park.add(velociraptor1);
    assert.strictEqual(park.yearTotal(1), 6);
  });

  it("can workout number of dinosaurs in second year starting with one", function() {
    park.add(velociraptor1);
    assert.strictEqual(park.yearTotal(2), 12);
  });

  it("can workout number of dinosaurs in first year starting with two", function() {
    park.add(velociraptor1);
    park.add(tRex);
    assert.strictEqual(park.yearTotal(1), 8);
  });

});
