---
weight: 1
name: 'th-heading'
description: 'Return a heading list.'
since: '0.0.10'
group: 'Heading'
access: 'Public'
return: [
  type: 'List',
  description: 'A heading list'
]
params: [
  heading: [
    type: 'List | String',
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
  ]
]
---
Return a heading list:

{% highlight sass %}
// h1: (10px 20px (30px 40px), 50px 60px (70px 80px) 768px)
th-heading(h1)
// 10px 20px (30px 40px)
{% endhighlight %}

Return a heading list with breakpoint:

{% highlight sass %}
// h1: (10px 20px (30px 40px), 50px 60px (70px 80px) 768px)
th-heading(h1, 768px)
// 50px 60px (70px 80px) 768px
{% endhighlight %}