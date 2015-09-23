exports = (typeof window === 'undefined') ? global : window;

exports.regexAnswers = {
  //regex to locate number in string
  containsNumber : function(str) {
    return(/\d/).test(str);
  },

  //regex to test if string contains repeating letter
  containsRepeatingLetter : function(str) {
    return (/([A-Za-z])\1/).test(str);
  },

  endsWithVowel : function(str) {

  },

  captureThreeNumbers : function(str) {

  },

  matchesPattern : function(str) {

  },
  isUSD : function(str) {

  }
};
