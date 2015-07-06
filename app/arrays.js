exports = (typeof window === 'undefined') ? global : window;

exports.arraysAnswers = {

  indexOf : function(arr, item) {
    return arr.indexOf(item);
  },

  sum : function(arr) {
    return arr.reduce(function(total, num){return total + num});
  },

  remove : function(arr, item) {
    newArray =[];
    arr.forEach(function(element){
      if(element !== item){
        newArray.push(element);
      }
    });
    return newArray;
  },

  removeWithoutCopy : function(arr, item) {
    // can't figure out with map as splice messes with the index
    newArray =[];
    arr.forEach(function(element){
      if(element !== item){
        newArray.push(element);
      }
    });
    return newArray;
  },

  append : function(arr, item) {
    arr.push(item);
    return arr;
  },

  truncate : function(arr) {
    arr.pop();
    return arr;
  },

  prepend : function(arr, item) {
    arr.unshift(item);
    return arr;
  },

  curtail : function(arr) {
    arr.shift();
    return arr;
  },

  concat : function(arr1, arr2) {
    return arr1.concat(arr2);
  },

  insert : function(arr, item, index) {
    arr.splice(index, 0, item);
    return arr;
  },

  count : function(arr, item) {
    // arr.reduce(function(count, element){
    //   if(element === item){
    //     count++;
    //   }
    //   return count;
    // });
    var count = 0;
    arr.forEach(function(element){
      if(element === item){
        count++;
      }
    });
    return count;


  },

  duplicates : function(arr) {
    var matching = false;
    var dups = [];

    for(var i = 0; i <= arr.length; i++){
      for(var j = (i + 1); j <= arr.length; j++){
        if(arr[i] == arr[j] && arr[i] != null){
          matching = true;
          arr[j] = null;
        }
      }
      if(matching){
        dups.push(arr[i]);
        matching = false;
      }
    }

    return dups;

  },

  square : function(arr) {
    var squared = arr.map(function(element){
      return element *= element;
    });

    return squared;
  },

  findAllOccurrences : function(arr, target) {
    indexes = [];
    arr.map(function(element, index){
      if (element == target){
        indexes.push(index);
      }
    });
    return indexes;
  }
};
