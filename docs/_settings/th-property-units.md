---
weight: 5
name: 'th-property-units'
description: 'Define units for heading properties.'
since: '0.0.11'
type: 'String'
default: '16px'
---
Heading properties can be converted to different units:

* em (eg: 1.5em)
* rem (eg: 1.5rem)
* rel (eg: 1.5)

Each property unit is defined in a single map like so:

{% highlight sass %}
// Define property units.
$th-property-units: (
  font-size: em,
  line-height: rel,
  margin-top: rem,
  margin-bottom: px
);
{% endhighlight %}

You can disable unit conversion for a property by settings it false:

{% highlight sass %}
// Define property units.
$th-property-units: (
  font-size: em,
  line-height: false,
  margin-top: em,
  margin-bottom: em
);
{% endhighlight %}