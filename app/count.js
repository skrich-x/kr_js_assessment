exports = (typeof window === 'undefined') ? global : window;

exports.countAnswers =  {
  count : function (start, end) {
    var timeout;
    function task () {
      console.log(start++);

      if (start <= end) {
        timeout = setTimeout(task, 100);
      }
    }

    task();

    return {
      cancel : function () {
        timeout && clearTimeout(timeout);
      }
    };
  }
};
