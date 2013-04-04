describe("hashTable", function() {
  var hashTable;

  beforeEach(function() {
    hashTable = makeHashTable(100);
  });

  it("should have a method named 'insert'", function() {
    expect(hashTable.insert).toEqual(jasmine.any(Function));
  });

  it("should have a method named 'retrieve'", function() {
    expect(hashTable.retrieve).toEqual(jasmine.any(Function));
  });

  it("should insert value into storage at hash Index", function(){
    hashTable.insert("test1","tv1");
    hashTable.insert("test2","tv2");
    hashTable.insert("test3","tv3");
    expect(hashTable.retrieve("test2")).toEqual(["test2", "tv2"]);
  });

  it("should work with various values of max", function(){
    newhashTable = makeHashTable(523);
    newhashTable.insert("test1","tv1");
    newhashTable.insert("test2","tv2");
    newhashTable.insert("test3","tv3");
    expect(newhashTable.retrieve("test3")).toEqual(["test3","tv3"])
  });
  // add more tests here to test the functionality of hashTable
});