var daysLeft = function() {
    var oneDay = 24*60*60*1000;
    var weddingDate = new Date('Sat May 25 2019 18:00:00 GMT-0700 (PDT)');
    var today = new Date();
    return Math.round(Math.abs((today.getTime() - weddingDate.getTime())/(oneDay)));
};

$(function() {
  var holder = document.getElementById('days');
  var textHolder = document.getElementById('daystext');

  if (holder && textHolder) {
    holder.innerText = daysLeft();
    textHolder.innerText = ' days until the wedding';
  }
});
