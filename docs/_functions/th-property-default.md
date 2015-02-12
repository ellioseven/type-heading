---
weight: 6
name: 'th-property-default'
description: 'Return default property value.'
since: '0.0.10'
group: 'Property'
access: 'Public'
return: [
  type: 'Number',
  description: 'The default property value.'
]
params: [
  property-name: [
    type: 'String',
    description: 'A heading property name.',
    default: false,
    options: font-size | line-height | margin-top | margin-bottom,
    required: true
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
Get default font size:

{% highlight sass %}
th-property-default(font-size)
{% endhighlight %}