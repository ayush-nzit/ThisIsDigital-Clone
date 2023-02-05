function init(){
  gsap.registerPlugin(ScrollTrigger);

// Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

const locoScroll = new LocomotiveScroll({
  el: document.querySelector("#bgs"),
  smooth: true
});
// each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
locoScroll.on("scroll", ScrollTrigger.update);

// tell ScrollTrigger to use these proxy methods for the ".smooth-scroll" element since Locomotive Scroll is hijacking things
ScrollTrigger.scrollerProxy("#bgs", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, // we don't have to define a scrollLeft because we're only scrolling vertically.
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
  pinType: document.querySelector("#bgs").style.transform ? "transform" : "fixed"
});
// each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

// after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
ScrollTrigger.refresh();

}
init()


function fliper(){
  var swiper = new Swiper(".mySwiper", {
    spaceBetween: 30,
    centeredSlides: true,
    rewind: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
}
fliper();


const scroll = new LocomotiveScroll({
  el: document.querySelector('#bgs'),
  smooth: true
});



gsap.from('#photo-1', {
  opacity:.2,
  y:"18%",
  ease:"expo.ease",
  duration:1
} )
gsap.from('#photo-2', {
  opacity:.2,
  right:"16%",
  ease:"expo.ease",
  duration:1
} )

gsap.from('#photo-3', {
  opacity:.2,
  top:"34%",
  ease:"expo.ease",
  duration:1
} )
gsap.from('.textCont', {
  opacity:.2,
  
  ease:"expo.ease",
  duration:1
} )

gsap.from('.t-head,.t-body,.t-end', {
  scrollTrigger:{
    scroller: "#bgs",
    trigger: '#two',
    // markers:true,
    start:'top 62%'
},
  opacity:0,
  y:"30px",
  ease:"expo.ease",
  stagger:{
    amount:1
  }
} )
gsap.from('.photo-left,.photo-right', {
  scrollTrigger:{
    scroller: "#bgs",
    trigger: '#three',
    start:'top 62%'
},
  opacity:0,
  y:"30px",
  ease:"expo.ease",
  stagger:{
    amount:.7
  }
} )
gsap.from('.th-right,th-inline', {
  scrollTrigger:{
    scroller: "#bgs",
    trigger: '#three',
    
    start:'top 60%'
},
  opacity:0,
  y:"80px",
  ease:"expo.ease",
  delay:1,
  stagger:{
    
    amount:4    
  }
} )


gsap.from('.five, .inline-button-6 ', {
  scrollTrigger:{
    scroller: "#bgs",
    trigger: '.five',
    
    start:'top 62%'
},
  opacity:0,
  y:"30px",
  ease:"expo.ease",
  stagger:{
    amount:1
  }
} )
gsap.from('#overflow', {
  scrollTrigger:{
    scroller: "#bgs",
    trigger: '.seven',
    
    start:'top 62%'
},
  opacity:0,
  y:"30px",
  ease:"expo.ease",
  stagger:{
    amount:1
  }
} )

gsap.from('.sev-col', {
  scrollTrigger:{
    scroller: "#bgs",
    trigger: '.seven',
    
    start:'top 62%'
},
  opacity:0,
  y:"30px",
  ease:"expo.ease",
  stagger:{
    amount:1
  }
} )



gsap.from('.f-head, .f-container', {
  scrollTrigger:{
    scroller: "#bgs",
    trigger: '.four',
    
    start:'top 62%'
},
  opacity:0,
  y:"80px",
  ease:"expo.ease",
  stagger:{
    amount:.7
  }
} )

