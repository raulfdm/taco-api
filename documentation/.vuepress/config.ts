import { defaultTheme, defineUserConfig } from 'vuepress';

export default defineUserConfig({
  theme: defaultTheme({
    repo: 'raulfdm/taco-api',
    locales: {
      '/': {
        selectLanguageName: 'Português',
        toggleColorMode: 'Alternar modo escuro',
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
  }),
  locales: {
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
});
