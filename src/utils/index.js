const PRESSURE_UNITS = 0.750062

export const capitalizeFirstLatter = (str) => {
  if (!str) return ''

  return str.charAt(0).toUpperCase() + str.slice(1)
}

export const getPressureMm = (hpa) => {
  return Math.round(hpa * PRESSURE_UNITS)
}

export const getTime = (sec) => {
  return new Date(sec * 1000).toLocaleTimeString('ru-Ru', { timeZone: 'Atlantic/Reykjavik'})
} 