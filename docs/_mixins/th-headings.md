---
weight: 2
name: 'th-headings'
description: 'Output styles for a heading across all breakpoints.'
since: '0.0.10'
group: 'Heading'
access: 'Public'
params: [
  heading: [
    type: 'String',
    description: 'A heading map key',
    default: false,
    options: false,
    required: true
  ],
  direction: [
    type: 'String',
    description: 'Media query direction.',
    default: 'min-width',
    options: 'min-width | max-width',
    required: false
  ],
  base-font-size: [
    type: 'Number',
    description: 'Font size used for relative calculations.',
    default: '$th-base-font-size',
    options: false,
    required: false
  ]
]
---
**This feature requires the [Breakpoint gem](https://github.com/at-import/breakpoint)**

Output all h1 styles:

{% highlight sass %}
@include th-headings(h1)
{% endhighlight %}

Output all h1 styles with max width media queries:

{% highlight sass %}
@include th-headings(
  $heading: h1,
  $direction: max-width
)
{% endhighlight %}