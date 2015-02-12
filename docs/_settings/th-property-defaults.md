---
weight: 3
name: 'th-property-defaults'
description: 'Define default heading values.'
since: '0.0.10'
type: 'Map'
default: ''
---
Used to store the default values for heading properties that are either not
defined or are set by the `default` keyword:

{% highlight sass %}
// Define default heading values.
$th-property-defaults: (
  font-size: 16px,
  line-height: 24px,
  margin-top: 20px,
  margin-bottom: 20px
);
{% endhighlight %}