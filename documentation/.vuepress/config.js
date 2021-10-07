module.exports = {
  themeConfig: {
    logo: false,
    repo: 'raulfdm/taco-api',
    locales: {
      '/': {
        selectLanguageName: 'Português',
        toggleDarkMode: 'Alternar modo escuro',
        openInNewWindow: 'Abrir em nova aba',
        backToHome: 'Voltar para página inicial',
        tip: 'Dica',
        warning: 'Atenção',
        danger: 'Perigo',
        contributorsText: 'Contribuidores',
        lastUpdatedText: 'Atualizado pela última vez em',
        editLinkText: 'Edite esta página',
        selectLanguageText: 'Idiomas',
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
