import { Lang } from "@prisma/client";

export const getLang = async (phone: string): Promise<Lang> => {
    const lead = await prisma.lead.findFirst({
      where: {
        phone,
      },
    });
  
    return lead !== null && lead.lang === "AR" ? Lang.AR : Lang.FR;
  };
  