export function formatBalance(value: number | string) {
  const thousands_sep = '.'
  const val = parseFloat(String(value)) || 0

  return String(val.toFixed(2)).replace(/\B(?=(\d{3})+(?!\d))/g, thousands_sep)
}
