import { Lang } from "@prisma/client";
import { getLang } from "./LangService";

export async function getMenu(lang: Lang) {
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
        button: lang === Lang.AR ? "خيارات" : "Options",
        sections: [
          {
            title:
              lang === Lang.AR ? "حدد اختيارك" : "Sélectionner votre choix",
            rows: [
              {
                id: "option1",
                description :lang === Lang.AR ? "اكتشف منتجاتنا." : "Découvrir nos produits. ",
                title: " ",
              },
              {
                id: "option2",
                description : lang === Lang.AR ? "ابحث عن روتين مخصص." : "Trouver une routine personnalisée. ",
                title: " ",
              },
              {
                id: "option3",
                description :lang === Lang.AR ? "تعرف على أصولنا وخبراتنا." :  "En savoir plus sur nos actifs et notre expertise.",
                title: " ",
              },
              {
                id: "option4",
                description: lang === Lang.AR ? "تحديد موقع نقطة بيع." : "Localiser un point de vente. ",
                title: " ",
              },
              {
                id: "option5",
                description: lang === Lang.AR ? "التحدث مع مستشار." :  "Parler à un conseiller.",
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
