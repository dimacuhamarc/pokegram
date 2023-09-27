/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  daisyui: {
    themes: [
      {
        mainTheme: {
          'primary': '#ff3434',
          'primary-focus': '#ff3434',
          'primary-content': '#ffffff',
          'secondary': '#1a1a1a',
          'secondary-focus': '#bd0091',
          'secondary-content': '#ffffff',
          'accent': '#37cdbe',
          'accent-focus': '#2aa79b',
          'accent-content': '#ffffff',
          'neutral': '#3d4451',
          'neutral-focus': '#ff3434',
          'neutral-content': '#ffffff',
          'base-100': '#f6f5f5',
          'base-200': '#f6f5f5',
          'base-300': '#f6f5f5',
          'base-content': '#1a1a1a',
          'info': '#2094f3',
          'success': '#009485',
          'warning': '#ff9900',
          'error': '#ff5724',
        }
      }
    ],
  },
  plugins: [require("daisyui")],
}

