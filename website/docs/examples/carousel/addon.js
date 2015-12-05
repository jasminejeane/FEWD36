
//Add on JS 


//Scroll from Navigation Bar

$("nav ul li a[href^='#']").on('click', function(e) {
  console.log("working");

   // prevent default anchor click behavior
   e.preventDefault();

   // store hash
   var hash = this.hash;

   // animate
   $('html, body').animate({
       scrollTop: $(hash).offset().top
     }, 300, function(){

       // when done, add hash to url
       // (default click behaviour)
       window.location.hash = hash;
     });

});


//parallax

$(document).ready(function(){
   // cache the window object
   $window = $(window);
 
   $('section[data-type="background"]').each(function(){
     // declare the variable to affect the defined data-type
     var $scroll = $(this);
                     
      $(window).scroll(function() {
        // HTML5 proves useful for helping with creating JS functions!
        // also, negative value because we're scrolling upwards                             
        var yPos = -($window.scrollTop() / $scroll.data('speed')); 
         
        // background position
        var coords = '50% '+ yPos + 'px';
 
        // move the background
        $scroll.css({ backgroundPosition: coords });    
      }); // end window scroll
   });  // end section function
}); // close out script





//parallax code
$(document).ready(function(){
    $('section[data-type="background"]').each(function(){
        var $bgobj = $(this); // assigning the object
    
        $(window).scroll(function() {
            var yPos = -($window.scrollTop() / $bgobj.data('speed')); 
        // Put together our final background position
            var coords = '50% '+ yPos + 'px';

            // Move the background
            $bgobj.css({ backgroundPosition: coords });
        }); 
    });    
});

//scroll appear


$(document).ready(function(){
  //Take your div into one js variable
  var div = $("#divToShowHide");
  //Take the current position (vertical position from top) of your div in the variable
  var pos = div.position();
  //Now when scroll event trigger do following
  $(window).scroll(function () {
   var windowpos = $(window).scrollTop();
   //Now if you scroll more than 100 pixels vertically change the class to AfterScroll
   // I am taking 100px scroll, you can take whatever you need
   if (windowpos >= (pos.top - 100)) {
     div.addClass("AfterScroll");
   }
   //If scroll is less than 100px, remove the class AfterScroll so that your content will be hidden again 
   else {
     s.removeClass("AfterScroll");
   }
   //Note: If you want the content should be shown always once you scroll and do not want to hide it again when go to top agian, no need to write the else part
 });
});


// alert function... made it myself.. xo



$('#nosubmit').click( function() { 
  var username = $('#name').val();


  alert('I KNEW YOU WERE THE ONE ' + username + '!');
});


$('#submit').click( function() { 
  var username = $('#name').val();


  alert('Back to the matrix you go.' + username + '!');
});




// appear on scroll

// $(window).scroll(function() {
//     var y_scroll_pos = window.pageYOffset;
//     var scroll_pos_test = 150;             
//   // set to whatever you want it to be

//     if(y_scroll_pos > scroll_pos_test) {
//      $(".bonuses")..hide().show("slow");
//     }
//   else
//   {
//     $(".bonuses").css("background-color","#FFF");
//   }
// });

// $(".fc").hide().show("slow");

// local Storage


// $('#submit').on('click', function(){

//     $('input[type="text"]').each(function(){    
//         var id = $(this).attr('id');
//         var value = $(this).val();
//        localStorage.setItem(id, value);

//     });   
// });

// $('#load').on('click', function(){
//     $('input[type="text"]').each(function(){    
//         var id = $(this).attr('id');
//         var value = localStorage.getItem(id);

//         $(this).val(value);

//     }); 
// });


// //alert buttons

// function CustomAlert(){
//     this.render = function(dialog){
//         var winW = window.innerWidth;
//         var winH = window.innerHeight;
//         var dialogoverlay = document.getElementById('dialogoverlay');
//         var dialogbox = document.getElementById('dialogbox');
//         dialogoverlay.style.display = "block";
//         dialogoverlay.style.height = winH+"px";
//         dialogbox.style.left = (winW/2) - (550 * .5)+"px";
//         dialogbox.style.top = "100px";
//         dialogbox.style.display = "block";
//         document.getElementById('dialogboxhead').innerHTML = "I KNEW YOU WERE THE ONE!!!";
//         document.getElementById('dialogboxbody').innerHTML = dialog;
//         document.getElementById('dialogboxfoot').innerHTML = '<button onclick="Alert.ok()">OK</button>';
//     }
//   this.ok = function(){
//     document.getElementById('dialogbox').style.display = "none";
//     document.getElementById('dialogoverlay').style.display = "none";
//   }
// }

// var Alert = new CustomAlert();


