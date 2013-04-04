// Note: don't use an array to do this.
var makeLinkedList = function(){
  var head = null;


  var linkedList = {
    //fixme
    insert: function(item){
      var node = {
        val: item,
        next: null
      };

      if (head === null){
        head = node;
      }
      else {
        var current = head;
        while (current.next !== null) {
          current = current.next;
        }
        current.next = node;
      }
    },

    contains: function(item){
     var bool = false;
     var current = head;
     while(current !== null ){
        if (current.val == item){
          bool = true;
        }
        current = current.next;
      }
    return bool;
  }
};
  return linkedList;
};