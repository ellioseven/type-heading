# breakpoint

## th-breakpoint

### Since

0.0.10

### Source

```scss
@mixin th-breakpoint($query, $breakpoint) { 
  @if variable-exists('breakpoint') and mixin-exists('breakpoint') {
    @include breakpoint($query) {
      @include th-breakpoint-context($breakpoint) {
        @content;
      }
    }
  } @else {
    @warn 'th-breakpoint requires the breakpoint-sass module - https://github.com/at-import/breakpoint';
  }
}
```

### Description

Output styles with a breakpoint context and a media query. Requires the
Breakpoint gem (https://github.com/at-import/breakpoint).

### Parameters

| Name       | Description                                                                              | Type   | Default Value |
| ---------- | ---------------------------------------------------------------------------------------- | ------ | ------------- |
| query      | Media query to parse (https://github.com/at-import/breakpoint/wiki/Basic-Media-Queries). | list   |               |
| breakpoint | A heading list breakpoint.                                                               | number |               |

### Content

This mixin allows extra content to be passed (through the `@content` directive).

### Output

Styles to output within the breakpoint.

### Example

Output a heading with a 768px breakpoint within a 768px min-width media query.

```scss
@include th-breakpoint(min-width 768px, 768px) {
  $heading: th-core-context-get(heading);
  @include th-heading($heading);
}
```

### Throws

* th-breakpoint() requires the Breakpoint gem - https://github.com/at-import/breakpoint

### Requires

* [mixin] `th-breakpoint-context` 

### Since

0.0.10

---

## th-breakpoint-context

### Since

0.0.15

### Source

```scss
@mixin th-breakpoint-context($breakpoint) { 
  @include th-core-context-set(breakpoint, $breakpoint) {
    @content;
  }
}
```

### Description

Output content with breakpoint context.

### Parameters

| Name       | Description                | Type   | Default Value |
| ---------- | -------------------------- | ------ | ------------- |
| breakpoint | A heading list breakpoint. | number |               |

### Content

This mixin allows extra content to be passed (through the `@content` directive).

Role: [Output with breakpoint context]

### Example

Output a heading with a 768px breakpoint context.

```scss
@include th-breakpoint(768px) {
  $heading: th-core-context-get(heading);
  @include th-heading($heading);
}
```

### Requires

* [mixin] `th-core-context-set` 

### Used By

* [mixin] `th-breakpoint`

### Since

0.0.15

---