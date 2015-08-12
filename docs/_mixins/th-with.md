---
weight: 1
name: 'th-with'
description: 'Loop through a headings breakpoints with access to its property values as a global variable.'
since: '0.0.14'
group: 'Core'
access: 'Public'
params: [
  heading: [
    type: 'String | List',
    description: 'A heading map key or list.',
    default: false,
    options: false,
    required: true
  ],
  convert: [
    type: 'Boolean',
    description: 'If returned value should be unit converted.',
    default: 'false',
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
Loop through a headings breakpoints with access to it's property values as a global variable. $th-font-size, $th-line-height, $th-margin-top, $th-margin-bottom will become available to you within the mixin.

{% highlight sass %}
h1 {
  @include th-with(h1) {
    margin-top: $th-margin-top;
    margin-bottom: $th-margin-bottom;
    font-size: $th-font-size;
    line-height: $th-line-height;
  }
}
{% endhighlight %}