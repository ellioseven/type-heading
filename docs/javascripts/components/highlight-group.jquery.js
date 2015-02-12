;(function ( $, window, document, undefined ) {

  "use strict";

  var pluginName = "highlightGroup",
      defaults = {
        jsAnimations: true,
        activeClass: 'highlight-group-active',
        highlightItemSelector: '.highlight',
        highlightItemClass: 'higlight-group-item',
        highlightItemOpenClass: 'highlight-group-item-open',
        navElement: 'ul',
        navClass: 'highlight-group-nav',
        navItemElement: 'li',
        navItemClass: 'highlight-group-nav-item',
        navItemOpenClass: 'highlight-group-nav-item-open',
        navItemTriggerElement: 'button',
        navItemTriggerElementClass: 'highlight-group-nav-item-trigger'
      };

  function Plugin ( element, options ) {
    this.element = element;
    this.$element = $(element);
    this.settings = $.extend( {}, defaults, options );
    this._defaults = defaults;
    this._name = pluginName;
    this.$highlights;
    this.nav;
    this.init();
  }

  $.extend(Plugin.prototype, {
    init: function () {
      var plugin = this,
          settings = plugin.settings;
      plugin.$element.addClass(settings.activeClass);
      plugin.$highlights = plugin.$element.children(settings.highlightItemSelector);
      plugin.$highlights.each(function(){
        $(this).addClass(settings.highlightItemClass);
      });
      plugin.nav = plugin.buildNav();
      plugin.$element.prepend(plugin.nav.$element);
      plugin.toggle(0);
    },
    buildNav: function() {
      var plugin = this,
          settings = plugin.settings,
          nav,
          $navElement,
          $navItemElement,
          navItems = [],
          language;
      $navElement = $('<' + settings.navElement + '/>').addClass(settings.navClass);
      plugin.$highlights.each(function(){
        var $navItemElement = plugin.createNavItem($(this));
        navItems.push($navItemElement);
        $navElement.append($navItemElement);
      });
      nav = {
        $element: $navElement,
        items: navItems
      };
      return nav;
    },
    createNavItem: function($highlight){
      var plugin = this,
          settings = plugin.settings,
          $navItem;
      $navItem = $('<' + settings.navItemElement + '/>')
                  .addClass(settings.navItemClass);
      $navItem.append(plugin.createNavItemTrigger($highlight));
      return $navItem;
    },
    createNavItemTrigger: function($highlight) {
      var plugin = this,
          settings = plugin.settings,
          $trigger,
          language;
      language = $highlight.find('[class^="language-"]').data('lang');
      $trigger = $('<' + settings.navItemTriggerElement + '/>')
                  .addClass(settings.navItemClass)
                  .text(language);
      $trigger.click(function(){
        plugin.toggle($(this).parent('.' + settings.navItemClass).index());
      });
      return $trigger;
    },
    toggle: function(nth) {
      var plugin = this,
          settings = plugin.settings;
      $.each(plugin.nav.items, function(i){
        plugin.close(i);
      });
      plugin.open(nth);
    },
    open: function(nth) {
      var plugin = this,
          settings = plugin.settings;
      plugin.$highlights.eq(nth).addClass(settings.highlightItemOpenClass);
      plugin.nav.items[nth].addClass(settings.navItemOpenClass);
      if(plugin.settings.jsAnimations) {
        plugin.$highlights.eq(nth).show();
      }
    },
    close: function(nth) {
      var plugin = this,
          settings = plugin.settings;
      plugin.$highlights.eq(nth).removeClass(settings.highlightItemOpenClass);
      plugin.nav.items[nth].removeClass(settings.navItemOpenClass);
      if(plugin.settings.jsAnimations) {
        plugin.$highlights.eq(nth).hide();
      }
    }
  });

  $.fn[ pluginName ] = function ( options ) {
    return this.each(function() {
      if ( !$.data( this, "plugin_" + pluginName ) ) {
        $.data( this, "plugin_" + pluginName, new Plugin( this, options ) );
      }
    });
  };

})( jQuery, window, document );