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