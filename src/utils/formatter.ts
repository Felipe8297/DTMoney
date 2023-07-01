export const dateFormatted = new Intl.DateTimeFormat('pt-BR')

export const priceFormatted = new Intl.NumberFormat('pt-BR', {
  style: 'currency',
  currency: 'BRL',
})
