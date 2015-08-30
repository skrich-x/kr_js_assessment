exports = (typeof window === 'undefined') ? global : window;

exports.arraysAnswers = {

  indexOf : function(arr, item) {
    return arr.indexOf(item);
    //Jquery Method:
    // if ($.inArray("item", arr) != -1){
    //   return;
    // }
  },

  sum : function(arr) {
    //arr.reduce(callback[, initialValue])
    return arr.reduce(function(a,b){
      return a + b ;
    }
  );

  },

  remove : function(arr, item) {
    return arr.filter(function(itemToRemove){
      return itemToRemove !== item;
    });

  },
//////////////////////////////////
/*Must use splice method as .filter would return NEW array- not modify the original
To remove a specific item of array one could use arr.indexOf and splice
for example:
Start with an initial array
        var array = ["a", "b", "c"];
Find and remove item from an array
        var i = array.indexOf("b");
        if(i != -1) {
        array.splice(i, 1);
        }
*////////////////////////////////
  removeWithoutCopy : function(arr, item) {
    var itemsToRemove = [];
    for (var i = 0; i < arr.length; i++) {
      if (arr[i] === item) {
        itemsToRemove.push(i);
      }
    }
    for (var cuts = itemsToRemove.length-1; cuts >= 0; cuts--) {
        arr.splice(itemsToRemove[cuts], 1);
    }
    return arr;
  },

  append : function(arr, item) {

  },

  truncate : function(arr) {

  },

  prepend : function(arr, item) {

  },

  curtail : function(arr) {

  },

  concat : function(arr1, arr2) {

  },

  insert : function(arr, item, index) {

  },

  count : function(arr, item) {

  },

  duplicates : function(arr) {

  },

  square : function(arr) {

  },

  findAllOccurrences : function(arr, target) {

  }
};
