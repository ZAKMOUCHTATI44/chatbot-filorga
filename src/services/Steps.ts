import { Lang } from "@prisma/client";
import { getLang } from "./LangService";

export async function getStep1(phone: string) {
  // Return the senario for the "Découvrir Nos Produits"
  const lang = await getLang(phone);

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
                    ? "👁️✨🧴 منتجات لمنطقة حول العينين"
                    : "👁️✨🧴 Produits pour le contour des yeux",
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

export async function getStep2(phone: string) {
  const lang = await getLang(phone);

  let body = {
    fr: "Pour trouver votre routine idéale, j’ai besoin de quelques informations rapides.",
    ar: "للعثور على روتينك المثالي، أحتاج إلى بعض المعلومات السريعة.",
  };

  let custom = {
    type: "interactive",
    interactive: {
      type: "list",
      header: {
        type: "text",
        text:
          lang === Lang.AR
            ? "اعثري على روتين مخصص."
            : "Trouver une routine personnalisée.",
      },
      body: {
        text: lang === Lang.AR ? body.ar : body.fr,
      },
      footer: {
        text: " ",
      },
      action: {
        button: lang === Lang.AR ? "اختر" : "Choisir",
        sections: [
          {
            title:
              lang === Lang.AR
                ? "ما نوع بشرتك؟"
                : "Quel est votre type de peau ?",
            rows: [
              {
                id: "typedepeau1",
                description: " ",

                title: lang === Lang.AR ? "جافة" : "Sèche .",
              },
              {
                id: "typedepeau2",
                description: " ",
                title: lang === Lang.AR ? "دهنية" : "Grasse .",
              },
              {
                id: "typedepeau3",
                description: " ",
                title: lang === Lang.AR ? "مختلطة" : "Mixte.",
              },
              {
                id: "typedepeau4",
                description: " ",
                title: lang === Lang.AR ? "عادية" : "Normale",
              },
            ],
          },
        ],
      },
    },
  };

  return custom;
}

export async function getStep3(phone: string) {
  const lang = await getLang(phone);

  let body = {
    fr: "Nos produits sont formulés avec des actifs inspirés de la médecine esthétique. Quel actif souhaitez-vous explorer ?",
    ar: "تم تركيب منتجاتنا بمكونات نشطة مستوحاة من الطب التجميلي. ما هو المكون النشط الذي ترغبين في استكشافه؟",
  };

  let custom = {
    type: "interactive",
    interactive: {
      type: "list",
      header: {
        type: "text",
        text: lang === Lang.AR ? " الأصول والخبرة" : " Actifs et Expertise.",
      },
      body: {
        text: lang === Lang.AR ? body.ar : body.fr,
      },
      footer: {
        text: " ",
      },
      action: {
        button: lang === Lang.AR ? "اختر" : "Choisir",
        sections: [
          {
            title:
              lang === Lang.AR ? "حدد اختيارك" : "Sélectionner votre choix",
            rows: [
              {
                id: "actifs1",
                description:
                  lang === Lang.AR
                    ? "حمض الهيالورونيك: الترطيب والحجم."
                    : "Acide Hyaluronique : Hydratation et volume .",

                title: " ",
              },
              {
                id: "actifs2",
                description:
                  lang === Lang.AR
                    ? " NCEF: تجديد الخلايا.  "
                    : " NCEF : Régénération cellulaire.",
                title: " ",
              },
              {
                id: "actifs3",
                description:
                  lang === Lang.AR
                    ? "الببتيدات: تقليل التجاعيد."
                    : "Peptides : Réduction des rides..",
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

export async function getStep5(phone: string) {
  const lang = await getLang(phone);

  let body = {
    fr: "Un conseiller est disponible pour répondre à vos questions.",
    ar: "يوجد مستشار متاح للإجابة عن أسئلتك."
  };

  let custom = {
    type: "interactive",
    interactive: {
      type: "list",
      header: {
        type: "text",
        text: lang === Lang.AR ? "تحدث إلى أحد المستشارين" : "Parler à un Conseiller",
      },
      body: {
        text: lang === Lang.AR ? body.ar : body.fr,
      },
      footer: {
        text: " ",
      },
      action: {
        button: lang === Lang.AR ? "اختر" : "Choisir",
        sections: [
          {
            title:
              lang === Lang.AR ? "يرجى تحديد خيار": "Veuillez choisir une option",
            rows: [
              {
                id: "support1",
                description:
                  lang === Lang.AR
                    ? "تلقي مكالمة هاتفية."
                    : "Recevoir un appel téléphonique.",

                title: " ",
              },
              {
                id: "support2",
                description:
                  lang === Lang.AR
                    ? "اطرح سؤالاً عبر واتساب."
                    : "Poser une question via WhatsApp.",
                title: " ",
              },
              {
                id: "support3",
                description:
                  lang === Lang.AR
                    ? "اكتب رسالة هنا (الرد خلال 24 ساعة)."
                    : "Écrire un message ici (réponse sous 24h).",
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