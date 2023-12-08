import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";

// https://astro.build/config
export default defineConfig({
  redirects: {
    "/": "/about",
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
            },
            {
              label: "Processamento de dados",
              link: "/data-processing",
            },
            {
              label: "Tecnologias",
              link: "/stack",
            },
          ],
        },
        {
          label: "Início",
          items: [
            {
              label: "Começando",
              link: "/getting-started",
            },
            {
              label: "Banco de dados",
              link: "/database",
            },
            {
              label: "Rodando localmente",
              link: "/running",
            },
            {
              label: "Documentação da API",
              link: "/api-docs",
            },
          ],
        },
        {
          label: "Deploy",
          items: [
            {
              label: "Node app",
              link: "/deploy",
            },
            {
              label: "Docker",
              link: "/docker",
            },
          ],
        },
        {
          label: "References",
          items: [
            {
              label: "FAQ",
              link: "/faq",
            },
            {
              label: "Contribuindo",
              link: "/contributing",
            },
          ],
        },
      ],
    }),
  ],
});
