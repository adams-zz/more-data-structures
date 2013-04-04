var makeTree = function(input){

  var tree = {
    value: input,
    children: [],
    addChild: function (item){
      var newTree = makeTree(item);
      this.children.push(newTree);
    },
    contains: function (item){
      var result = false;
      if (tree.value === item){
        result = true;
      } else {
        for (var i = 0; i < tree.children.length; i++) {
          result = result || tree.children[i].contains(item);
        }
      }
      return result;
    }
  };
  return tree;
};
