$(function(){
 
 //銀行員のインデックスを押した時に画面が変わる
 $('.index-banker').click(function(){
  $('.active-banker').removeClass('active-banker');
  var clickedIndexBanker = $('.index-banker').index($(this));
  $('.slide').eq(clickedIndexBanker).addClass('active-banker');
  
  //インデックスボタンで前へと次へのボタンを表示と非表示にする
  var slideIndexBanker = $('.slide').index($('.active-banker'));
  
  $('.change-btn-banker').show();
  
  if(slideIndexBanker==0){
     $('.prev-btn-banker').hide();
     }else if(slideIndexBanker==4){
     $('.next-btn-banker').hide();
     }
  
 });
 
 //営業のインデックスを押した時に画面が変わる
 $('.index-sales').click(function(){
  $('.active-sales').removeClass('active-sales');
  var clickedIndexSales = $('.index-sales').index($(this));
  $('.slide-sales').eq(clickedIndexSales).addClass('active-sales');
  
  //インデックスボタンで前へと次へのボタンを表示と非表示にする
  var slideIndexSales = $('.slide-sales').index($('.active-sales'));
  $('.change-btn-sales').show();
  if(slideIndexSales==0){
     $('.prev-btn-sales').hide();
     }else if(slideIndexSales==4){
      $('.next-btn-sales').hide();
  }
  
 });
 
 
 //銀行員の前へと次へを押した時に画面が変わる
 $('.change-btn-banker').click(function(){
  var $displaySlideBanker = $('.active-banker');
  $displaySlideBanker.removeClass('active-banker');
  if($(this).hasClass('next-btn-banker')){
     $displaySlideBanker.next().addClass('active-banker');
     }else{
     $displaySlideBanker.prev().addClass('active-banker');
     }
  
  //銀行員の前へと次へのボタンを表示と非表示にする
  var slideIndexBanker = $('.slide').index($('.active-banker'));
  
  $('.change-btn-banker').show();
  
  if(slideIndexBanker==0){
     $('.prev-btn-banker').hide();
     }else if(slideIndexBanker==4){
     $('.next-btn-banker').hide();
     }
  
  
  
 });
 
 //営業の前へと次へを押した時に画面が変わる
 $('.change-btn-sales').click(function(){
  var $displaySlideSales = $('.active-sales');
  $displaySlideSales.removeClass('active-sales');
  if($(this).hasClass('next-btn-sales')){
     $displaySlideSales.next().addClass('active-sales');
     }else{
     $displaySlideSales.prev().addClass('active-sales');
     }
  
  //営業の前へと次へのボタンを表示と非表示にする
  var slideIndexSales = $('.slide-sales').index($('.active-sales'));
  $('.change-btn-sales').show();
  if(slideIndexSales==0){
    $('.prev-btn-sales').hide();
  }else if(slideIndexSales==4){
    $('.next-btn-sales').hide();
  }
  
 });
 
 //FAQの+を押した時と－を押した時に表示・非表示にする
 $('.faq-list-item').click(function(){
  var $answer = $(this).find('.answer');
  if($answer.hasClass('open')){
   $answer.removeClass('open');
   $answer.slideUp();
   $(this).find('span').text('+');
  } else {
   $answer.addClass('open');
   $answer.slideDown();
   $(this).find('span').text('-');
   }
 });
 
 //ヘッダー内の<a>タグをクリックすると下まで行く
 $('.header-right a').click(function(){
  var id=$(this).attr('href');
  var position=$(id).offset().top;
  $('html,body').animate({
   'scrollTop':position
  },500);
 });
 
});
