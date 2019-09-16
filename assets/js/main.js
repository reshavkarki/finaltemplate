$('#owl-one').owlCarousel({

    margin: 0,
    nav: true,
    autoplay:true,
    autoplayTimeout:2000,
    responsiveClass: true,
    responsive: {
      0: {
        items: 1,
        nav: true
      },


    }
  })

  $('#owl-two').owlCarousel({
    loop:true,
    margin:30,
    // autoplay:true,
    // autoplayTimeout:3000,
    responsiveClass:true,
    responsive:{
        0:{
            items:1,
            nav:true
        },
        600:{
            items:1,
            nav:false
        },
        700:{
          items:2,
          nav:false
        },
        1000:{
                items:3,
                nav:false
            },
       
    }
})

$('#owl-four').owlCarousel({
    loop:true,
   
    // autoplay:true,
    // autoplayTimeout:3000,
    responsiveClass:true,
    responsive:{
        0:{
            items:2,
            nav:true
        },
        600:{
            items:3,
            nav:false
        },
        700:{
        items:4,
        nav:false
      },
        1000:{
            items:5,
            nav:false
        },
       
    }
})
$('#owl-three').owlCarousel({
    loop:true,
    margin:10,
    // autoplay:true,
    // autoplayTimeout:3000,
    responsiveClass:true,
    responsive:{
        0:{
            items:2,
            // nav:true
        },
        600:{
            items:3,
            nav:false
        },
        700:{
      items:4,
      nav:false
    },
        1000:{
            items:5,
            nav:false
        },
       
    }
})