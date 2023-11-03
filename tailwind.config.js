module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
],
  purge: [
    './src/**/*.html',
    './src/**/*.js',
    './src/**/*.jsx',
    './src/**/*.ts',
    './src/**/*.tsx',
    // Add any other files you want to include for purging unused CSS classes
  ],
  // Set to 'media' or 'class' if you want dark mode to be controlled by CSS or class attributes
  theme: {
    extend: {
      // Extend or override the default theme here
      // Example: You can add custom colors, fonts, or breakpoints
      colors: {
        'primary': '#FF5733',
        'nav':'#F2A53E',
        'fon':'#9E9D9D'
      },
      fontFamily: {
        'custom': ['CustomFont', 'sans','Roboto'],
      },
      borderWidth:{
        '1':'1px'
      },
      width:{
        '1':'4px'
      },backgroundImage: {
        'my-background': "url('https://pps.whatsapp.net/v/t61.24694-24/385524006_1701856423664646_4292650903316216101_n.jpg?ccb=11-4&oh=01_AdRXq0aip_Kb5XEJD6i70K9FcPMcDTCg3bjC1kqwBBhU7w&oe=654DB908&_nc_sid=000000&_nc_cat=103')",
      },

    },
  },
  variants: {
    extend: {
      // Add or modify variants for existing utility classes
      // Example: Add a hover variant for the 'bg' utility
      backgroundColor: ['hover'],
    },
  }
}
