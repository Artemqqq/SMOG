$(function() {

  /* Menu nav toggle */ 
  
  let nav = $("#nav");
  let navToggle = $("#navToggle");
  
  
  navToggle.on("click", function(event) {
      event.preventDefault();
    
      $(this).toggleClass("show");
      nav.toggleClass("show");
  });
  
  /* ArrowWrapper*/
  
  let about = $("#aboutText");
  let arrowWrapper = $("#arrowWrapper");
  
  arrowWrapper.on("click", function(event) {
    event.preventDefault();
      
    $(this).toggleClass("show");
    about.toggleClass("show");
  });


  /* ArrowGallery*/

  let extra = $("#extraPhoto");
  let arrowGallery = $("#arrowGallery");

  arrowGallery.on("click", function(event) {
    event.preventDefault();

    $(this).toggleClass("show");
    extra.toggleClass("show");
  });


    
  
  /* Reviews slider*/
  
  let slider = $("#menuSlider");

  slider.slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: false,
    arrows: false,
    dots: true
  });



  });


  