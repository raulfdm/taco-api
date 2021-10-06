module.exports = {
  themeConfig: {
    logo: 'https://vuejs.org/images/logo.png',
    locales: {
      '/': {
        selectLanguageName: 'Português',
      },
      '/en/': {
        selectLanguageName: 'English',
      },
    },
  },
  locales: {
    // The key is the path for the locale to be nested under.
    // As a special case, the default locale can use '/' as its path.
    '/': {
      lang: 'pt-BR',
      title: 'TACO API',
      description: 'Tabela Brasileira de Composição de Alimentos',
    },
    '/en/': {
      lang: 'en-US',
      title: 'TACO API',
      description: 'Brazilian Table of Food Composition',
    },
  },
};
