(function(){

  	// Highlight Group
	  $('.highlight-group').highlightGroup();

	  // Reponsive Menu
	  $('.site-header .menu').responsiveMenu({
	  	breakpoint: 1024
	  });

    
	  $(document).ready(function() {
      // Table of Contents
      $('.toc').toc();
    });

})();