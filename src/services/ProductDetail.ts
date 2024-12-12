import { Lang } from "@prisma/client";
import { getLang } from "./LangService";

export async function getProductDetail(phone: string) {
    console.log("DETAIL PROFUCTS")
  const lang = await getLang(phone);
  let body = {
    fr: "TIME Filler est conçu pour corriger 5 types de rides en 7 jours grâce à l’acide hyaluronique et aux peptides. Souhaitez-vous",
    ar: "تم تصميم TIME Filler لتصحيح 5 أنواع من التجاعيد في 7 أيام بفضل حمض الهيالورونيك والببتيدات. تفضلي بزيارة",
  };

  let custom = {
    type: "interactive",
    interactive: {
      type: "list",
      header: {
        type: "text",
        text: "TIME Filler",
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
                id: "productsdetails",
                description:
                  lang === Lang.AR
                    ? "اكتشف المزيد عن استخدامه. "
                    : "En savoir plus sur son utilisation. ",

                title: " ",
              },
              {
                id: "addtocart",
                description:
                  lang === Lang.AR
                    ? "أضف إلى السلة"
                    : "Ajouter au panier",
                title: " ",
              },
              {
                id: "localisation",
                description: lang === Lang.AR
                    ? "حدد موقع نقطة البيع."
                    : "Localiser un point de vente.",
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
