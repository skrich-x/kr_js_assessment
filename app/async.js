exports = (typeof window === 'undefined') ? global : window;

exports.asyncAnswers = {
  async : function(value) {
    return new Promise(function(resolve, reject) {
    resolve(value);
    });

  },

  manipulateRemoteData : function(url) {
    var result = [];
    return $.getJSON(url).then(function(data){
      data.people.forEach(function(names){
        result.push(names);
      });
      return _.pluck(result, 'name').sort();
    });
  }
};
