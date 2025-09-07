interface WhatsAppProps {
  nombre: string;
  email: string;
  presupuesto: string;
  mensaje: string;
}

export const sendMessageWhatsapp = (message: WhatsAppProps) => {
  const { nombre, email, presupuesto, mensaje } = message;
  const messageWhatsapp = `*REQUIERO UN PROYECTO*%0A%0A*Nombre:* ${nombre}%0A*Email:* ${email}%0A*Presupuesto:* ${presupuesto}%0A*Mensaje:* ${mensaje}`;
  const phoneNumber = "51901617809";
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${messageWhatsapp}`;

  window.open(whatsappUrl, "_blank");

  return whatsappUrl;
}