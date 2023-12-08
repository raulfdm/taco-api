import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";

// https://astro.build/config
export default defineConfig({
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
          ],
        },
        {
          label: "Início",
          items: [
            {
              label: "Começando",
              link: "/getting-started",
            },
          ],
        },
        {
          label: "References",
          items: [
            {
              label: "FAQ",
              link: "/faq/",
            },
          ],
        },
      ],
    }),
  ],
});
