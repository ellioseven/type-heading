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
  ],
  include: [
    type: 'List',
    description: 'Include only certain properties in the mixin output.',
    default: false,
    options: 'font-size | line-height | margin-top | margin-bottom',
    required: false
  ]
]
---
**This feature requires the [Breakpoint gem](https://github.com/at-import/breakpoint)**

Output all h1 styles across all breakpoints:

{% highlight sass %}
@include th-headings(h1)
{% endhighlight %}

Output all h1 styles with max width media queries across all breakpoints:

{% highlight sass %}
@include th-headings(
  $heading: h1,
  $direction: max-width
)
{% endhighlight %}

Output font-size and line-height h1 styles across all breakpoints:

{% highlight sass %}
th-heading(
    $heading: h1,
    $include: (font-size line-height)
)
{% endhighlight %}