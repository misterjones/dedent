# `dedent`

Removes code-formatting indentation from multiline template literals.

## Description

Multiline template string literals are great! — Until they're not.

While it is nice not having to concatenate multiple strings ending in "`\n`"
together in order to create multiline blocks of text, it is annoying that
string literals drag along their excess code-indentation baggage wherever they
go.

For example:

```js
(function outputOverIndentedText() {
  const culprit = 'code indentation'

  console.log(`
    This block
      of text
        contains the
    ${culprit}.
  `)
}())
```

Outputs:

```txt
    This block
      of text
        contains the
    code indentation.
```

Note the wide margin created from the indentation of the code-formatting being
embedded into the string literal.

A "dedent" function — such as this one — solves this by removing the indentation
caused by code-formatting, and returns a block of text with what is assumed to
be the intended level of indentation.

> The idea is to determine which line has the smallest indent and to remove that
> indent from all lines. Additionally, leading and trailing whitespace is
> trimmed.

- Dr. Axel Rauschmayer, [_Handling whitespace in ES6 template literals_](http://2ality.com/2016/05/template-literal-whitespace.html)

## Usage

`dedent` can be called as a [tag function](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals#Tagged_templates):

```js
import textBlock from './dedent.js'

(function outputCorrectlyIndentedText() {
  const culprit = 'code indentation'

  console.log(textBlock`
    This block
      of text
        does not contain the
    ${culprit}.
  `)
}())
```

Output:

```txt
This block
  of text
    does not contain the
code indentation.
```

Or `dedent` can be called as a "standard" function:

```js
import textBlock from './dedent.js'

(function outputDedentedHtml() {
  console.log(textBlock(`
    <pre>
      Why am I logging HTML
        to the console?
    </pre>
  `))

  const url = 'https://example.com/'
  const hyperlink = `
    <a href="${url}">
      Click Me.
    </a>
  `
  console.log(textBlock(hyperlink))
}())
```

Output:

```txt
<pre>
  Why am I logging HTML
    to the console?
</pre>
<a href="https://example.com/">
  Click Me.
</a>
```

## Discussions

- [_Handling whitespace in ES6 template literals_](http://2ality.com/2016/05/template-literal-whitespace.html)
  | Dr. Axel Rauschmayer, 2ality
- [_Multiline template strings that don't break indentation_](https://esdiscuss.org/topic/multiline-template-strings-that-don-t-break-indentation)
  | ECMAScript Discussion Archives
