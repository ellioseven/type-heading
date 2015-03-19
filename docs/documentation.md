---
layout: page
title: Documentation
permalink: /documentation/
menu: true
---
<div class="toc" data-targets="[h1, h2, h3, h4]"></div>
{% assign settings = site.collections.settings.docs | sort:'weight' %}
{% assign coreMixins = site.collections.mixins.docs | where: 'group', 'Core' | sort:'weight' %}
{% assign headingFunctions = site.collections.functions.docs | where: 'group', 'Heading' | sort:'weight' %}
{% assign headingMixins = site.collections.mixins.docs | where: 'group', 'Heading' | sort:'weight' %}
{% assign propertyFunctions = site.collections.functions.docs | where: 'group', 'Property' | sort:'weight' %}
{% assign propertyMixins = site.collections.mixins.docs | where: 'group', 'Property' | sort:'weight' %}
{% assign breakpointMixins = site.collections.mixins.docs | where: 'group', 'Breakpoint' | sort:'weight' %}
## Settings
### Settings: General
{% for setting in settings %}
{% include_relative _layouts/setting.html %}
{% endfor %}
## Core
### Core: Mixins
{% for mixin in coreMixins %}
{% include_relative _layouts/mixin.html %}
{% endfor %}
## Headings
### Headings: Functions
{% for function in headingFunctions %}
{% include_relative _layouts/function.html %}
{% endfor %}
### Headings: Mixins
{% for mixin in headingMixins %}
{% include_relative _layouts/mixin.html %}
{% endfor %}
## Properties
### Properties: Functions
{% for function in propertyFunctions %}
{% include_relative _layouts/function.html %}
{% endfor %}
### Properties: Mixins
{% for mixin in propertyMixins %}
{% include_relative _layouts/mixin.html %}
{% endfor %}
### Breakpoint: Mixins
{% for mixin in breakpointMixins %}
{% include_relative _layouts/mixin.html %}
{% endfor %}