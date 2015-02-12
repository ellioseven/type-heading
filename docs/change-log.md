---
layout: page
title: Change Log
permalink: /change-log/
menu: true
---
[![Gem Version](https://badge.fury.io/rb/type-heading.svg)](http://badge.fury.io/rb/type-heading)
{% for changelog in site.collections.changelog.docs reversed %}
{% include_relative _layouts/changelog.html %}
{% endfor %}