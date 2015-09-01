exports = (typeof window === 'undefined') ? global : window;

/**
 * This file defines an object with some methods. Some of these methods are
 * populated incorrectly; your job is to fix them. Other methods are not
 * populated at all; your job is to fill them out.
 */

exports.bestPracticesAnswers = {
  globals : function() {
    var myObject = {
      name : 'Jory'
    };

    return myObject;
  },

//turn the function declarations into assignment expressions.
  functions : function(flag) {
    if (flag) {
      getValue = function() { return 'a'; }
    } else {
      getValue = function()  { return 'b'; }
    }

    return getValue();
  },

  /*Should be able to parseInt correctly:
  parseInt(string, radix);
  Parameters:

  string
      The value to parse. If string is not a string, then it is converted to one. Leading whitespace in the string is ignored.
  radix
      An integer between 2 and 36 that represents the radix (the base in mathematical numeral systems) of the above mentioned string. Specify 10 for the decimal numeral system commonly used by humans. Always specify this parameter to eliminate reader confusion and to guarantee predictable behavior. Different implementations produce different results when a radix is not specified.*/
  parseInt : function(num) {
    return parseInt(num,10);
  },

  identity : function(val1, val2) {
    return val1 === val2;
  }
};
