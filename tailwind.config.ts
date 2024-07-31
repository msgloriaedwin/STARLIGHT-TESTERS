import type { Config } from "tailwindcss"

const config = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      backgroundImage: {
        "body": "linear-gradient(181deg, #F7EEE7 0.47%, #F9E9A3 277.67%, #FD0 438.32%)",
        "navbar": "linear-gradient(181deg, #F7EEE7 100%, #F9E9A3 100%, #FD0 100%)"
      },
      boxShadow: {
        "custom-inset": "2px 2px 0px 0px rgba(255, 255, 255, 0.4) inset, -4px -4px 0px 0px rgba(0, 0, 0, 0.32) inset",
      },
      fontSize: {
        "huge": "70px",
        "large": "50px",
        "big": "48px",
        "heading": "36px",
        "medium": "34px",
        "small": "16px",
        "extra-small": "14px",
      },
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
          bg: "#f7EEE7",
        },
        yellow: {
          main: "#FFDD00",
        },
        grey: {
          main: "#c5c5c5",
        },
        green: {
          main: "#4CAF50",
          "dirty-green": "#AEDCB0"
        },
        form: {
          main: "#FAFAFA",
          blue: "#ACE8FF"
        },
        button: {
          main: "#FFDD00",
          "light-main": "#FFF08C",
          "dark-blue": "#00658B",
          "dark-blue-text": "#D5F3FF",
          "light-blue": "#82DCFF",
          "light-blue-text": "#000000",
          neutral: "#FFFDFD",
          danger: "#FF3355"
        },
        textColor: {
          main: "#00658B",
          neutral: "#9F9F9F",
          black: "#272626",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
          bg: "#00A8E8",
          yellow: "#FFEB66",
          iconColor: "#F7EEE7",
        },
      },
      borderColor: {
        primaryBlue: "#00A8E8"
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config

export default config