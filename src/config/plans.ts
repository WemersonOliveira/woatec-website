export const pricing = {
  visible: true,
  projects: [
    { name: "Digital Essentials", price: 3900 },
    { name: "Operação Digital", price: 7500 },
    { name: "Digital Personalizado", price: 17000 },
  ],
  monthly: [
    { name: "Digital Essencial", price: 900 },
    { name: "Digital Performance", price: 2000 },
    { name: "Digital Completo", price: 3500 },
    { name: "Digital Enterprise", price: 5000, startingAt: true },
  ],
};
export const formatPrice = (value: number) =>
  new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
    maximumFractionDigits: 0,
  }).format(value);
