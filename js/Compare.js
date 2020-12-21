
    $(window).on('load', function(event){
        $('body').removeClass('.reloading');
        $('.loader').delay(1000).fadeOut('fast');
    })
    $(document).ready(function(){
        $(".dunelm-main").hover(function(){
            $(".dunelm-sub").slideToggle(300);
        });
        $(".dunelm-main-1").hover(function(){
            $(".dunelm-sub-1").slideToggle(300);
        });
        $(".colection-main").click(function(){
            $(".colection-sub").slideToggle(300);
        });
        $(".colection-sub-sofa").hover(function(){
            $(".colection-sub-sofa-show").slideToggle();
        });
        $(".colection-sub-coffee-table").hover(function(){
            $(".colection-sub-coffee-table-show").slideToggle();
        });
        $(".menu-small").click(function(){
            $(".menu-sub").slideToggle();
        });
        $(".furniture-main").hover(function(){
            $(".furniture-sub").slideToggle();
        });
        $(".steel-main").click(function(){
            $(".steel-sub").slideToggle();
        });
        $(".steel-sub-sofa").hover(function(){
            $(".steel-sub-sofa-show").slideToggle();
        });
        $(".steel-sub-chair").hover(function(){
            $(".steel-sub-chair-show").slideToggle();
        });
        $(".steel-sub-coffee-table").hover(function(){
            $(".steel-sub-coffee-table-show").slideToggle();
        });
        $("#icon-menu").click(function(){
            $(".menu-left").slideToggle();
        });
        $(".compare-title").click(function(){
            $("#compare-product-main").slideToggle(1000);
        });

        window.onscroll = function() {scrollFunction()};
        function scrollFunction() {
            if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
                document.getElementById("myBtn").style.display = "block";
            } else {
                document.getElementById("myBtn").style.display = "none";
            }
        }
        document.getElementById('myBtn').addEventListener("click", function(){    
            document.body.scrollTop = 0;
            document.documentElement.scrollTop = 0;
        });

        $("a[href*='#']:not([href='#])").click(function() {
            let target = $(this).attr("href");
        $('html,body').stop().animate({
            scrollTop: $(target).offset().top
        }, 1000);
        event.preventDefault();
        });

        $(function () {
            $('.filter').filterizr();
            var filterSingle = $('.filter').filterizr({
                setupControls: false,
                animationDuration: 0.5,
                delay: 0
            });
            $('.shuffle').click(function () {
                filterSingle.filterizr('shuffle');
            });
            $('.sort').click(function () {
                filterSingle.filterizr('sort');
            }); 
        });

        
        $("div[id^='myModal']").each(function(){
        var currentModal = $(this);
        //click next
        currentModal.find('.btn-next').click(function(){
        currentModal.modal('hide');
        currentModal.closest("div[id^='myModal']").nextAll("div[id^='myModal']").first().modal('show'); 
        });
  
        //click prev
        currentModal.find('.btn-prev').click(function(){
        currentModal.modal('hide');
        currentModal.closest("div[id^='myModal']").prevAll("div[id^='myModal']").first().modal('show'); 
        });
        });
});
        function kiemtra(){
          var sMail = frmDangky.txtMail.value;
          var reMail = /^\w+[@]\w+[.]\w+([.]\w+)?$/;
          if(sMail == ""){
              alert("Email cannot blank !");
              frmDangky.txtMail.focus();
              return false;
          }
          if(!reMail.test(sMail)){
              alert("Email invalid !");
              frmDangky.txtMail.focus();
              return false;
              alert("Email invalid !");
          }
          var sPass = frmDangky.txtPass.value;
          var rePass = /^[A-Z]\w+[0-9]$/;
          if(sPass == ""){
              alert("Password cannot blank !");
              frmDangky.txtMail.focus();
              return false;
          }
          if(!rePass.test(sPass)){
              alert("Password invalid");
              frmDangky.txtPass.focus();
              return false;
              alert("Password notmatch !");
          }
            
          alert("Congratulations login !");
      };

