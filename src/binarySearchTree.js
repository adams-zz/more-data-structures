var makeBinarySearchTree = function(){
  var newNode = function(val) {
    return {
      value: val,
      left: null,
      right: null
    };
  };

  var rootNode = newNode(null);
  rootNode.left = newNode();
  rootNode.right = newNode();

  var binarySearchTree = {
    addChild: function(value, currentNode) {
      if (typeof(currentNode) !== 'undefined') {
        currentNode = currentNode;
      } else {
        currentNode = rootNode;
      }

      if (currentNode.value === null) {
        currentNode.value = value;
        currentNode.right = newNode(null);
        currentNode.left = newNode(null);
        return true;
      } else if (currentNode.value === value) {
        return false;
      } else {
        var cur;
        if (value < currentNode.value) {
          cur = currentNode.left;
        } else {
          cur = currentNode.right;
        }
        this.addChild(value, cur);
      }

      // var newChild = newNode(key);
      // var current = rootNode;
      // if (current !== null) {
      //   if (newChild.value = key) {
      //     return true;
      //   } else if (newChild.value > key) {
      //     addChild(current.right);
      //   } else{
      //     addChild(current.left);
      //   }
      // } else {
      //   current = newChild;
      // }

    },
    contains: function(value, currentNode) {
      if (typeof(currentNode) !== 'undefined') {
        currentNode = currentNode;
      } else {
        currentNode = rootNode;
      }

      if (currentNode.value !== null) {
        if (value < currentNode) {
          this.contains(value, currentNode.left);
          return currentNode.value;
        } else if (value > currentNode) {
          this.contains(value, currentNode.right);
          return currentNode.value;
        } else {
          return true;
        }
      }
    }
  };
  return binarySearchTree;
}

binarySearchTree = makeBinarySearchTree();
binarySearchTree.addChild(5);
binarySearchTree.addChild(3);
binarySearchTree.addChild(7);