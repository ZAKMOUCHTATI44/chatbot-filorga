import { Lang } from "@prisma/client";
import { getLang } from "./LangService";
import { title } from "process";

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
    fr: "Pour trouver votre routine idéale, j’ai besoin de quelques informations rapides. \n 1️⃣ Quel est votre type de peau ?",
    ar: "للعثور على روتينك المثالي، أحتاج إلى بعض المعلومات السريعة. \n 1️⃣ ما هو نوع بشرتك؟"
  };

  let custom = {
    type: "interactive",
    interactive: {
      type: "list",
      header: {
        type: "text",
        text: lang === Lang.AR ? "اعثري على روتين." : "Trouver une routine.",
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
                id: "peau-1",
                title: " ",
                description: lang === Lang.AR ? "جافة" : "Sèche .",
              },
              {
                id: "peau-2",
                title: " ",
                description: lang === Lang.AR ? "دهنية" : "Grasse .",
              },
              {
                id: "peau-3",
                title: " ",
                description: lang === Lang.AR ? "مختلطة" : "Mixte.",
              },
              {
                id: "peau-4",
                title: " ",
                description: lang === Lang.AR ? "عادية" : "Normale",
              },
            ],
          },
        ],
      },
    },
  };

  return custom;
}

export async function getStep2detail(phone: string) {
  const lang = await getLang(phone);

  let body = {
    fr: " Quelle est votre principale préoccupation ?  ",
    ar: " ما هو مصدر قلقك الرئيسي؟  "
  };

  let custom = {
    type: "interactive",
    interactive: {
      type: "list",
      header: {
        type: "text",
        text: lang === Lang.AR ? " " : " ",
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
                id: "routine-1",
                title: " ",
                description: lang === Lang.AR ? "التجاعيد وفقدان التماسك." : "Rides et perte de fermeté.",
              },
              {
                id: "routine-2",
                title: " ",
                description: lang === Lang.AR ? "الجفاف" : "Déshydratation.",
              },
              {
                id: "routine-3",
                title: " ",
                description: lang === Lang.AR ? "بشرة باهتة" : "Teint terne.",
              },
              {
                id: "routine-4",
                title: " ",
                description: lang === Lang.AR ? "الحماية من الأشعة فوق البنفسجية" : "Protection UV",
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
    ar: "يوجد مستشار متاح للإجابة عن أسئلتك.",
  };

  let custom = {
    type: "interactive",
    interactive: {
      type: "list",
      header: {
        type: "text",
        text: lang === Lang.AR ? "تحدث إلينا" : "Parler avec nous",
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
                ? "يرجى تحديد خيار"
                : "Veuillez choisir une option",
            rows: [
              {
                id: "support-1",
                description:
                  lang === Lang.AR
                    ? "تلقي مكالمة هاتفية."
                    : "Recevoir un appel téléphonique.",

                title: " ",
              },
              {
                id: "support-2",
                description:
                  lang === Lang.AR
                    ? "اطرح سؤالاً عبر واتساب."
                    : "Poser une question via WhatsApp.",
                title: " ",
              },
              {
                id: "support-3",
                description: lang === Lang.AR
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
