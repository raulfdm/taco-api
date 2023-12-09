import { defineConfig, sharpImageService } from "astro/config";
import starlight from "@astrojs/starlight";

// https://astro.build/config
export default defineConfig({
  redirects: {
    "/": "/about",
  },
  image: {
    imageService: sharpImageService(),
  },
  integrations: [
    starlight({
      title: "TACO API",
      defaultLocale: "root",
      locales: {
        root: {
          label: "Português",
          lang: "pt-BR",
        },
        en: {
          label: "English",
        },
      },
      social: {
        github: "https://github.com/raulfdm/taco-api",
      },
      sidebar: [
        {
          label: "Introdução",
          items: [
            {
              label: "Sobre",
              link: "/about",
              translations: {
                en: "About",
              },
            },
            {
              label: "Tecnologias",
              link: "/tech",
              translations: {
                en: "Technologies",
              },
            },
          ],
        },
        {
          label: "Início",
          translations: {
            en: "Getting Started",
          },
          items: [
            {
              label: "Começando",
              link: "/getting-started",
              translations: {
                en: "Getting Started",
              },
            },
            {
              label: "Documentação da API",
              link: "/api-docs",
              translations: {
                en: "API Docs",
              },
            },
            {
              label: "Banco de dados",
              link: "/database",
              translations: {
                en: "Database",
              },
            },
          ],
        },
        {
          label: "Deploy",
          items: [
            {
              label: "NodeJS",
              link: "/deploy-node",
            },
            {
              label: "Docker",
              link: "/deploy-docker",
            },
          ],
        },
        {
          label: "Referências",
          translations: {
            en: "References",
          },
          items: [
            {
              label: "Processamento de dados",
              link: "/data-processing",
              translations: {
                en: "Data Processing",
              },
            },
            {
              label: "Perguntas Frequentes",
              link: "/faq",
              translations: {
                en: "FAQ",
              },
            },
            {
              label: "Contribuindo",
              link: "/contributing",
              translations: {
                en: "Contributing",
              },
            },
          ],
        },
      ],
    }),
  ],
});
