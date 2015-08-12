---
weight: 2
name: 'th-with-breakpoint'
description: 'Use a breakpoint for a section of code.'
since: '0.0.12'
group: 'Core'
access: 'Public'
params: [
  breakpoint: [
    type: 'Number',
    description: 'A heading list breakpoint (required).',
    default: false,
    options: false,
    required: false
  ]
]
---
Output a heading with a 768px breakpoint:

{% highlight sass %}
@include th-with-breakpoint(768px) {
    @include th-heading(h1);
}
{% endhighlight %}