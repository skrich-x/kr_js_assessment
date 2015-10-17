exports = (typeof window === 'undefined') ? global : window;

exports.functionsAnswers = {
  argsAsArray : function(fn, arr) {
    return (fn(arr[0], arr[1], arr[2]));
  },

  speak : function(fn, obj) {
    return fn.call(obj);
  },

  functionFunction : function(str) {
    return function (arg) {
      return str += ', ' + arg;
    };
  },

  makeClosures : function(arr, fn) {
    var data = [];

    var makeFunction = function(val) {
      return function() { return fn(val); };
    };

    for (var i = 0, len = arr.length; i < len; i++) {
      data.push(makeFunction(arr[i]));
    }

    return data;
  },

  partial : function(fn, str1, str2) {
    return function(str3) {
      return fn.call(null, str1, str2, str3);
    };
  },


  useArguments : function() {
    var sum = 0;

    for (var i = 0, len = arguments.length; i < len; i++) {
      sum += arguments[i];
    }

    return sum;
  },


  callIt : function(fn) {
    var x = Array.prototype.slice.call(arguments, 1, arguments.length);
    fn.apply(null, x);
  },

    partialUsingArguments : function(fn) {
    var args = Array.prototype.slice.call(arguments, 1, arguments.length);
    return function() {
      var x = args.concat(Array.prototype.slice.call(arguments));
      return fn.apply(null, x);
    };

  },

  curryIt : function(fn) {

  }
};
