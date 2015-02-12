---
layout: page
title: A Better Way to Manage Responsive Typography
permalink: /
---
Type Heading is a lightweight Compass Extension that lets you easily manage responsive typographic sizing:

<div class="highlight-group">
{% highlight sass %}
// Let's define some of our headings
$th-headings: (
  h1: (36px 42px 20px, 42px 48px 30px 768px),
  h2: (24px 32px 20px, 32px 38px 30px 768px),
  h3: (18px 24px 20px)
);

// Then output the styles for our headings
h1 { @include th-headings(h1); }
h2 { @include th-headings(h2); }
h3 { @include th-headings(h3); }
{% endhighlight %}

{% highlight css %}
// We get our heading's CSS Output
h1 {
  font-size: 36px;
  line-height: 42px;
  margin-top: 20px;
  margin-bottom: 20px;
}
h2 {
  font-size: 24px;
  line-height: 32px;
  margin-top: 20px;
  margin-bottom: 20px;
}
h3 {
  font-size: 18px;
  line-height: 24px;
  margin-top: 20px;
  margin-bottom: 20px;
}
@media (min-width: 768px) {
  h1 {
    font-size: 36px;
    line-height: 42px;
    margin-top: 30px;
    margin-bottom: 30px;
  }
  h2 {
    font-size: 32px;
    line-height: 38px;
    margin-top: 30px;
    margin-bottom: 30px;
  }
}
{% endhighlight %}
</div>

---

## Organised & Maintainable

Reference or change any heading size throughout your stylesheets from a single
variable. Now you don't have to try and remember what the font size of your h3 is!

## Reponsive Typography Made Easy

Headings are stuctured by breakpoint, giving you the power to quickly find the
right heading size for the right media query.

## Simple Unit Conversion

Working with relative units can be tricky. Fortunately Type Heading can convert
px values into relative units, so you can stay you away from any tricky math.

---

## License

Type Heading uses the [MIT](http://en.wikipedia.org/wiki/MIT_License) license and
always will.

---

## Contributing

You can make Type Heading better! If you find a bug, please [create an issue](https://github.com/ellioseven/type-heading/issues)
or provide a [pull request](https://github.com/ellioseven/type-heading/pulls).