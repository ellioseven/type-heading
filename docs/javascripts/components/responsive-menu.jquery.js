;(function ( $, window, document, undefined ) {

  var pluginName = "responsiveMenu",
    defaults = {
      elementClass: 'responsive-menu',
      elementActiveClass: 'responsive-menu-active',
      elementInactiveClass: 'reponsive-menu-inactive',
      elementOpenClass: 'responsive-menu-open',
      elementClosedClass: 'responsive-menu-closed',
      toggleClass: 'responsive-menu-toggle',
      toggleElement: 'button',
      toggleText: 'Toggle Menu',
      toggleActiveClass: 'responsive-menu-toggle-active',
      toggleInactiveClass: 'responsive-menu-toggle-inactive',
      toggleOpenClass: 'responsive-menu-toggle-open',
      toggleClosedClass: 'responsive-menu-toggle-closed',
      breakpoint: 1024
    };

  function Plugin ( element, options ) {
    this.element = element;
    this.$el = $(element);
    this.settings = $.extend( {}, defaults, options );
    this._defaults = defaults;
    this._name = pluginName;
    this.$toggle;
    this.height;
    this.init();
  }

  $.extend(Plugin.prototype, {
    init: function () {
      var plugin = this,
          settings = plugin.settings,
          width = $(window).width();
      plugin.$toggle = plugin.createToggle();
      plugin.$el.addClass(settings.elementClass);
      plugin.$el.before(plugin.$toggle);
      plugin.create();
      $(window).resize(function(){
        if($(this).width() != width){
          width = $(this).width();
          plugin.create();
        }
      });
    },
    create: function() {
      var plugin = this,
        settings = plugin.settings,
        windowWidth = $(window).outerWidth();
      if(windowWidth < settings.breakpoint) {
        plugin.getHeight();
        plugin.activate();
      } else {
        plugin.disable();
      }
    },
    toggleMenu: function() {
      var plugin = this,
        settings = plugin.settings;
      if(plugin.$el.hasClass(settings.elementOpenClass)) {
        plugin.menuClose();
      } else {
        plugin.menuOpen();
      }
    },
    menuClose: function() {
      var plugin = this,
        settings = plugin.settings;
      plugin.$el.removeClass(settings.elementOpenClass);
      plugin.$el.addClass(settings.elementClosedClass);
      plugin.$toggle.removeClass(settings.toggleOpenClass);
      plugin.$toggle.addClass(settings.toggleClosedClass);
      plugin.$el.css({
        height: 0,
        overflow: 'hidden'
      });
    },
    menuOpen: function() {
      var plugin = this,
        settings = plugin.settings;
      plugin.$el.removeClass(settings.elementClosedClass);
      plugin.$el.addClass(settings.elementOpenClass);
      plugin.$toggle.removeClass(settings.toggleClosedClass);
      plugin.$toggle.addClass(settings.toggleOpenClass);
      plugin.$el.css('height', plugin.height);
    },
    createToggle: function() {
      var plugin = this,
        settings = plugin.settings,
        toggle;
      toggle = $('<' + settings.toggleElement + '/>');
      toggle.text(settings.toggleText);
      toggle.addClass(settings.toggleClass);
      toggle.click(function(){
        plugin.toggleMenu();
      });
      return toggle;
    },
    disable: function() {
      var plugin = this,
        settings = plugin.settings;
      plugin.$el.removeClass(settings.elementActiveClass);
      plugin.$el.addClass(settings.elementInactiveClass);
      plugin.$el.removeClass(settings.elementOpenClass);
      plugin.$el.removeClass(settings.elementClosedClass);
      plugin.$toggle.removeClass(settings.toggleActiveClass);
      plugin.$toggle.addClass(settings.toggleInactiveClass);
      plugin.$toggle.removeClass(settings.toggleOpenClass);
      plugin.$toggle.removeClass(settings.toggleClosedClass);
      plugin.$toggle.hide();
      plugin.$el.removeAttr('style');
    },
    activate: function() {
      var plugin = this,
        settings = plugin.settings;
        windowWidth = $(window).outerWidth();
      plugin.$el.removeClass(settings.elementInactiveClass);
      plugin.$el.addClass(settings.elementActiveClass);
      plugin.$toggle.removeClass(settings.toggleInactiveClass);
      plugin.$toggle.addClass(settings.toggleActiveClass);
      plugin.$toggle.show();
      plugin.menuClose();
    },
    getHeight: function() {
      var plugin = this;
      plugin.$el.removeAttr('style').css('visibility', 'hidden');
      plugin.height = plugin.$el.height();
      plugin.$el.removeAttr('style').css('height', 0);
    }
  });

  $.fn[ pluginName ] = function ( options ) {
    this.each(function() {
      if ( !$.data( this, "plugin_" + pluginName ) ) {
        $.data( this, "plugin_" + pluginName, new Plugin( this, options ) );
      }
    });
    return this;
  };

})( jQuery, window, document );