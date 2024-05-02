export function formatCurrency(value: number | string, currency = 'USD') {
  let symbol = ''

  switch (currency.toLowerCase()) {
    case 'usd':
      symbol = '$'
      break
    default:
      break
  }

  const thousands_sep = ','
  const val = parseFloat(String(value)) || 0

  return `${symbol}${String(val.toFixed(2)).replace(/\B(?=(\d{3})+(?!\d))/g, thousands_sep)}`
}
