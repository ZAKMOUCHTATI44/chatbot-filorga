import { Lang } from "@prisma/client";
import { getLang } from "./LangService";

export async function getStep1(phone: string) {
  // Return the senario for the "Découvrir Nos Produits"

  const lang = await getLang(phone)

  let body = {
    fr: "Quels produits souhaitez-vous découvrir ?",
    ar: "ما هي المنتجات التي ترغب في اكتشافها؟",
  };

  let custom = {
    type: "interactive",
    interactive: {
      type: "list",
      header: {
        type: "text",
        text: lang === Lang.AR ? "اكتشف منتجاتنا" : "Découvrir Nos Produits",
      },
      body: {
        text: lang === Lang.AR ? body.ar : body.fr,
      },
      footer: {
        text: " ",
      },
      action: {
        button: lang === Lang.AR ? "منتجاتنا" : "Produits",
        sections: [
          {
            title:
              lang === Lang.AR ? "حدد اختيارك" : "Sélectionner votre choix",
            rows: [
              {
                id: "products1",
                description:
                  lang === Lang.AR
                    ? "✨👀💆‍♀️ تقليل التجاعيد (TIME Filler، Optim-Eyes)"
                    : "✨👀💆‍♀️ Réduction des rides (TIME Filler, Optim-Eyes)",
                title: " ",
              },
              {
                id: "products2",
                description:
                  lang === Lang.AR
                    ? "💧🌿💆‍♀️ الترطيب (Hydra-Filler)"
                    : "💧🌿💆‍♀️ Hydratation (Hydra-Filler)",
                title: " ",
              },
              {
                id: "products3",
                description:
                  lang === Lang.AR
                    ? "☀️🛡️ حماية من الأشعة فوق البنفسجية (UV Bronze)"
                    : "☀️🛡️ Protection UV (UV Bronze)",
                title: " ",
              },
              {
                id: "products4",
                description:
                  lang === Lang.AR
                    ? "👁️✨🧴 Produits pour le contour des yeux"
                    : "👁️✨🧴 منتجات لمنطقة حول العينين",
                title: " ",
              },
            ],
          },
        ],
      },
    },
  };

  return custom;
}
