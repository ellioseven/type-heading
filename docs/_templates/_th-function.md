---
weight: 1
name: 'th-function'
description: 'Returns a powered number by exponent.'
since: '0.0.11'
group: 'Heading'
access: 'Public'
return: [
  type: 'Number',
  description: 'The powered number.'
]
params: [
  number: [
    type: 'Number',
    description: 'A description of th-math-power',
    default: '10px',
    options: '1, 2, 3, 4',
    required: true
  ],
  exponent: [
    type: 'Number',
    description: 'A description of th-math-power',
    default: false,
    options: false,
    required: true
  ],
]
---
The trimmed-down version contains a 'more' tag at the end which by default is the […] or "hellip" symbol. A user-supplied excerpt is NOT by default given such a symbol. To add it, you must either modify the raw.

With heading map key:

{% highlight sass %}
// Set heading property values
$th-headings: ( h1: (36px 42px 20px, 42px 48px 20px 768px) );

// Output: 36px 42px 20px
@debug th-heading-get(h1);
{% endhighlight %}

An auto-generated excerpt will also have all shortcodes and tags removed. It is trimmed down to a word-boundary and the default length is 55 words.

With heading map key and heading list breakpoint:

{% highlight sass %}
// Set heading property values
$th-headings: ( h1: (36px 42px 20px, 42px 48px 20px 768px) );

// Output: 42px 48px 20px 768px
@debug th-heading-get(h1, 768px); 
{% endhighlight %}