# Newsletter Sign Up

This is my practice component for **Responsive Newsletter Sign Up Form with Success Dialog**

I'm truly grateful for any feedback, comments, or bug reports that help me improve these solutions. Thank you so much in advance! 💛

## Figma Design

https://www.figma.com/design/uD2tAUtx9vjH4nvJLyZWsS/newsletter-sign-up-with-success-message?node-id=2073-1229&t=4A5s1ZmyyzPoIIAi-1

## Live demo

https://dlnthanh262.github.io/components/

## Screenshot

- Desktop

![Screenshot](https://raw.githubusercontent.com/dlnthanh262/components/main/public/images/newsletter-sign-up/screenshot-desktop.png)

![Screenshot](https://raw.githubusercontent.com/dlnthanh262/components/main/public/images/newsletter-sign-up/screenshot-desktop-typing.png)

![Screenshot](https://raw.githubusercontent.com/dlnthanh262/components/main/public/images/newsletter-sign-up/screenshot-desktop-error.png)

![Screenshot](https://raw.githubusercontent.com/dlnthanh262/components/main/public/images/newsletter-sign-up/screenshot-desktop-success.png)

- Tablet

![Screenshot](https://raw.githubusercontent.com/dlnthanh262/components/main/public/images/newsletter-sign-up/screenshot-tablet.png)

- Mobile

![Screenshot](https://raw.githubusercontent.com/dlnthanh262/components/main/public/images/newsletter-sign-up/screenshot-mobile.png)

## Design system

### Colors

| Name     | Value                      |
| -------- | -------------------------- |
| Red      | `#ff6155`                  |
| Blue 800 | `#242742`                  |
| Blue 700 | `#36384d`                  |
| Grey     | `#949494`                  |
| Gradient | `(90deg, #ff6a3a, #ff527b` |

In my `index.css`

```
:root {
  --newsletter-grey: #949494;
  --newsletter-blue-800: #242742;
  --newsletter-blue-700: #36384d;
  --newsletter-red: #ff6155;
  --newsletter-gradient: linear-gradient(90deg, #ff6a3a, #ff527b);
}
```

How I use in `newsletter-sign-up.css`

```
@layer components {
  .newsletter-bg-blue-800 {
    background-color: var(--newsletter-blue-800);
  }

  .newsletter-bg-blue-700 {
    background-color: var(--newsletter-blue-700);
  }

  .newsletter-text-grey {
    color: var(--newsletter-grey);
  }

  .newsletter-text-800 {
    color: var(--newsletter-blue-800);
  }

  .newsletter-text-red {
    color: var(--newsletter-red);
  }

  .newsletter-btn-gradient {
    background: var(--newsletter-gradient);
  }
}
```

**Note:** You have to put these in `component` layer or `base` layer. Otherwise, the styles of `utilities` layer may override when using Tailwind class syntax. For example, `hover:text-(--card-gray-950)` will not work.

### Typography

- Font family: Roboto
- Weights: 400, 700
- I imported this font in index.css as `<link rel="stylesheet">`

```
  .newsletter-text-preset-1 {
    @apply text-[40px];
    @apply font-bold;
    @apply leading-none;
  }

  .newsletter-text-preset-2-bold {
    @apply text-base;
    @apply font-bold;
  }

  .newsletter-text-preset-2-regular {
    @apply text-base;
    @apply font-normal;
  }

  .newsletter-text-preset-3 {
    @apply text-xs;
    @apply font-bold;
  }
```

**Note:** This is how I usually re-use Tailwind classes to make sure lessing code to maintain: **@apply**

### Related files

```
components/ui/newsletter-sign-up/
config/
├── component-data.ts        # Component data to display
└── component-data.types.ts  # Component data template
```
