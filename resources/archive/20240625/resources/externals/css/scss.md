# installation

```sh
npm i -D sass
```


# Preprocessing

```sh
sass src:.                 # build
sass --no-source-map src:. # build without sourcemap
sass -w src:.              # watch mode for dev.
```

# Variables

```scss
$font-stack: Helvetica, sans-serif;
$primary-color: #333;

body {
    font: 100% $font-stack;
    color: $primary-color;
}
```

## Types

https://sass-lang.com/documentation/values/calculations/

 - Numbers
 - Strings
 - Colors
 - Booleans
 - Nulls
 - Lists
 - Maps

## `#{}`

코드의 어디든지 변수 값을 넣을 수 있음

```scss
$family: unquote("Droid+Sans");
@import url("http://fonts.googleapis.com/css?family=#{$family}");

@import url("http://fonts.googleapis.com/css?family=Droid+Sans");
```

Sass의 내장 함수 `unquote()`는 문자에서 따옴표를 제거합니다.

## Builtins

https://sass-lang.com/documentation/modules/

 - sass:color
 - sass:list
 - sass:map
 - sass:math
 - sass:meta
 - sass:selector
 - sass:string

# nesting

```scss
nav {
    ul {
        margin: 0;
        padding: 0;
        list-style: none;
    }

    li {
        display: inline-block;
    }

    a {
        display: block;
        padding: 6px 12px;
        text-decoration: none;
    }
}
```

# Partials - Modules

## Partials scss

A partials is a scss file named with a leading underscore.

 - `_partial.scss`


## Modules `@use`

 - `_base.scss`

```scss
$font-stack: Helvetica, sans-serif;
$primary-color: #333;

body {
    font: 100% $font-stack;
    color: $primary-color;
}
```

 - `style.scss`
```scss
@use 'base';

.inverse {
    background-color: base.$primary-color;
    color: white;
}
```

# Mixins

```scss
// define mixin
@mixin theme($theme: gray) {
    background: $theme;
    box-shadow: 0 0 1px rgba($theme, .25);
    color: $fff;
}

// invoke mixin
.info {
    @include theme;
}


.alert {
    @include theme($theme: red);
}

.success {
    @include theme($theme: green);
}
```

# Extend

```scss
%message-shared {
    border: 1px solid #ccc;
    padding: 10px;
    color: #333;
}


// never extended, so it won't print
%equal-heights {
    display: flex;
    flex-wrap: wrap;
}

.message {
    @extend %message_shared
}

.success {
    @extend %message_shared;
    border-color: green;
}

.error {
    @extend %message-shared;
    border-color:red;
}

.warning {
    @extend %message-shared;
    border-color:yellow;
}
```

# Operators

 - `==` / `!=`
 - `+` / `-` / `*` / `/` / `%`
 - `<` / `<=` / `>` / `>=`
 - `and` / `or` / `not`

```scss
width: 150px - 20px;
width: calc(100% - 10rem);
width: 100% - 10rem; // ERROR
```

# Flow Control

# if-else
 - @if
 - @else if
 - @else

```scss
$light-background: #f2ece4;
$light-text: #036;
$dark-background: #6b717f;
$dark-text: #d2e1dd;

@mixin theme-colors($light-theme: true) {
    @if $light-theme {
        background-color: $light-background;
        color: $light-text;
    } @else {
        background-color: $dark-background;
        color: $dark-text;
    }
}
```

```scss
@use "sass:math";

@mixin triangle($size, $color, $direction) {
  height: 0;
  width: 0;

  border-color: transparent;
  border-style: solid;
  border-width: math.div($size, 2);

  @if $direction == up {
    border-bottom-color: $color;
  } @else if $direction == right {
    border-left-color: $color;
  } @else if $direction == down {
    border-top-color: $color;
  } @else if $direction == left {
    border-right-color: $color;
  } @else {
    @error "Unknown direction #{$direction}.";
  }
}

.next {
  @include triangle(5px, black, right);
}
```