# heading

## th-heading

### Since

0.0.10

### Source

```scss
@function th-heading($heading, $breakpoint: false) { 
  $breakpoint: th-core-context-get(breakpoint, $breakpoint);
  $heading: th-heading-get-map($heading);
  @if _th-heading-has-next($heading) {
    $heading: _th-heading-get-next($heading, $breakpoint);
  }
  @return $heading;
}
```

### Description

Return a heading list. The first heading list will be returned
if no breakpoint is specified.

### Parameters

| Name       | Description                | Type          | Default Value |
| ---------- | -------------------------- | ------------- | ------------- |
| heading    | A heading map key or list. | list | string |               |
| breakpoint | A heading list breakpoint. | number        | false         |

### Returns

`list` — A heading list.

### Example

Return a heading list.

```scss
th-heading(h1)
// (10px 20px (30px 40px)
```

Return a heading list with breakpoint.

```scss
th-heading(h1, 768px)
// 50px 60px (70px 80px) 768px
```

### Requires

* [function] `th-core-context-get` 

* [function] `th-heading-get-map` 

### Used By

* [function] `th-h`

* [mixin] `th-heading`

* [mixin] `th-heading-context`

* [function] `th-property`

### Since

0.0.10

---

## th-heading-get-map

### Since

0.0.10

### Source

```scss
@function th-heading-get-map($heading) { 
  @if string == type-of($heading) and map-has-key($th-headings, $heading) {
    $heading: map-get($th-headings, $heading);
  }
  @return $heading;
}
```

### Description

Return a heading map.

### Parameters

| Name    | Description        | Type   | Default Value |
| ------- | ------------------ | ------ | ------------- |
| heading | A heading map key. | string |               |

### Returns

`list` — A heading map.

### Example

Return h1 heading map.

```scss
th-heading-get-map(h1)
// 10px 20px (30px 40px), 50px 60px (70px 80px) 768px
```

### Requires

* [variable] `th-headings` 

* [variable] `th-headings` 

### Used By

* [function] `th-heading`

* [mixin] `th-heading-context`

### Since

0.0.10

---

## th-h

### Since

0.0.15

### Source

```scss
@function th-h() { 
  @return th-heading(
    $heading: $heading,
    $breakpoint: $breakpoint
  )
}
```

### Description

Alias to th-heading() function.

### Requires

* [function] `th-heading` 

### Since

0.0.15

---

## th-heading

### Since

0.0.10

### Source

```scss
@mixin th-heading($heading, $breakpoint: false, $base-font-size: $th-base-font-size, $include: false) { 
  $heading: th-heading($heading, $breakpoint);
  $font-size: th-property(
    $property-name: font-size,
    $heading: $heading,
    $base-font-size: $base-font-size,
    $convert: false
  );
  $properties: th-list-flatten($_th-core-heading-structure);
  @each $property in $properties {
    @if not $include or th-list-has($include, $property) {
      @include th-property(
        $property-name: $property,
        $heading: $heading,
        $base-font-size: th-if(font-size == $property, $base-font-size, $font-size)
      );
    }
  }
}
```

### Description

Output styles for a heading list.

### Parameters

| Name           | Description                                                                        | Type             | Default Value      |
| -------------- | ---------------------------------------------------------------------------------- | ---------------- | ------------------ |
| heading        | A heading map key.                                                                 | string           |                    |
| breakpoint     | A heading list breakpoint.                                                         | number | boolean | false              |
| base-font-size | Font size used for relative calculations.                                          | number           | $th-base-font-size |
| include        | (font-size | line-height | margin-top | margin-bottom) Restrict output properties. | list | boolean   | false              |

### Example

Output h1 styles.

```scss
th-heading(h1)
```

Output h1 styles with 768px breakpoint.

```scss
th-heading(
  $heading: h1,
  $breakpoint: 768px
)
```

Output h1 styles with a base font size of 48px.

```scss
th-heading(
  $heading: h1,
  $base-font-size: 48px
)
```

Output h1 styles but only include font-size and line-height.

```scss
th-heading(
  $heading: h1,
  $include: (font-size line-height)
)
```

### Requires

* [mixin] `th-property` 

* [function] `th-heading` 

* [function] `th-property` 

### Used By

* [mixin] `th-headings`

* [mixin] `th-h`

### Since

0.0.10

---

## th-headings

### Since

0.0.10

### Source

```scss
@mixin th-headings($heading, $base-font-size, $include: false) { 
  @include th-heading-context($heading, true) {
    $heading: th-core-context-get(heading);
    @include th-heading(
      $heading: $heading,
      $base-font-size: $base-font-size,
      $include: $include
    );
  }
}
```

### Description

Output styles for a heading across all breakpoints.

### Parameters

| Name           | Description                                                                        | Type           | Default Value |
| -------------- | ---------------------------------------------------------------------------------- | -------------- | ------------- |
| heading        | A heading map key or list.                                                         | list | string  |               |
| base-font-size | ($th-base-font-size) Font size used for relative calculations.                     | number         |               |
| include        | (font-size | line-height | margin-top | margin-bottom) Restrict output properties. | list | boolean | false         |

### Example

Output all h1 styles across all breakpoints.

```scss
@include th-headings(h1)
```

Output font-size and line-height h1 styles across all breakpoints.

```scss
th-headings(
  $heading: h1,
  $include: (font-size line-height)
)
```

### Requires

* [mixin] `th-heading-context` 

* [mixin] `th-heading` 

* [function] `th-core-context-get` 

### Used By

* [mixin] `th-hs`

### Since

0.0.10

---

## th-heading-context

### Since

0.0.15

### Source

```scss
@mixin th-heading-context($heading) { 

  $heading: th-heading-get-map($heading);
  @if _th-heading-has-next($heading) {
    @include _th-heading-context-loop($heading, $breakpoint-output) {
      @include th-core-context-set(
        heading, th-heading(
          $heading: $heading,
          $breakpoint: th-core-context-get(breakpoint)
        )
      ){
        @content;
      }
    }
  } @else {
    @include th-core-context-set(heading, $heading) {
      @content;
    }
  }
}
```

### Description

Output content with heading context.

### Parameters

| Name    | Description                | Type          | Default Value |
| ------- | -------------------------- | ------------- | ------------- |
| heading | A heading map key or list. | list | string |               |

### Content

This mixin allows extra content to be passed (through the `@content` directive).

Role: [Output with heading context]

### Example

Output a heading with a 768px breakpoint.

```scss
@include th-heading-context(h1) {
  $heading: th-core-context-get(heading);
  @include th-heading($heading);
}
```

### Requires

* [mixin] `th-core-context-set` 

* [mixin] `th-core-context-set` 

* [function] `th-heading-get-map` 

* [function] `th-heading` 

* [function] `th-core-context-get` 

### Used By

* [mixin] `th-headings`

### Since

0.0.15

---

## th-h

### Since

0.0.15

### Source

```scss
@mixin th-h() { 
  @include th-heading(
    $heading: $heading,
    $breakpoint: $breakpoint,
    $base-font-size: $base-font-size,
    $include: $include
  );
}
```

### Description

Alias to th-heading() mixin.

### Requires

* [mixin] `th-heading` 

### Since

0.0.15

---

## th-hs

### Since

0.0.15

### Source

```scss
@mixin th-hs() { 
  @include th-headings(
    $heading: $heading,
    $base-font-size: $base-font-size,
    $include: $include
  );
}
```

### Description

Alias to th-headings() mixin.

### Requires

* [mixin] `th-headings` 

### Since

0.0.15

---