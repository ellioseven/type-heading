---
weight: 1
name: 'th-breakpoint'
description: 'Output styles with a breakpoint within a media query.'
since: '0.0.10'
group: 'Breakpoint'
access: 'Public'
params: [
  query: [
    type: 'List',
    description: 'The media query to parse. See https://github.com/at-import/breakpoint/wiki/Basic-Media-Queries',
    default: false,
    options: false,
    required: true
  ],
  breakpoint: [
    type: 'Number',
    description: 'A heading list breakpoint.',
    default: false,
    options: false,
    required: true
  ]
]
---
**This feature requires the [Breakpoint gem](https://github.com/at-import/breakpoint)**

Please [read through the wiki](https://github.com/at-import/breakpoint/wiki) to learn more about the Breakpoint gem and
what you can do with the `$query` parameter.

Output a heading with a 768px breakpoint within a 768px min-width media query.

{% highlight sass %}
@include th-breakpoint(min-width 768px, 768px) {
  @include th-heading(h1);
}
{% endhighlight %}

Output styles for a heading with a 768px breakpoint within a 768px max-width media query:

{% highlight sass %}
@include th-breakpoint(max-width 768px, 768px) {
  @include th-heading(h2);
}
{% endhighlight %}

Output styles for a heading with a 768px breakpoint within a range media query range from 768px to 1023px:

{% highlight sass %}
@include th-breakpoint(768px 1023px, 768px) {
  @include th-heading(h2); 
}
{% endhighlight %}