//start-compare
(function ($) {
    var list = [];

    /* function to be executed when product is selected for comparision*/

    $(document).on('click', '.addToCompare', function () {
        $(".comparePanle").show();
        $(this).toggleClass("rotateBtn");
        $(this).parents(".selectProduct").toggleClass("selected");
        var productID = $(this).parents('.selectProduct').attr('data-title');

        var inArray = $.inArray(productID, list);
        if (inArray < 0) {
            if (list.length > 2) {
                $("#WarningModal").show();
                $("#warningModalClose").click(function () {
                    $("#WarningModal").hide();
                });
                $(this).toggleClass("rotateBtn");
                $(this).parents(".selectProduct").toggleClass("selected");
                return;
            }

            if (list.length < 3) {
                list.push(productID);

                var displayTitle = $(this).parents('.selectProduct').attr('data-id');

                var image = $(this).siblings(".productImg").attr('src');

                $(".comparePan").append('<div id="' + productID + '" class="relPos titleMargin w3-margin-bottom   w3-col l3 m4 s4"><div class="w3-white titleMargin"><a class="selectedItemCloseBtn w3-closebtn cursor">&times</a><img src="' + image + '" alt="image" style="height:100px;"/><p id="' + productID + '" class="titleMargin1">' + displayTitle + '</p></div></div>');
            }
        } else {
            list.splice($.inArray(productID, list), 1);
            var prod = productID.replace(" ", "");
            $('#' + prod).remove();
            hideComparePanel();

        }
        if (list.length > 1) {

            $(".cmprBtn").addClass("active");
            $(".cmprBtn").removeAttr('disabled');
        } else {
            $(".cmprBtn").removeClass("active");
            $(".cmprBtn").attr('disabled', '');
        }

    });
    /*function to be executed when compare button is clicked*/
    $(document).on('click', '.cmprBtn', function () {
        if ($(".cmprBtn").hasClass("active")) {
            /* this is to print the  features list statically*/
            $(".contentPop").append('<div class="w3-col s3 m3 l3 compareItemParent relPos">' + '<ul class="product">' + '<li class=" relPos compHeader"><p class="w3-display-middle">Features</p></li>' + '<li>Title</li>' + '<li>Width</li>' + '<li>Depth</li>'+ '<li>Height</li>' + '<li class="bh">Warranty</li>' + '<li>Price</li></ul>' + '</div>');

            for (var i = 0; i < list.length; i++) {
                /* this is to add the items to popup which are selected for comparision */
                product = $('.selectProduct[data-title="' + list[i] + '"]');
                var image = $('[data-title=' + list[i] + ']').find(".productImg").attr('src');
                var title = $('[data-title=' + list[i] + ']').attr('data-id');
                /*appending to div*/
                $(".contentPop").append('<div class="w3-col s3 m3 l3 compareItemParent relPos">' + '<ul class="product">' + '<li class="compHeader"><img src="' + image + '" class="compareThumb"></li>' + '<li>' + title + '</li>' + '<li>' + $(product).data('width') + '</li>' + '<li>' + $(product).data('depth') + '</li>' + '<li>' + $(product).data('height') + '<li class="bh">' + $(product).data('warranty') + '</li>' + '<li>' + $(product).data('price') + '</ul>' + '</div>');
            }
        }
        $(".modPos").show();
    });

    /* function to close the comparision popup */
    $(document).on('click', '.closeBtn', function () {
        $(".contentPop").empty();
        $(".comparePan").empty();
        $(".comparePanle").hide();
        $(".modPos").hide();
        $(".selectProduct").removeClass("selected");
        $(".cmprBtn").attr('disabled', '');
        list.length = 0;
        $(".rotateBtn").toggleClass("rotateBtn");
    });

    /*function to remove item from preview panel*/
    $(document).on('click', '.selectedItemCloseBtn', function () {

        var test = $(this).siblings("p").attr('id');
        $('[data-title=' + test + ']').find(".addToCompare").click();
        hideComparePanel();
    });

    function hideComparePanel() {
        if (!list.length) {
            $(".comparePan").empty();
            $(".comparePanle").hide();
        }
    }
})(jQuery);
//end-compare        
