(function (NumberTimeAgo) {

  if (typeof module === 'object' && typeof module.exports === 'object') {
    module.exports = NumberTimeAgo;  //# node CommonJS
  } else if (typeof define === 'function' && define.amd) {
    define(['number_time_ago'], NumberTimeAgo);  //# AMD
  } else {
    NumberTimeAgo();  //# 直接引用
  }

})(function () {

});