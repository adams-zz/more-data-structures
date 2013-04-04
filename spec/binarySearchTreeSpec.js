describe("binarySearchTree", function() {
  var binarySearchTree;

  beforeEach(function() {
    binarySearchTree = makeBinarySearchTree();
  });

  describe("addChild", function() {
    it("should have a method", function() {
      expect(binarySearchTree.addChild).toEqual(jasmine.any(Function));
    });

    it("should return true if value is added", function() {
      expect(binarySearchTree.addChild(4)).toBe(true);
    });

    it("should return false if value to be added already exists", function(){
      binarySearchTree.addChild(5);
      binarySearchTree.addChild(3);
      expect(binarySearchTree.addChild(5)).toBe(false);
    });

    it("should add a child to existing leaves", function() {
      binarySearchTree.addChild(5);
      binarySearchTree.addChild(3);
      binarySearchTree.addChild(7);
      expect(binarySearchTree.contains(3)).toBe(true);
    });

  });

  describe("contains", function() {
    it("should have a method", function() {
      expect(binarySearchTree.contains).toEqual(jasmine.any(Function));
    });

    // it("returns the closest number given a value", function() {
    //   binarySearchTree.addChild(5);
    //   binarySearchTree.addChild(3);
    //   binarySearchTree.addChild(9);
    //   binarySearchTree.addChild(15);
    //   expect(binarySearchTree.contains(10)).toEqual(9);
    // });
  });
  // add more tests here to test the functionality of binarySearchTree
});