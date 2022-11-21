$(document).ready(function (){
   //VARIABLES
   var headerHeight = $(".header").outerHeight(true);

   // BODY
   $("body").animate({
      opacity: 1
   }, 1000);

   // HEADER-TOP
   $(".header-top__link").click(function (e){
      e.preventDefault();
      $(".header-top").remove();
   });
   $(".modal-dialog").css({
      "margin": headerHeight+"px auto"
   });

   // HEADER-BOTTOM
   $(".header-bottom__link-search").click(function (e){
      e.preventDefault();
      $(this).addClass("d-none");
      $(".form-search").removeClass("d-none");
   });
   $(".form-search-block__link-close").click(function (e){
      e.preventDefault();
      $(".header-bottom__link-search").removeClass("d-none");
      $(".form-search").addClass("d-none");
   });

   //CATEGORIES
   $(".thumbnail-category__link").click(function (e){
      e.preventDefault();
      $(".thumbnail-category__link").removeClass("thumbnail-category__link--active");
      $(this).addClass("thumbnail-category__link--active");
      $(".subcategory-block__link").removeClass("subcategory-block__link--active");
      if(!$(this).hasClass("all")){
         $(".subcategory-block").removeClass("d-none");
      }else{
         $(".subcategory-block").addClass("d-none");
      }
   });

   //SUBCATEGORIES
   $('.owlSubCategories').owlCarousel({
      items: 11,
      dots: false,
      nav: true,
      navText: ['<img src="images/owl-right.png">', '<img src="images/owl-right.png">'],
      responsive: {
         0:{
            items: 5,
            nav: false
         },
         768:{
            items: 6,
            nav: false
         },
         991:{
            items: 6
         },
         1200:{
            items: 11
         }
      }
   });
   $(".subcategory-block__link").click(function (){
      $(".subcategory-block__link").removeClass("subcategory-block__link--active");
      $(this).addClass("subcategory-block__link--active");
   });

   //PLACE
   $('.owlPlaces').owlCarousel({
      items: 1,
      loop:true,
      margin:10
   });

   //MAP
   $(".btn-map").click(function (e){
      e.preventDefault();
      $(".section").not(".section-map, .section-title-block, .section-categories, .section-subcategories").addClass("d-none");
      $(".section-map").removeClass("d-none");
      $(".btn-map.desktop-list").removeClass("d-none");
      $(".btn-map.desktop-map").addClass("d-none");
      $(".footer").toggleClass("d-lg-block");
   });
   $(".btn-map.desktop-list").click(function (e){
      e.preventDefault();
      $(".section").removeClass("d-none");
      $(".section-map").addClass("d-none");
      $(".btn-map.desktop-map").removeClass("d-none");
      $(".btn-map.desktop-list").addClass("d-none");
      $(".footer").addClass("d-lg-block");
   });

   // SEARCH
   var searchValues = '';
   var searchValuesArr = [];
   $(".form-search-filter__link").click(function (e){
      e.preventDefault();
      $(this).toggleClass("form-search-filter__link--active");
      if($(this).hasClass("form-search-filter__link--active")){
         var searchItem = $(this).text().trim();
         if(searchValues === ''){
            searchValues = searchValues+$(this).text().trim();
         }else{
            searchValues = searchValues+','+$(this).text().trim();
         }
         searchValuesArr = searchValues.split(",");
         $(".form-search__select").append("<option value='"+searchValuesArr[searchValuesArr.length-1]+"'>"+searchValuesArr[searchValuesArr.length-1]+"</option>");
         $(".form-search__select option[value='"+searchItem+"']").attr("selected","selected");
         $(".search-select").append('<a class="search-select__link d-inline-block">\n' +
             '                                        <span class="search-select__title">'+searchItem+'</span>\n' +
             '                                        <img class="search-select__img" src="images/search-close-item.png" alt="Delete">\n' +
             '                                    </a>');
      }else{
         var deletedValue = $(this).text().trim();
         searchValues = searchValues.replace(deletedValue, '').replace(',,', ',');
         $(".form-search__select option[value='"+searchValuesArr[searchValuesArr.indexOf(deletedValue)]+"']").remove();
         $(".search-select__link:contains("+deletedValue+")").remove();
         if(searchValues.startsWith(',', 0)){
            searchValues = searchValues.substr(1);
         }else if(searchValues.endsWith(',', searchValues.length)){
            searchValues = searchValues.slice(0, searchValues.length-1);
         }
         searchValuesArr = searchValuesArr.filter(function(item) {
            return item !== deletedValue;
         });
      }
   });
   $(".search-select").on("click", ".search-select__link", function (){
      var deletedValue = $(this).text().trim();
      $(".form-search-filter__link--active:contains("+deletedValue+")").removeClass("form-search-filter__link--active");
      $(".form-search__select option:contains("+deletedValue+")").remove();
      $(this).remove();
   });
   $(".form-search").on("click", ".btn-reset", function (){
      $(".search-select__link").remove();
      $(".form-search-filter__link--active").removeClass("form-search-filter__link--active");
      $(".form-search__select option").remove();
   });

   //PLACE INNER
   $('.owlPlaceInner').owlCarousel({
      items: 4,
      loop: true,
      autoWidth: true,
      dots: false,
      nav: true,
      navText: ['<img src="images/owl-inner-left.png">', '<img src="images/owl-inner-right.png">']
   });
   $('.owlMenu').owlCarousel({
      items: 4,
      margin: 20,
      dots: false,
      responsive: {
         0:{
            items: 2
         },
         768:{
            items: 3
         },
         991:{
            items: 4
         }
      }
   });
   $(".nav-place-info__item").click(function (){
      $(".nav-place-info__item").removeClass("nav-place-info__item--active");
      $(this).addClass("nav-place-info__item--active");
   });

   //MOBILE
   $('.owlMobileMenu').owlCarousel({
      items: 4,
      margin: 5,
      autoWidth: true,
      dots: false
   });
   $(".nav-mobile-menu__link").click(function (e){
      e.preventDefault();
      $(".nav-mobile-menu__link").removeClass("nav-mobile-menu__link--active");
      $(this).addClass("nav-mobile-menu__link--active");
   });
   $(".nav-mobile-sort-menu__link").click(function (e){
      e.preventDefault();
      $(".nav-mobile-sort-menu__link").removeClass("nav-mobile-sort-menu__link--active");
      $(this).addClass("nav-mobile-sort-menu__link--active");
   });
   $(".btn-mobile-map.mobile-map").click(function (e){
      e.preventDefault();
      $(".section").not(".section-map, .section-title-block, .section-categories, .section-subcategories, .section-mobile-menu").addClass("d-none");
      $(".section-map").removeClass("d-none");
      $(".btn-mobile-map.mobile-list").removeClass("d-none");
      $(".btn-mobile-map.mobile-map").addClass("d-none");
      $(".footer").addClass("d-none");
   });
   $(".btn-mobile-map.mobile-list").click(function (e){
      e.preventDefault();
      $(".section").not(".section-title-block, .section-categories").removeClass("d-none");
      $(".section-map").addClass("d-none");
      $(".btn-mobile-map.mobile-map").removeClass("d-none");
      $(".btn-mobile-map.mobile-list").addClass("d-none");
   });
   $(".nav-footer__link").click(function (e){
      e.preventDefault();
      if($(".form-search").hasClass("d-none")){
         $(".nav-footer__link").removeClass("nav-footer__link--active");
         $(this).addClass("nav-footer__link--active");
         $(".section").not(".section-footer, .section-mobile-search").addClass("d-none");
         $(".form-search").removeClass("d-none");
      }else{
         $(".nav-footer__link").addClass("nav-footer__link--active");
         $(this).removeClass("nav-footer__link--active");
         $(".section").not(".section-title-block, .section-categories, .section-footer, .section-mobile-search, .section-map").removeClass("d-none");
         $(".form-search").addClass("d-none");
      }
   });

   // DO NOT REMOVE PLEASE
   console.log("FRONTEND DEVELOPER: AZER SULEYMANOV");
});