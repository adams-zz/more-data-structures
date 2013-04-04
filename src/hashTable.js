// Note: don't use an object to store the inserted elements.
var makeHashTable = function(max){
  var storage = [];
  for (var i = 0; i < max; i++) {
    storage[i] = [];
  }
  var hashTable = {
    //fixme
    insert: function(key, value){
      var hashIndex = getIndexBelowMaxForKey(key, max);
      storage[hashIndex].push([key, value]);
    },
    retrieve: function(key){
      hashIndex = getIndexBelowMaxForKey(key, max);
      for (var i = 0; i < storage[hashIndex].length; i++) {
        if (storage[hashIndex][i][0] === key){
          return storage[hashIndex][i];
        }
      }
    }
  };
  return hashTable;
};


// This is a "hashing function". You don't need to worry about it, just use it to turn any key into a pseudo-random key

var getIndexBelowMaxForKey = function(str, max){
  var hash = 0;
  if (str.length == 0) return hash;
  for (i = 0; i < str.length; i++) {
    hash = (hash<<5) - hash;
    hash = hash + str.charCodeAt(i);
    hash = hash & hash; // Convert to 32bit integer
  }
  return hash % max;
};
