exports = (typeof window === 'undefined') ? global : window;

exports.functionsAnswers = {

  argsAsArray : function(fn, arr) {
    return fn(arr[0], arr[1], arr[2]);
  }
  ,

  speak : function(fn, obj) {
    return fn(greeting = obj.greeting, name = obj.name);
  },

  functionFunction : function(str) {
    return function(str2){
      return str + ", " + str2;
    }
  },

  makeClosures : function(arr, fn) {
    var newArray = [];
    return function(){
    for(var i = 0; i < arr.length; i++){
      newArray.push(fn(arr[i]));
    }
    };

    return newArray;
  },

  partial : function(fn, str1, str2) {

  },

  useArguments : function(a, b, c, d) {
    if(a && b && c && d){
      return a + b + c + d;
    }
    else if ( a && b && c){
      return a + b + c;
    }
    else if (a && b){
      return a + b;
    }
    else{
      return a;
    }


  },

  callIt : function(fn, a, b, c) {
    if(a && b && c){
      fn(a, b, c);
    }
    else{
      fn(a, b);
    }
  },

  partialUsingArguments : function(fn) {

  },

  curryIt : function(fn) {

  }
};
