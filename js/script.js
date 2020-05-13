$(function(){
  $("h1").fadeIn(2000,function(){
    $(this).css("color","#000000");
  });
});

$(function(){
  $("p").fadeIn(2000,function(){
    $(this).css("color","#000000");
  });
});



$(function(){
  // ナビゲーションをクリック
  $("a[href*=#]:not([href=#])").click(function(){
    // 移動先のコンテンツの位置を取得
    var target = $($(this).attr("href")).offset().top;

    // 70px減らす
    target -= 70;

    // コンテンツへスクロール
    $("html, body").animate({scrollTop : target}, 500);

    return false;
  });
});



// トグルメニュー

$(function(){
  // アイコンをクリック
  $("#menubtn").click(function(){
    //ul要素を開閉 
  $("#menu").slideToggle(200);
  　});
  });
  

  //トップへ戻る
  
$(function(){
  var pagetop = $('#page_top');
  // ボタン非表示
  pagetop.hide();

  // 100px スクロールしたらボタン表示
  $(window).scroll(function () {
     if ($(this).scrollTop() > 100) {
          pagetop.fadeIn();
     } else {
          pagetop.fadeOut();
     }
  });
  pagetop.click(function () {
     $('body, html').animate({ scrollTop: 0 }, 500);
     return false;
  });
});