exports = (typeof window === 'undefined') ? global : window;

exports.regexAnswers = {
  //regex to locate number in string
  containsNumber : function(str) {
    return(/\d/).test(str);
  },

  containsRepeatingLetter : function(str) {

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
