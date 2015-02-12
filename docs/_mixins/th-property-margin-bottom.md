---
weight: 4
name: 'th-property-margin-bottom'
description: 'Output heading margin bottom styles.'
since: '0.0.10'
group: 'Property'
access: 'Public'
params: [
  heading: [
    type: 'String',
    description: 'A heading map key.',
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
  ]
]
---
Output h1 margin bottom styles:

{% highlight sass %}
@include th-property-margin-bottom(h1)
{% endhighlight %}

Output h1 margin bottom styles with 768px breakpoint:

{% highlight sass %}
@include th-property-margin-bottom(
  $heading: h1,
  $breakpoint: 768px
)
{% endhighlight %}