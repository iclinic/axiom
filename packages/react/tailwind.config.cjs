// eslint-disable-next-line @typescript-eslint/no-var-requires
const { fontFamily } = require('tailwindcss/defaultTheme')

const {
  border,
  color,
  font,
  opacity,
  shadowBrand,
  spacing,
  // eslint-disable-next-line @typescript-eslint/no-var-requires
} = require('@axiom-ui/tokens/iclinic')

const {
  surface,
  interactive,
  branding,
  background,
  highlight,
  typeface,
  link,
  icon,
  focus,
  others: { backdrop, divider },
} = color

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ['class'],
  content: ['src/**/*.{ts,tsx}'],
  theme: {
    backgroundColor: {
      ...background,
      surface,
      interactive,
      branding,
      backdrop,
    },
    borderColor: {
      interactive,
      border,
      divider,
    },
    ringColor: {
      focus,
    },
    ringOffsetColor: {
      focus,
    },
    textColor: {
      interactive,
      ...typeface,
      branding,
      link,
      icon,
    },
    colors: {
      highlight,
    },
    fontSize: {
      ...font.size,
    },
    fontWeight: {
      ...font.weight,
    },
    lineHeight: {
      ...font.lineHeight,
    },
    letterSpacing: {
      ...font.letterSpacing,
    },
    spacing: {
      ...spacing,
    },
    opacity: {
      ...opacity.level,
    },
    boxShadow: {
      ...shadowBrand.level,
    },
    extend: {
      // TODO: REMOVE theses colors
      colors: {
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        // background: color.interactive.accent.default,
        foreground: color.typeface.onInteractive.accent,
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive) / <alpha-value>)',
          foreground: 'hsl(var(--destructive-foreground) / <alpha-value>)',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
      },
      borderRadius: {
        ...border.radius,
      },
      fontFamily: {
        sans: ['var(--font-sans)', ...fontFamily.sans],
        base: font.family.base,
      },
      keyframes: {
        'accordion-down': {
          from: { height: 0 },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: 0 },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
}
