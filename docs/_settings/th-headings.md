---
weight: 2
name: 'th-headings'
description: 'Define headings and their values.'
since: '0.0.10'
type: 'Map'
default: ''
---
Used for defining a map of all available headings and their values.

Values are defined in order:

1. font-size
2. line-height
3. margin-top / margin-bottom
4. breakpoint

{% highlight sass %}
$th-headings: {
  key: (font-size line-height (margin-top margin-bottom) breakpoint);
}
{% endhighlight %}

Heading margin top and bottom values are special. They can be defined together
or a single value:

{% highlight sass %}
// margin-top and margin-bottom values defined by a single value.
$th-headings: {
  h1: (30px 36px 20px),
}

// margin-top and margin-bottom values defined by seperate values.
$th-headings: {
  h1: (30px 36px (20px 40px)),
}
{% endhighlight %}

Multiple heading lists are seperated by a comma within a map key:

{% highlight sass %}
$th-headings: {
  h1: (10px 20px 30px, 20px 30px 40px 768px)
}
{% endhighlight %}

Multiple heading map keys are seperated by a comma:

{% highlight sass %}
$th-headings: {
  h1: (30px 36px 20px, 38px 42px 30px 768px),
  h2: (24px 30px 20px, 28px 34px 30px 768px),
  h3: (16px 24px 20px)
}
{% endhighlight %}

Heading values can be defined as a default with the `default` keyword:

{% highlight sass %}
// Define default heading values.
$th-property-defaults: (
  font-size: 16px,
  line-height: 24px,
  margin-top: 20px,
  margin-bottom: 20px
);

// Define a heading with a line height default.
// This is the same as writing:
// $th-headings: ( 
//   h3: (16px 24px 20px)
// );
$th-headings: {
  h3: (16px default 20px),
}
{% endhighlight %}