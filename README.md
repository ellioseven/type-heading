[![Gem Version](https://badge.fury.io/rb/type-heading.svg)](http://badge.fury.io/rb/type-heading)

# Type Heading

Type Heading is a lightweight Compass Extension that lets you easily manage
responsive typographic sizing.

```sass
// Define Headings
$th-headings: (
  h1: (32px 36px, 36px 42px default 768px),
  h2: (28px 32px, 30px 34px default 768px),
  h3: (24px 30px)
);

// Output Headings
h1 { @include th-headings(h1); }

// h1 {
//   margin-top: 20px;
//   margin-bottom: 20px;
//   font-size: 32px;
//   line-height: 36px;
// }
// 
// @media (min-width: 768px) {
//   h1 {
//     margin-top: 20px;
//     margin-bottom: 20px;
//     font-size: 36px;
//     line-height: 42px;
//   }
// }

// Return properties
$font-size-tablet: th-property(font-size, h1, 768px);
// 36px

// Output properties
.my-component { @include th-property(font-size, h1); }

// .my-component {
//   font-size: 32px
// }

// Unit Conversion
$th-property-units: (
  font-size: percent,
  line-height: rel,
  margin-top: em,
  margin-bottom: em
);

h3 { @include th-headings(h3); }

// h3 {
//   margin-top: 0.83333em;
//   margin-bottom: 0.83333em;
//   font-size: 150%;
//   line-height: 1.25;
// }

// Advanced:
// Using contextual properties:

h1 {
  @include th-heading-context(h1) {
    $heading: th-core-context-get(heading);
    font-size: th-property(font-size, $heading);
  }
}

// h1 {
//  font-size: 32px;
//  font-size: 36px
```

## Libsass Compatible

Ruby is fucking slow as fuck and I hate it. Type heading is 100% (or will try to
be) compatible with Libsass.

## Organised & Maintainable

Reference or change any heading size throughout your stylesheets from a single
variable. Now you don't have to try and remember what the font size of your h3 is!

## Responsive Typography Made Easy

Headings are structured by breakpoint, giving you the power to quickly find the
right heading size for the right media query.

## Simple Unit Conversion

Working with relative units can be tricky. Fortunately Type Heading can convert
px values into relative units, so you can stay you away from any tricky math.

## License

Type Heading uses the [MIT license](http://en.wikipedia.org/wiki/MIT_License)
and always will.

## Contributing

You can make Type Heading better! If you find a bug, please [create an
issue](https://github.com/ellioseven/type-heading/issues) or
[provide a pull request](https://github.com/ellioseven/type-heading/pulls).