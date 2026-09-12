const DEFAULT_WHATSAPP_NUMBER = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "+917827574531"; //7827574531

export type WhatsAppIntent =
  | { type: "product"; productName: string; variant?: string }
  | { type: "bespoke"; referenceId?: string; sneakerCount?: string }
  | { type: "order"; orderNumber: string }
  | { type: "general" };

export function getWhatsAppUrl(intent: WhatsAppIntent, customPhone?: string): string {
  const phone = (customPhone || DEFAULT_WHATSAPP_NUMBER).replace(/[^0-9]/g, "");

  let message = "Hi Creator The Maker, ";

  switch (intent.type) {
    case "product":
      message += `I'm interested in ${intent.productName}${intent.variant ? ` (${intent.variant})` : ""
        }. Could you share details regarding availability and lead times?`;
      break;

    case "bespoke":
      message += `I'd like to discuss a bespoke sneaker storage project${intent.referenceId ? ` (Ref: ${intent.referenceId})` : ""
        }${intent.sneakerCount ? ` for approximately ${intent.sneakerCount} pairs` : ""}.`;
      break;

    case "order":
      message += `I have an enquiry regarding my order ${intent.orderNumber}.`;
      break;

    case "general":
    default:
      message += "I'd like to speak with a design specialist about luxury sneaker storage.";
      break;
  }

  return `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
}
