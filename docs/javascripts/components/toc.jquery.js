;(function ( $, window, document, undefined ) {

  var pluginName = "toc",
    defaults = {};

  function Plugin ( element, options ) {
    this.element = element;
    this.$el = $(element);
    this.settings = $.extend( {}, defaults, options );
    this._defaults = defaults;
    this._name = pluginName;
    this.$parent;
    this.headings = [];
    this.targets = [];
    this.init();
  }

  $.extend(Plugin.prototype, {
    init: function () {
      var plugin = this;
      plugin.$parent = plugin.$el.parent();
      plugin.targets = plugin.getTargets();
      plugin.setTargets();
      plugin.headings = plugin.getHeadings();
    },
    getTargets: function(){
      var plugin = this,
          targets;
      targets = plugin.$el.data('targets');
      targets = targets.replace("[", "");
      targets = targets.replace("]", "");
      return targets;
    },
    setTargets: function() {
      var plugin = this;
      plugin.$parent.find(plugin.targets).each(function(index, element){
        $(element).attr('id', plugin.headingID($(element).text()));
      });
    },
    getHeadings: function() {
      var plugin = this,
          prev = 1,
          html = '';
      html = '<h2 class="toc-title">Contents</h2>';
      html += '<ul>';
      plugin.$parent.find(plugin.targets).each(function(){
        var $element = $(this),
            id = $element.attr('id'),
            text = $element.text(),
            level = $element[0].tagName.replace('H', '') - 1;
        if(level === prev){
          html += '<li>' + plugin.buildLink(id, text);
        } else if(level <= prev) {
          for(i = level; i < prev; i++) {
            html += '</li></ul>';
          }
          html += '<li>' + plugin.buildLink(id, text);
        } else if(level > prev) {
          for(i = level; i > prev;i--) {
            html += '<ul><li>';
          }
          html += plugin.buildLink(id, text);
        }
        prev = level;
      });
      html += '</ul>';
      plugin.$el.append($(html));
    },
    headingID: function(text) {
      var text = text.toLowerCase().replace(/[^\w ]+/g,'').replace(/ +/g,'-');
      return text;
    },
    buildLink: function(id, text) {
      return '<a href="#' + id + '">' + text + '</a>';
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