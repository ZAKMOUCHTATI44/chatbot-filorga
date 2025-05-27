import { Lang } from "@prisma/client";
import { getLang } from "./LangService";
import { title } from "process";

export async function getStep1(phone: string) {
  // Return the senario for the "Découvrir Nos Produits"
  const lang = await getLang(phone);

  let body = {
    fr: "Quel est le motif de votre réclamation ?",
    ar: "ما هو سبب شكواك؟",
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
                id: "products1",
                description:
                  lang === Lang.AR
                    ? "Ramassage non effectué"
                    : "Ramassage non effectué",
                title: " ",
              },
              {
                id: "products2",
                description:
                  lang === Lang.AR
                    ? "Bac cassé ou manquant"
                    : "Bac cassé ou manquant",
                title: " ",
              },
              {
                id: "products3",
                description: lang === Lang.AR ? "Propreté" : "Propreté",
                title: " ",
              },
              {
                id: "products4",
                description:
                  lang === Lang.AR ? "Comportement d’un agent" : "Comportement d’un agent",
                title: " ",
              },
              {
                id: "products5",
                description:
                  lang === Lang.AR ? "Comportement d’un agent" : "Autre",
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
    fr: " Quel service souhaitez-vous programmer ?",
    ar: "ما هي الخدمة التي ترغب في جدولتها؟" ,
  };

  let custom = {
    type: "interactive",
    interactive: {
      type: "list",
      header: {
        type: "text",
        text: lang === Lang.AR ? "Options" : "Options",
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
                description: lang === Lang.AR ? "جمع النفايات الضخمة." : "Ramassage d’encombrants .",
              },
              {
                id: "peau-2",
                title: " ",
                description: lang === Lang.AR ? "النفايات الخضراء." : "Déchets verts .",
              },
              {
                id: "peau-3",
                title: " ",
                description: lang === Lang.AR ? "التنظيف في بعض الأحيان." : "Nettoyage ponctuel .",
              },
              {
                id: "peau-4",
                title: " ",
                description: lang === Lang.AR ? "تسليم أو استبدال سلة المهملات" : "Livraison ou remplacement de bac",
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
    ar: " ما هو مصدر قلقك الرئيسي؟  ",
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
                description:
                  lang === Lang.AR
                    ? "التجاعيد وفقدان التماسك."
                    : "Rides et perte de fermeté.",
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
                description:
                  lang === Lang.AR
                    ? "الحماية من الأشعة فوق البنفسجية"
                    : "Protection UV",
              },
            ],
          },
        ],
      },
    },
  };

  return custom;
}

export async function getStep4(phone: string) {
  const lang = await getLang(phone);

  let body = {
    fr: " Quel service souhaitez-vous contacter ?",
    ar: "ما هو القسم الذي ترغب في الاتصال به؟",
  };

  let custom = {
    type: "interactive",
    interactive: {
      type: "list",
      header: {
        type: "text",
        text: lang === Lang.AR ? "ما هو القسم الذي ترغب في الاتصال به؟" : "Quel service souhaitez-vous contacter ?",
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
                    ? "خدمة العملاء؟"
                    : "Service client",

                title: " ",
              },
              {
                id: "actifs2",
                description:
                  lang === Lang.AR
                    ? "قسم الجودة"
                    : "Service qualité",
                title: " ",
              },
              {
                id: "actifs3",
                description:
                  lang === Lang.AR
                    ? "الإدارة الفنية"
                    : "Direction technique",
                title: " ",
              },
              {
                id: "actifs4",
                description:
                  lang === Lang.AR
                    ? "تواصل"
                    : "Communication",
                title: " ",
              },
              {
                id: "actifs5",
                description:
                  lang === Lang.AR
                    ? "البيانات الشخصية"
                    : "Données personnelles",
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
