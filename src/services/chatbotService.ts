import { Request, Response } from "express";
import { MessageRequest } from "../../types";
import { getLastMessage, saveMessage } from "./MessageService";
import { buttonMenu, getMenu, welcomeMessage } from "./MessageContent";
import { sendMessage } from "./nexmoService";
import { Lang } from "@prisma/client";
import { createOrUpdateLead } from "./leadService";
import { getLang } from "./LangService";
import {
  getStep1,
  getStep2,
  getStep2detail,
  getStep4,
  getStep5,
} from "./Steps";
import { getProductDetail } from "./ProductDetail";
import { getStoreLocation, storeOption } from "./storeOption";

export async function chatbot(req: Request, res: Response) {
  let message: MessageRequest = req.body;

  console.log(JSON.stringify(message));

  let step: string = "";
  const lastMessage = await getLastMessage(message.from);

  switch (message.message_type) {
    case "location":
      sendMessage({
        channel: "whatsapp",
        from: message.to,
        to: message.from,
        message_type: "custom",
        custom: await storeOption(
          message.location.lat,
          message.location.long,
          message.from
        ),
      });

      break;
    case "reply":
      let { id, title, description } = message?.reply;

      if (id.includes("location")) {
        // get the store id and return the location to user
        sendMessage({
          channel: "whatsapp",
          from: message.to,
          to: message.from,
          message_type: "custom",
          custom: await getStoreLocation(id.replace("location", "")),
        });
        sendButtonBackToMenu(message);
      } else if (id.includes("btn-lang-fr")) {
        sendMessage({
          channel: "whatsapp",
          from: message.to,
          to: message.from,
          message_type: "custom",
          custom: await getMenu(Lang.FR),
        });

        createOrUpdateLead({
          lang: Lang.FR,
          phone: message.from,
          profileName: message.profile.name,
        });
      } else if (id.includes("btn-lang-ar")) {
        sendMessage({
          channel: "whatsapp",
          from: message.to,
          to: message.from,
          message_type: "custom",
          custom: await getMenu(Lang.AR),
        });

        createOrUpdateLead({
          lang: Lang.AR,
          phone: message.from,
          profileName: message.profile.name,
        });
      } else if (id.includes("products")) {
        const lang = await getLang(message.from);
        sendMessage({
          channel: "whatsapp",
          from: message.to,
          to: message.from,
          message_type: "text",
          text:
            lang === Lang.AR
              ? `شكرًا. يرجى تقديم العنوان ووصفًا موجزًا ​​وإرفاق صورة إذا رغبت في ذلك.`
              : "Merci. Veuillez indiquer l’adresse, une brève description, et joindre une photo si vous le souhaitez.",
        });
        sendButtonBackToMenu(message);
      } else if (id.includes("peau")) {
        sendMessage({
          channel: "whatsapp",
          from: message.to,
          to: message.from,
          message_type: "custom",
          custom: await getStep2detail(message.from),
        });
        sendButtonBackToMenu(message);
      } else if (id.includes("option")) {
        step = id.replace("option", "");

        switch (step) {
          case "1":
            sendMessage({
              channel: "whatsapp",
              from: message.to,
              to: message.from,
              message_type: "custom",
              custom: await getStep1(message.from),
            });
            sendButtonBackToMenu(message);
            break;

          case "2":
            sendMessage({
              channel: "whatsapp",
              from: message.to,
              to: message.from,
              message_type: "custom",
              custom: await getStep2(message.from),
            });
            sendButtonBackToMenu(message);

            break;
          case "3":
            const lang = await getLang(message.from);
            sendMessage({
              channel: "whatsapp",
              from: message.to,
              to: message.from,
              message_type: "text",
              text:
                lang === Lang.AR
                  ? `لإرسال طلب توظيف افتراضي، يرجى إرسال: الاسم، المدينة، الوظيفة المطلوبة والسيرة الذاتية.`
                  : "Pour envoyer une candidature spontanée, merci de nous transmettre : nom, ville, poste souhaité et CV.",
            });
            sendButtonBackToMenu(message);

            break;
          case "4":
            sendMessage({
              channel: "whatsapp",
              from: message.to,
              to: message.from,
              message_type: "custom",
              custom: await getStep4(message.from),
            });
            sendButtonBackToMenu(message);
            break;
          case "5":
            let lang2 = await getLang(message.from);
            sendMessage({
              channel: "whatsapp",
              from: message.to,
              to: message.from,
              message_type: "text",
              text:
                lang2 === Lang.AR
                  ? "الرجاء إدخال رقم حالتك"
                  : "Veuillez entrer votre numéro de dossier : ",
            });
            sendButtonBackToMenu(message);
            break;

          default:
            break;
        }
        console.log(`handle each step with his id ${step}`);
      } else if (id.includes("menu-default")) {
        let lang1 = await getLang(message.from);

        let custom = await getMenu(lang1);
        sendMessage({
          channel: "whatsapp",
          from: message.to,
          to: message.from,
          message_type: "custom",
          custom,
        });
      }

      break;
    case "unsupported":
      break;

    default:
      sendMessage({
        channel: "whatsapp",
        from: message.to,
        to: message.from,
        message_type: "custom",
        custom: welcomeMessage(),
      });
      break;
  }

  saveMessage({
    body: message.text ?? "",
    from: message.from,
    to: message.to,
    type: message.message_type,
    step: Number(step),
    messageId: message.message_uuid ?? "",
  });
  res.status(200).end();
}

function sendButtonBackToMenu(message: MessageRequest) {
  setTimeout(async () => {
    let custom = await buttonMenu(message.from);
    sendMessage({
      channel: "whatsapp",
      from: message.to,
      to: message.from,
      message_type: "custom",
      custom,
    });
  }, 5000);
}
