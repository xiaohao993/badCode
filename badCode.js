(function (badCode) {
  if (typeof module === 'object' && typeof module.exports === 'object') {
    module.exports = badCode;  //# node CommonJS
  } else if (typeof define === 'function' && define.amd) {
    define(['badCode'], badCode);  //# AMD
  } else {
    window.badCode = new badCode();  //# 直接引用
  }
})(function () {
	var bc = {};
	bc.add = function(x, y){
		return x + y;
	}
	return bc;
});


