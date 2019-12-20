  $(function() {
      var screenWidth = window.innerWidth;
      var link = $('.m-menu-link');
      var closeMenu = $('.close-menu');
      var menu = $('.m-menu');
      link.on('click', function(event) {    
          if(screenWidth<=1000){
            event.preventDefault();
            menu.toggleClass('m-menu-full-size');
          }
          event.preventDefault();
          menu.toggleClass('m-menu_active');
      });
      closeMenu.on('click', function(event) {
        if(screenWidth<=1000){
            event.preventDefault();
            menu.toggleClass('m-menu-full-size');
        }
          event.preventDefault();
          menu.toggleClass('m-menu_active');
      });
    });

    $(function() {
        var searchBtn = $('.search');
        var closeSearch = $('.close-search');
        var mainSearch = $('.main-search');
        searchBtn.on('click', function(event) {
            event.preventDefault();
            mainSearch.toggleClass('main-search-active');
        });
        closeSearch.on('click', function(event) {
            event.preventDefault();
            mainSearch.toggleClass('main-search-active');
        });
      });