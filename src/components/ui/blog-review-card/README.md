# Blog Review Card

This is my practice component for Responsive Blog Review Card facing changlenge of Frontend Mentor: https://www.frontendmentor.io/challenges/blog-preview-card-ckPaj01IcS

I'm truly grateful for any **feedback, comments, or bug reports** that help me improve these solutions. Thank you so much in advance! 💛

## Live demo

https://dlnthanh262.github.io/components/blog-review-card

## Screenshot

![Screenshot](images/blog-review-card/screenshot.png)

## Design system

### Colors

- Yellow: #f4d04e
- Gray 950: #111111
- Gray 500: #6b6b6b

In my index.css:

```
:root {
  --card-yellow: #f4d04e;
  --card-gray-950: #111111;
  --card-gray-500: #6b6b6b;
}
```

How I use in `blog-review-card.css`

```
@layer components {
  .card-bg-yellow {
    background-color: var(--card-yellow);
  }

  .card-text-gray-950 {
    color: var(--card-gray-950);
  }

  .card-text-gray-500 {
    color: var(--card-gray-500);
  }
}
```

**Note:** You have to put them in component layer or base layer, if not, the styles of utilities layer will overwrite when you use these variables as Tailwind class format. Forexample, `hover:text-(--card-gray-950)` will not work.

### Typography

- Font family: Figtree 400 & 800
- Weights: 400, 800

```
  .card-text-preset-1 {
    @apply text-xl;
    @apply font-extrabold;
  }

  .card-text-preset-2 {
    @apply text-sm;
    @apply font-normal;
  }

  .card-text-preset-3 {
    @apply text-xs;
    @apply font-normal;
  }

  .card-text-preset-3-bold {
    @apply text-xs;
    @apply font-extrabold;
  }
```

**Note:** This is how I usually re-use Tailwind classes to make sure lessing code to maintain.
