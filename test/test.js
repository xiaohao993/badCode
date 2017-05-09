var expect = require('chai').expect;
//require('../number.timeago.js')();

// describe('NumberTimeAgo', function(){

//   describe('#number-time', function(){
//     it('seconds', function(){
//       expect(60..seconds).to.eq(1000*60);
//     })
//     it('days', function () {
//       expect(2..days).to.eq(48..hours);
//     });
//   });

//   describe('#time-ago', function(){
//     it('ago()', function(){
//       actualDay = 3..days.ago().getDay();
//       expectDay = new Date(new Date() - 3..days).getDay();
//       expect(actualDay).to.eq(expectDay);
//     }) ;

//   });

// });


var badCode = require('../badCode.js')();
describe('加法函数的测试', function() {
  it('1 加 1 应该等于 2', function() {
    expect(badCode.add(1, 1)).to.be.equal(2);
  });

  it('任何数加0等于自身', function() {
    expect(badCode.add(1, 0)).to.be.equal(1);
    expect(badCode.add(0, 0)).to.be.equal(0);
  });
});



