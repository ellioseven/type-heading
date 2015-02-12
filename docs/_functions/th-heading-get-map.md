---
weight: 2
name: 'th-heading-get-map'
description: 'Return a heading map.'
since: '0.0.10'
group: 'Heading'
access: 'Public'
return: [
  type: 'List',
  description: 'A heading map'
]
params: [
  heading: [
    type: 'string',
    description: 'A heading map key.',
    default: false,
    options: false,
    required: true
  ]
]
---
Return h1 heading map:

{% highlight sass %}
// h1: (10px 20px (30px 40px), 50px 60px (70px 80px) 768px)
th-heading-get-map(h1)
// // // 10px 20px (30px 40px), 50px 60px (70px 80px) 768px
{% endhighlight %}