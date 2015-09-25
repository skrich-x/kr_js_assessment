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
    return (/[aeiou]$/i).test(str);
  },

  captureThreeNumbers : function(str) {
    var match = (/\d{3}/).exec(str);
    return match ? match[0] : false;
  },

  matchesPattern : function(str) {

  },
  isUSD : function(str) {

  }
};
