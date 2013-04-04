describe("linkedList", function() {
  var linkedList;

  beforeEach(function() {
    linkedList = makeLinkedList();
  });

  it("should have a method named 'insert'", function() {
    expect(linkedList.insert).toEqual(jasmine.any(Function));
  });

  it("should have a method named 'contains'", function() {
    expect(linkedList.contains).toEqual(jasmine.any(Function));
  });

  it("should insert an item", function() {
      linkedList.insert("item1");
      expect(linkedList.contains("item1")).toBeTruthy();
  });

  it("should return false if linkedList is empty", function(){
    expect(linkedList.contains("test")).toBeFalsy();
  });

  it("should find multiple items", function() {
    linkedList.insert("item1");
    linkedList.insert("item2");
    expect(linkedList.contains("item2")).toBeTruthy();
  });


  // it("should update pointer value of previous node", function () {
  //   linkedList.insert("item1");
  //   console.log(linkedList);
  //   expect(linkedList[0]).toEqual(["head", "item1" ]);
  // })

  // it("", function () {
  //   expect(linkedList).toEqual());
  // });

  // it("", function () {
  //   expect(linkedList).toEqual());
  // });

  // it("", function () {
  //   expect(linkedList).toEqual());
  // });

  // it("", function () {
  //   expect(linkedList).toEqual());
  // });

  // it("", function () {
  //   expect(linkedList).toEqual());
  // });

  // add more tests here to test the functionality of linkedList
});