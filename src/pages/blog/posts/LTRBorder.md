---
layout: ../../../layouts/BlogPostLayout.astro
title: Aligning LTR element border in RTL layout
description: How to make an LTR element border align in an RTL layout!
url: ltr-border
date: 2023-9-11
---

When making a website that supports both LTR and RTL languages, you may encounter a problem where the border of an LTR element is not aligned with the RTL layout. This is because the border is drawn from the left side of the element, and not from the right side.

A fitting example of this is the `code` element in the documents, because in most cases you can't translate the context inside the `code` element to the RTL language, so it will need to follow LTR direction. For example:

```html
<p>Here is how to assign a read-only value: <code>const x = 5;</code></p>
```

Note: You can use a function to look up the relevant context for the paragraph and swap it, but I am not going to delve into this, because this is not the point of this article, neither will I delve into how to set up RTL layout, I will assume you already have it. So for the sake of the argument assume that the content of the paragraphed is swapped into RTL, but the content of the `code` element is not, like how it's mostly done normally.

##
