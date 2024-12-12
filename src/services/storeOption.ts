import { getLang } from "./LangService";

export async function storeOption(lat: number, long: number, from: string) {
  const lang = await getLang(from);
  const stores = [
    {
      name: "Côté Para Bourgogne",
      id: "1",
    },
    {
      name: "Fidari Market",
      id: "2",
    },
    {
      name: "SABEM",
      id: "3",
    },
    {
      name: "Beauty Self",
      id: "4",
    },
    {
      name: "PARAPHARMACIE MAPARA",
      id: "5",
    },
    {
      name: "Pink Pharma",
      id: "6",
    },
    {
      name: "Kimaral Shop",
      id: "7",
    },
    {
      name: "PASSION BEAUTY Drugstore",
      id: "8",
    },
  ];
  let rows = stores.map((store, index) => {
    return {
      id: `location${store.id}`,
      title: " ",
      description: store.name,
    };
  });

  let custom = {
    type: "interactive",
    interactive: {
      type: "list",
      header: {
        type: "text",
        text: lang === "AR" ? "كارفور" : "Carrefour",
      },
      body: {
        text:
          lang === "AR"
            ? "اختر متجر كارفور الاقرب إليك"
            : "Voici les magasins les plus proches de chez vous , choisissez le vôtre",
      },
      action: {
        button: lang === "AR" ? "خيارات" : "Options",
        sections: [
          {
            title: lang === "AR" ? "هنا متاجرك:" : "Voici vos magasins :",
            rows: rows,
          },
        ],
      },
    },
  };

  return custom
}
