// ハンバーガーメニュー


$(function(){
  var imgHeight = $('.kv-wrapper').outerHeight();  //キービジュアルの画像の高さを取得
  var bgHeight = $('.fv').outerHeight(); //ファーストビューの高さを取得
  

  $(".burger-btn").on('click',function(){
    if( $(window).scrollTop() < imgHeight -50){
      //ハンバーガーボタンがfvより上にあるとき
      $('.bar').toggleClass('cross'); //ハンバーガーボタンのラインをクロスさせるCSSを当てたり外したりする
      $('.header-nav').toggleClass('open'); //ナビゲーションが開くCSSを当てたり外したりする
      $('.burger-musk').fadeToggle(300); //背景を暗くするマスクをフェードイン・フェードアウトさせる
      $('body').toggleClass('noscroll'); //ハンバーガーメニューを開いたときにスクロールしないようにする
    }else{
      //ハンバーガーボタンがfvより下にあるとき
      $(this).toggleClass('black'); //ハンバーガーボタンを黒くしたり白くしたりする
      $('.bar').toggleClass('cross');
      $('.header-nav').toggleClass('open');
      $('.burger-musk').fadeToggle(300);
      $('body').toggleClass('noscroll');
    }
  });


// スクロールしたら、サイトロゴとハンバーガーボタンの色が変わる
  $(window).on('load scroll', function(){
     if ($(window).scrollTop() < imgHeight -50) {
       //メインビジュアル内にいるので、クラスを外す。
       $('.site-title').removeClass('black');
     }else {
       //メインビジュアルより下までスクロールしたので、クラスを付けて色を変える
       $('.site-title').addClass('black');
     }

     if ($(window).scrollTop() < bgHeight -50) {
       //メインビジュアル内にいるので、クラスを外す。
       $('.burger-btn').removeClass('black');
     }else {
       //メインビジュアルより下までスクロールしたので、クラスを付けて色を変える
       $('.burger-btn').addClass('black');
     }
  });
});