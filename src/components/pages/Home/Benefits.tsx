import { BenefitCard } from "./BenefitCard";

export const Benefits  = () => {
  return (<section className="bg-blue-400 flex gap-6 justify-center h-[70vh] items-center">
    <BenefitCard image="./createStoreEasy.png" content="Diseña, personaliza y lanza tu tienda online sin necesidad de programación. Empieza gratis y vende en minutos"/>
    <BenefitCard image="./manage.png" content="Edita precios, imágenes y descripciones desde la web o la app. Mantén tu catálogo actualizado con solo unos clics"/>
    <BenefitCard image="./payment.png" content="Conecta Stripe, PayPal o transferencia bancaria en segundos. Ofrece múltiples métodos de pago para tus clientes."/>
    <BenefitCard image="./app.png" content="Gestiona pedidos, productos y clientes directamente desde tu celular. Mantente siempre conectado con tu tienda."/>
  </section>);
};