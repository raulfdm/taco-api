import { defaultTheme, defineUserConfig } from "vuepress";

export default defineUserConfig({
  theme: defaultTheme({
    repo: "raulfdm/taco-api",
    locales: {
      "/": {
        navbar: [
          {
            text: "Versão",
            children: [
              {
                text: "Changelog",
                link: "https://github.com/raulfdm/taco-api/blob/main/CHANGELOG.md",
              },
              {
                text: "v1.0.0",
                link: "https://6447d8ec2c2ccb00085151ca--taco-api.netlify.app/",
              },
            ],
          },
        ],
        selectLanguageName: "Português",
        toggleColorMode: "Alternar modo escuro",
        openInNewWindow: "Abrir em nova aba",
        backToHome: "Voltar para página inicial",
        tip: "Dica",
        warning: "Atenção",
        danger: "Perigo",
        contributorsText: "Contribuidores",
        lastUpdatedText: "Atualizado pela última vez em",
        editLinkText: "Edite esta página",
        selectLanguageText: "Idiomas",
      },
      "/en/": {
        navbar: [
          {
            text: "Version",
            children: [
              {
                text: "Changelog",
                link: "https://github.com/raulfdm/taco-api/blob/main/CHANGELOG.md",
              },
              {
                text: "v1.0.0",
                link: "https://6447d8ec2c2ccb00085151ca--taco-api.netlify.app/",
              },
            ],
          },
        ],
        selectLanguageName: "English",
      },
    },
  }),
  locales: {
    "/": {
      lang: "pt-BR",
      title: "TACO API",
      description: "Tabela Brasileira de Composição de Alimentos",
    },
    "/en/": {
      lang: "en-US",
      title: "TACO API",
      description: "Brazilian Table of Food Composition",
    },
  },
});
