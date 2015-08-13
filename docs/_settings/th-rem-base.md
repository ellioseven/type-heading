---
weight: 2
name: 'th-rem-base'
description: 'Font size base for calculating rem units.'
since: '0.0.14'
type: 'Number'
default: '$th-base-font-size'
---
Used for calculating rem units. The default font size is based on $th-base-font-size by default.
If you want your rem base font size to be different, simply define `$th-rem-base` with a px value, like so:

{% highlight sass %}
$th-rem-base: 18px;
{% endhighlight %}