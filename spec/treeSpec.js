describe("tree", function() {
  var tree;

  beforeEach(function() {
    tree = makeTree("head");
  });

  it("should have an array of children", function() {
    expect(tree.children).toEqual(jasmine.any(Array));
  });

  it("should have a method named 'addChild'", function() {
    expect(tree.addChild).toEqual(jasmine.any(Function));
  });

  it("should have a method named 'contains'", function() {
    expect(tree.contains).toEqual(jasmine.any(Function));
  });

  it("tree should have value of head", function() {
    expect(tree.value).toEqual("head");
  });

  describe("addChild", function() {
    it("should add to children", function() {
      tree.addChild("item");
      expect(tree.contains("item")).toBeTruthy();
    });

    it("should add a child 2 levels from the the head", function(){
      tree.addChild("child01");
      tree.addChild("child02");
      tree.children[0].addChild("child11");
      tree.children[0].addChild("child12");
      tree.children[1].addChild("child21");
      tree.children[1].addChild("child22");
      tree.children[1].children[0].addChild("child221");

      expect(tree.contains("child221")).toBeTruthy();
    });
  });
  // Add more tests here to test the functionality of tree.
  // If you're feeling frisky, have your tree nodes track their
  // parent and add a function called removeFromParent.
});