import { Lang } from "@prisma/client";
import { getLang } from "./LangService";

export async function getMenu(lang: Lang) {
  let rows = [];
  let body = {
    fr: "Bienvenue chez Filorga Maroc 🌟  Je suis votre assistant beauté, prêt à vous guider pour sublimer votre peau.   Que souhaitez-vous faire aujourd’hui ? ",
    ar: "أهلاً وسهلاً في فيلورغا المغرب 🌟 أنا مساعدك الجمالي، مستعد لإرشادك لتحسين بشرتك. ماذا ترغب في القيام به اليوم؟",
  };

  let custom = {
    type: "interactive",
    interactive: {
      type: "list",
      header: {
        type: "text",
        text: lang === Lang.AR ? "Filorga" : "Filorga",
      },
      body: {
        text: lang === Lang.AR ? body.ar : body.fr,
      },
      footer: {
        text: " ",
      },
      action: {
        button: lang === Lang.AR ? "خيارات" : "options",
        sections: [
          {
            title:
              lang === Lang.AR ? "حدد اختيارك" : "Sélectionner votre choix",
            rows: [
              {
                id: "1",
                title: "Découvrir nos produits. ",
                description: " ",
              },
              {
                id: "2",
                title: "Trouver une routine personnalisée. ",
                description: " ",
              },
              {
                id: "3",
                title: "En savoir plus sur nos actifs et notre expertise.",
                description: " ",
              },
              {
                id: "4",
                title: "Localiser un point de vente. ",
                description: " ",
              },
              {
                id: "4",
                title: "Parler à un conseiller.",
                description: " ",
              },
            ],
          },
        ],
      },
    },
  };

  return custom;
}

export const buttonMenu = async (phone: string) => {
  const lang = await getLang(phone);

  let custom = {
    type: "interactive",
    interactive: {
      type: "button",
      body: {
        text:
          lang === Lang.AR
            ? "للعودة إلى القائمة، انقر أدناه"
            : "Veuillez appuyer ci-dessous pour revenir au menu principal !",
      },
      action: {
        buttons: [
          {
            type: "reply",
            reply: {
              id: "menu-default",
              title: lang === Lang.AR ? "القائمة" : "Menu",
            },
          },
        ],
      },
    },
  };

  return custom;
};

export function welcomeMessage(): any {
  let custom = {
    type: "interactive",
    interactive: {
      type: "button",
      header: {
        type: "text",
        text: "Bonjour",
      },
      body: {
        text: "Merci de nous avoir contacté! Merci de sélectionner votre langue. \n مرحبًا ، شكرًا على تواصلك معنا! الرجاء تحديد اللغة.",
      },
      footer: {
        text: "Veuillez sélectionner une langue.",
      },
      action: {
        buttons: [
          {
            type: "reply",
            reply: {
              id: "btn-lang-fr",
              title: "Français",
            },
          },
          {
            type: "reply",
            reply: {
              id: "btn-lang-ar",
              title: "Arabe",
            },
          },
        ],
      },
    },
  };

  return custom;
}
