---
weight: 1
name: 'th-base-font-size'
description: 'Font size used for relative calculations.'
since: '0.0.10'
type: 'Number'
default: '16px'
---
Used for calculating relative calculations such as em. The default font size is
based on the browser default of 16px. If you want your base font size to be different,
simply define `$th-base-font-size` with a px value, like so:

{% highlight sass %}
$th-base-font-size: 18px;
{% endhighlight %}