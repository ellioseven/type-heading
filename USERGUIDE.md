# User Guide

## Requirements

To use Type Heading, you will need at least:

-  [node-sass](https://github.com/sass/node-sass) v4+

## Installation

### Require NPM Package

Type Heading is an `npm` module, install it via `yarn`:

```
yarn add type-heading --dev
```

### Import into Your Stylesheet

Import it into your Sass stylesheets:

```
// style.scss
@import “type-heading”
```

## Configuration

The first step is to start configuring a few Type Heading variables:

1. Headings
2. Property defaults (Optional)
3. Property units (Optional)
4. Base font size (Optional: Should only be used for relative unit calculations)

### Headings

Headings are defined within a single map like so:

```
$th-headings: {
  h1: (30px 36px 20px, 38px 42px 30px 768px),
  h2: (24px 30px 20px, 28px 34px 30px 768px),
  h3: (16px 24px 20px)
}
```

Each heading contains one or more lists of values, seperated by a comma.

Within each list, values are defined in order:

1. `font-size`
2. `line-height`
3. `margin-top` / `margin-bottom`
4. `breakpoint`

### Margins

Heading margin top and bottom values are special. They can be defined
together or a single value:

```
// margin-top and margin-bottom values defined by a single value.
$th-headings: {
  h1: (30px 36px 20px)
}

// margin-top and margin-bottom values defined by seperate values.
$th-headings: {
  h1: (30px 36px (20px 40px))
}
```

### Default Values

Values can be defined as a default with the `default` keyword:

```
// Define a heading with a line height default.
$th-headings: {
  h3: (16px default 20px)
}
```

### Property Defaults (Optional)

Used to store the default values for heading properties that are either
not defined or are set by the `default` keyword.

They are stored within a single map like so:

```
// Define default heading values.
$th-property-defaults: (
   font-size: 16px,
   line-height: 24px,
   margin-top: 20px,
   margin-bottom: 20px
);
```

### Property Units (Optional)

Heading values can be converted to different units, like so:

```
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
```

Which compiles to:

```
h1 {
  font-size: 2.25em;
  line-height: 2.625;
  margin-top: 1.875rem;
  margin-bottom: 20px;
}
```

The following units are available:

-  `em` (eg: 1.5em)
-  `rem` (eg: 1.5rem)
-  `rel` (eg: 1.5)

The value will be converted depending on the property and the unit set
in$th-property-units``.

Each property unit is defined in a single map like so:

```
// Define property units.
$th-property-units: (
  font-size: em,
  line-height: rel,
  margin-top: rem,
  margin-bottom: px
);
```

You can disable unit conversion for a property by setting it false:

```
// Disable unit conversion for line-height.
$th-property-units: (
  font-size: em,
  line-height: false,
  margin-top: em,
  margin-bottom: em
);
```

### Base Font Size (Optional)

Used for calculating relative calculations such as em. The default font size is
based on the browser default of 16px. If you want your base font size to be
different, simply define `$th-base-font-size` with a px value, like so:

```
$th-base-font-size: 18px;
```

## Working With Headings
---------------------

To output the styles for a heading list, use `th-heading()` like so:

```
// Output default h1 list styles
@include th-heading(h1)
```

Which will output something similar to:

```
h1 {
  font-size: 36px;
  line-height: 42px;
  margin-top: 20px;
  margin-bottom: 20px;
}
```

This will only output the styles for a particular heading list, not for every
heading list assigned to the map key. To output all heading lists assigned to a
particular map key, use the `th-headings()` mixin.

### Breakpoints

You can output a heading with a particular breakpoint (this won’t output
a media query):

```
@include th-heading(
  $heading: h1,
  $breakpoint: 768px
)
```

You can output styles for a heading across all breakpoints, use
`th-headings()` like so (this will output media queries):

**Note:** You will need to install the [breakpoint-sass](https://github.com/at-import/breakpoint)
module for `th-headings()` to work.


```
@include th-headings(h1)
```

This will output styles similar to:

```
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
```

### Disable Heading Unit Conversion

You can prevent units from being converted by passing the `$convert`
parameter as false:

```
// Output h1 with no unit conversion
@include th-heading($heading: h1, $convert: false)
```

### Relative Heading Calculations

For relative unit calculations, if the font size context is not equal to
`$th-base-font-size` (such as a span inside an h1), you can specify the font
size context used:

```
// Output h1 line height with a font size context of 24px
@include th-heading($heading: h1, $base-font-size: 24px)
```

### Output Only Certain Heading Properties

You can choose to only output certain properties of a heading:

```
// Output h1 styles but only include font-size and line-height
@include th-heading(
  $heading: h1,
  $include: (font-size line-height)
)
```

You may include any of the following properties:

-  `font-size`
-  `line-height`
-  `margin-top`
-  `margin-bottom`

### Looping Over a Heading's Breakpoints

You find yourself in a situation where you wish loop over a heading's breakpoints
with access it's contextual properties.

This is particularly usefully when calculating arbitrary relative units:

```
@include th-heading-context(
  $heading: h2,
  $breakpoint-output: true
){
  $heading: th-core-context-get(heading);
  $font-size: th-property(font-size, $heading);
  margin-top: em-calc(20px, $font-size);
  margin-bottom: em-calc(10px, $font-size);
}
```

This will output something similar to:

```
h2 {
  margin-top: 2em;
  margin-bottom: 1em;
}

@media (min-width: 768px) {
  h2 {
    margin-top: 1.5em;
    margin-bottom: .75em;
  }
}

@media (min-width: 1024px) {
  h2 {
    margin-top: 1em;
    margin-bottom: .5;
  }
}
```

## Working With Properties

You can output a heading value with:

- `th-property()`

Each mixin will return its respective property, like so:

```
// Output h1 font size
@include th-property(font-size, h1);
```

Which will output something similar to:

```
// th-property mixin output
font-size: 32px;
```

You can return a heading value with:

- `th-property()`

Each function will return its respective property, like so:

```
// Return h1 font size
th-property(font-size, h1);
```

Which will return a number:

```
// th-property function return
32px
```

### Breakpoints

You can output the property for a heading with a breakpoint:

```
// Output h1 font size with 768px breakpoint font size
@include th-property(
  $property-name: font-size,
  $heading: h1,
  $breakpoint: 768px
);
```

### Override Property Unit Conversion

You can change the default property conversion by settings the `$convert`
parameter to another unit

```
// Output h1 font size without unit conversion
@include th-property(
  $property-name: font-size,
  $heading: h1,
  $convert: px
);
```

The following units are available:

- `px`
- `em`
- `rem`
- `rel`
- `percent`

### Disable Property Unit Conversion

You can prevent units from being converted by passing the `$convert`
parameter as false:

```
// Output h1 font size without unit conversion
@include th-property(
  $property-name: font-size,
  $heading: h1,
  $convert: false
);
```

Relative Property Calculations

For relative unit calculations, if the font size context is not equal to
`$th-base-font-size` (such as a span inside an h1), you can specify the font
size context used:

```
// Output h1 line height with a font size context of 24px
@include th-property(
  $property-name: line-height,
  $heading: h1,
  $base-font-size: 24px
);
```
