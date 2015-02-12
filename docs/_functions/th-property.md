---
weight: 1
name: 'th-property'
description: 'Return heading list property value.'
since: '0.0.10'
group: 'Property'
access: 'Public'
return: [
  type: 'Number',
  description: 'Heading property value.'
]
params: [
  heading: [
    type: 'String',
    description: 'A heading map key.',
    default: false,
    options: false,
    required: true
  ],
  property-name: [
    type: 'String',
    description: 'A heading property name.',
    default: false,
    options: font-size | line-height | margin-top | margin-bottom | breakpoint,
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
Return font size from a h1 heading map:

{% highlight sass %}
th-property(
  $heading: h1,
  $property-name: font-size
)
{% endhighlight %}

Return font size from a h1 heading map with a breakpoint of 768px:

{% highlight sass %}
th-property(
  $heading: h1,
  $property-name: font-size,
  $breakpoint: 768px
)
{% endhighlight %}

Return font size from a h1 heading map without unit conversion:

{% highlight sass %}
th-property(
  $heading: h1,
  $property-name: font-size,
  $convert: false
)
{% endhighlight %}

Return font size from a h1 with a base font size of 24px:

{% highlight sass %}
th-property(
  $heading: h1,
  $property-name: font-size,
  $base-font-size: 24px
)
{% endhighlight %}