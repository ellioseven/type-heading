---
weight: 1
name: 'th-heading'
description: 'Output styles for a heading list.'
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
  breakpoint: [
    type: 'Number',
    description: 'A heading list breakpoint.',
    default: false,
    options: false,
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
Output h1 styles:

{% highlight sass %}
@include th-property-font-size(
  $heading: h1,
  $breakpoint: false
)
{% endhighlight %}

Output h1 styles with 768px breakpoint:

{% highlight sass %}
@include th-heading(
  $heading: h1,
  $breakpoint: 768px
)
{% endhighlight %}

Output h1 styles with a base font size of 48px:

{% highlight sass %}
@include th-heading(
  $heading: h1,
  $base-font-size: 48px
)
{% endhighlight %}

Output h1 styles but only include font-size and line-height:

{% highlight sass %}
th-heading(
    $heading: h1,
    $include: (font-size line-height)
)
{% endhighlight %}