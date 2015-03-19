---
layout: page
title: User Guide
permalink: /user-guide/
menu: true
---
<div class="toc" data-targets="[h1, h2, h3]"></div>
## Requirements

To use Type Heading, you will need:

- Ruby: 2.1.5
- Sass 3.3.13
- Compass 1.0.1

---

## Installation

To install Type Heading and start using it your Sass, you will need to:

1. Source the extension
2. Import the extension into your Sass
3. Define your own heading settings in your Sass

### Source

Type Heading is a compass extension that can be sourced multiple ways.

#### Gem

{% highlight bash %}
$ gem install type-heading
{% endhighlight %}

#### Bundler

{% highlight ruby %}
# Gemfile
gem 'sass', '~> 3.4.7'
gem 'compass', '~> 1.0.1'
gem 'type-heading', '~> 0.0.7'
{% endhighlight %}

{% highlight ruby %}
# config.rb
require 'type-heading'
{% endhighlight %}

{% highlight bash %}
$ bundle install
{% endhighlight %}

#### Bower

{% highlight bash %}
$ bower install type-heading
{% endhighlight %}

#### Grunt

To use type-heading with Grunt, you must first install the gem locally or with
bundler and include it in your `Gruntfile.js`

{% highlight js %}
// Gruntfile.js
compass: {
  options: {
    require: 'type-heading',
    ...
  }
  }
}
{% endhighlight %}

#### Compass

{% highlight bash %}
$ compass create --using type-heading <project_name>
{% endhighlight %}

### Import

Once you have sourced Type Heading, you will need to import it into your Sass.

{% highlight sass %}
@import "type-heading"
{% endhighlight %}

---

## Configure Type Heading

The first step is to start configuring a few Type Heading variables:

1. Headings
2. Property defaults (Optional)
3. Property units (Optional)
4. Base font size (Optional: Should only be used for relative unit calculations)

### Configure Headings

Headings are defined within a single map like so:

{% highlight sass %}
$th-headings: {
  h1: (30px 36px 20px, 38px 42px 30px 768px),
  h2: (24px 30px 20px, 28px 34px 30px 768px),
  h3: (16px 24px 20px)
}
{% endhighlight %}

Each heading contains one or more lists of values, seperated by a comma.

Within each list, values are defined in order:

1. font-size
2. line-height
3. margin-top / margin-bottom
4. breakpoint

#### Margin Values

Heading margin top and bottom values are special. They can be defined together
or a single value:

{% highlight sass %}
// margin-top and margin-bottom values defined by a single value.
$th-headings: {
  h1: (30px 36px 20px),
}

// margin-top and margin-bottom values defined by seperate values.
$th-headings: {
  h1: (30px 36px (20px 40px)),
}
{% endhighlight %}

#### Default Values

Values can be defined as a default with the `default` keyword:

{% highlight sass %}
// Define a heading with a line height default.
$th-headings: {
  h3: (16px default 20px),
}
{% endhighlight %}

### Configure Property Defaults (Optional)

Used to store the default values for heading properties that are either not
defined or are set by the `default` keyword.

They are stored within a single map like so:

{% highlight sass %}
// Define default heading values.
$th-property-defaults: (
  font-size: 16px,
  line-height: 24px,
  margin-top: 20px,
  margin-bottom: 20px
);
{% endhighlight %}

### Configure Property Units (Optional)

Heading values can be converted to different units, like so:

{% highlight sass %}
$th-headings: (
  h1: (36px 42px 30px 20px)
);

$th-property-units: (
  font-size: em,
  line-height: rel,
  margin-top: rem,
  margin-bottom: false
);

h1 {
  @include th-heading(h1);
}
{% endhighlight %}

{% highlight css %}
h1 {
  font-size: 2.25em;
  line-height: 2.625;
  margin-top: 1.875rem;
  margin-bottom: 20px;
}
{% endhighlight %}

The following units are available:

* em (eg: 1.5em)
* rem (eg: 1.5rem)
* rel (eg: 1.5)

The value will be converted depending on the property and the unit set in 
`$th-property-units`.

Each property unit is defined in a single map like so:

{% highlight sass %}
// Define property units.
$th-property-units: (
  font-size: em,
  line-height: rel,
  margin-top: rem,
  margin-bottom: px
);
{% endhighlight %}

You can disable unit conversion for a property by setting it false:

{% highlight sass %}
// Disable unit conversion for line-height.
$th-property-units: (
  font-size: em,
  line-height: false,
  margin-top: em,
  margin-bottom: em
);
{% endhighlight %}

### Configure Base Font Size (Optional)

Used for calculating relative calculations such as em. The default font size is
based on the browser default of 16px. If you want your base font size to be different,
simply define `$th-base-font-size` with a px value, like so:

{% highlight sass %}
$th-base-font-size: 18px;
{% endhighlight %}

---

## Output a Heading

To output the styles for a heading list, use `th-heading()` like so:

{% highlight sass %}
// Output default h1 list styles
@include th-heading(h1)
{% endhighlight %}

Which will output something similar to:

{% highlight css %}
h1 {
  font-size: 36px;
  line-height: 42px;
  margin-top: 20px;
  margin-bottom: 20px;
}
{% endhighlight %}

