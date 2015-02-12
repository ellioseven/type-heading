---
weight: 4
name: 'th-property-margin-top'
description: 'Return heading margin top value.'
since: '0.0.10'
group: 'Property'
access: 'Public'
return: [
  type: 'Number',
  description: 'The heading margin top value.'
]
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
  convert: [
    type: 'Boolean',
    description: 'If returned value should be unit converted.',
    default: 'true',
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
Return margin top from a h1 heading map:

{% highlight sass %}
th-property-margin-top(h1)
{% endhighlight %}

Return margin top from a h1 heading map with a breakpoint of 768px:

{% highlight sass %}
th-property-margin-top(
  $heading: h1,
  $breakpoint: 768px
)
{% endhighlight %}

Return margin top from a h1 heading map without unit conversion:

{% highlight sass %}
th-property-margin-top(
  $heading: h1,
  $convert: false
)
{% endhighlight %}

Return margin top from a h1 with a base font size of 24px:

{% highlight sass %}
th-property-margin-top(
  $heading: h1,
  $base-font-size: 24px
)
{% endhighlight %}