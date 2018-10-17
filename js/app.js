instances = null;
sidenav_main_instance = null;
document.addEventListener('DOMContentLoaded', function() {
    var elem_sidenav = document.querySelectorAll('.sidenav');
    sidenav_main_instance = M.Sidenav.init(elem_sidenav,{edge:'left'});

    var elem_scroll = document.querySelectorAll('.scrollspy');
    M.ScrollSpy.init(elem_scroll,{scrollOffset:0});

    var elem_carousel = document.querySelectorAll('.carousel');
    instances = M.Carousel.init(elem_carousel,{fullWidth: true, indicators:true});   
    var elem_floating_button = document.querySelectorAll('.fixed-action-btn');
    M.FloatingActionButton.init(elem_floating_button);
    var elem_tap = document.querySelectorAll('.tap-target');
    M.TapTarget.init(elem_tap);
    var elem_modal = document.querySelectorAll('.modal');
    M.Modal.init(elem_modal);
    var ell = document.querySelectorAll('.portfolio-content');
    ell.forEach(function(element){
      element.style.height = (element.clientWidth)+'px';
    });

    var sidenav_links = document.querySelectorAll('.sidenav li a');

    sidenav_links.forEach(function(elem){
      elem.addEventListener("click",function(){
        fnCloseSideNav();
      })
    })
    
    var animated_elements = document.querySelectorAll('.animated');
    animated_elements.forEach(function(elm) {
      new Waypoint({
        element: elm,
        handler: function(direction) {
          this.element.classList.add(this.element.getAttribute('animation'));    
        },
        offset: '60%'
      });
    });
    
    
    
    autoplay();
  });

  function autoplay(){
    instances.forEach(function(element) {
      element.next();
    }, this);
    setTimeout(autoplay,4000);
  }

  function fnCloseSideNav(){
    sidenav_main_instance[0].close();
  }