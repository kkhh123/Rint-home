//logoの表示
$(window).on('load',function(){
  $("#splash").delay(2000).fadeOut('slow');
  //ローディング画面を2.0秒（1500ms）待機してからフェードアウト
  $("#splash_logo").delay(2000).fadeOut('slow');
  //ロゴを1.2秒（1200ms）待機してからフェードアウト
});


setTimeout(function(){
  window.location.href = 'https://fuka09231.wixsite.com/my-site';
}, 2.5*1000);