This will only output the styles for a particular heading list, not for every
heading list assigned to the map key. To output all heading lists assigned to a
particular map key, use the `th-headings` mixin.

### Heading Breakpoints

You can output a heading with a particular breakpoint (this won't output a media query):

{% highlight sass %}
@include th-heading(
  $heading: h1,
  $breakpoint: 768px
)
{% endhighlight %}

**Note:** You will need to install the [Breakpoint](https://github.com/at-import/breakpoint) gem for `th-headings()` to work.
You can learn more about the gem [the wiki](https://github.com/at-import/breakpoint/wiki).

You can output styles for a heading across all breakpoints, use `th-headings()`
like so (this will output media queries):

{% highlight sass %}
@include th-headings(h1)
{% endhighlight %}

This will output styles similar to:

{% highlight css %}
// th-headings() output
h1 {
  font-size: 36px;
  line-height: 42px;
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
}
{% endhighlight %}

### Disable Heading Unit Conversion

You can prevent units from being converted by passing the `$convert` parameter
as false:

{% highlight sass %}
// Output h1 with no unit conversion
@include th-heading(
  $heading: h1,
  $convert: false
)
{% endhighlight %}

### Relative Heading Calculations

For relative unit calculations, if the font size context is not equal to
`$th-base-font-size` (such as a span inside an h1), you can specify the font size
context used:

{% highlight sass %}
// Output h1 line height with a font size context of 24px
@include th-heading(
  $heading: h1,
  $base-font-size: 24px
)
{% endhighlight %}

### Output Certain Heading Properties

You can choose to only output certain properties of a heading:

{% highlight sass %}
// Output h1 styles but only include font-size and line-height
@include th-heading(
  $heading: h1,
  $include: (font-size line-height)
)
{% endhighlight %}

You may include any of the following properties:

* `font-size`
* `line-height`
* `margin-top`
* `margin-bottom`

---

## Output a Property

You can output a heading value with a series of different mixins:

* `th-property-font-size()`
* `th-property-line-height()`
* `th-property-margin-top()`
* `th-property-margin-bottom()`

Each mixin will return its respective property, like so:

{% highlight sass %}
// Output h1 font size
@include th-property-font-size(h1);
{% endhighlight %}

Which will output something similar to:

{% highlight css %}
// th-property-font-size output
font-size: 32px;
{% endhighlight %}

### Property Breakpoints

You can output the property for a heading with a breakpoint:

{% highlight sass %}
// Output h1 font size with 768px breakpoint font size
@include th-property-font-size(
  $heading: h1,
  $breakpoint: 768px
);
{% endhighlight %}

### Disable Property Unit Conversion

You can prevent units from being converted by passing the `$convert` parameter
as false:

{% highlight sass %}
// Output h1 font size without unit conversion
@include th-property-font-size(
  $heading: h1,
  $convert: false
);
{% endhighlight %}

### Relative Property Calculations

For relative unit calculations, if the font size context is not equal to
`$th-base-font-size` (such as a span inside an h1), you can specify the font size
context used:

{% highlight sass %}
// Output h1 line height with a font size context of 24px
@include th-property-line-height(
  $heading: h1,
  $base-font-size: 24px
)
{% endhighlight %}

---

## Return a Property

You can return a heading value with a series of different functions:

* `th-property-font-size()`
* `th-property-line-height()`
* `th-property-margin-top()`
* `th-property-margin-bottom()`

Each function will return its respective property, like so:

{% highlight sass %}
// Return h1 font size
th-property-font-size(h1);
{% endhighlight %}

### Returned Property Breakpoints

You can return the property for a heading with a breakpoint:

{% highlight sass %}
// Return h1 with 768px breakpoint font size
th-property-font-size(
  $heading: h1,
  $breakpoint: 768px
);
{% endhighlight %}

### Disable Returned Property Unit Conversion

You can prevent units from being converted by passing the `$convert` parameter
as false:

{% highlight sass %}
// Return h1 font size without unit conversion
th-property-font-size(
  $heading: h1,
  $convert: false
);
{% endhighlight %}

### Relative Returned Property Calculations

For relative unit calculations, if the font size context is not equal to
`$th-base-font-size` (such as a span inside an h1), you can specify the font size
context used:

{% highlight sass %}
// Return h1 line height with a font size context of 24px
th-property-line-height(
  $heading: h1,
  $base-font-size: 24px
)
{% endhighlight %}

---

## Working With Breakpoints

Type Heading integrates with the [Breakpoint](https://github.com/at-import/breakpoint) gem.

Please [read through the wiki](https://github.com/at-import/breakpoint/wiki) to learn more about the Breakpoint gem and
what you can do with the `$query` parameter.

You can easily access and output a heading (with a breakpoint within a media query) with the `th-breakpoint` mixin, like so:

{% highlight sass %}
// Output a heading with a 768px breakpoint within a 768px min-width media query.
@include th-breakpoint($query: 768px, $breakpoint: 768px) {
  @include th-heading(h1);
}
{% endhighlight %}

You can also access a headings properties without outputting a media query with the `th-with-breakpoint` mixin:

{% highlight sass %}
// Return font-size and line-height for a heading with a 768px breakpoint.
@include th-with-breakpoint(768px) {
  $font-size: th-property-font-size(h2);
  $line-height: th-property-line-height(h2);
}
{% endhighlight %}