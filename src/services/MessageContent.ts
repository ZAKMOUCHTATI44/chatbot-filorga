import { Lang } from "@prisma/client";
import { getLang } from "./LangService";

export async function getMenu(lang: Lang) {
  let body = {
    fr: "Bonjour, bienvenue sur le service en ligne d’ARMA Environnement. Comment pouvons-nous vous aider ?",
    ar: "مرحبًا بكم في خدمة ARMA Environnement عبر الإنترنت. كيف يمكننا مساعدتك؟",
  };

  let custom = {
    type: "interactive",
    interactive: {
      type: "list",
      header: {
        type: "text",
        text: lang === Lang.AR ? "ARMA" : "ARMA",
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
                description:
                  lang === Lang.AR
                    ? "الإبلاغ عن مطالبة"
                    : "Déclarer une réclamation",
                title: " ",
              },
              {
                id: "option2",
                description:
                  lang === Lang.AR
                    ? "طلب مرور الخدمة"
                    : "Demander un passage de service ",
                title: " ",
              },
              {
                id: "option3",
                description:
                  lang === Lang.AR ? "تقديم الطلب" : "Déposer une candidature",
                title: " ",
              },
              {
                id: "option4",
                description:
                  lang === Lang.AR
                    ? "الاتصال بخدمة ARMA"
                    : "Contacter un service ARMA",
                title: " ",
              },
              {
                id: "option5",
                description:
                  lang === Lang.AR
                    ? "متابعة المطالبة أو الطلب"
                    : "Suivre une réclamation ou une demande",
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
