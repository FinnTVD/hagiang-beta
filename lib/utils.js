import { clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'
import { format } from 'date-fns'
import numeral from 'numeral'
import { keys } from 'lodash'

export function cn(...inputs) {
  return twMerge(clsx(inputs))
}

export function fDate(date, newFormat) {
  const fm = newFormat || 'dd/MM/yyyy'
  return date ? format(new Date(date), fm) : ''
}

function result(format, key = '.00') {
  const isInteger = format.includes(key)

  return isInteger ? format.replace(key, '') : format
}

export function fCurrency(number = 0) {
  const format = number ? numeral(number).format('0,0.00') : ''

  return result(format, '.00')
}

export const convertStr2URL = (pickParams) => {
  let str = ''
  keys(pickParams).forEach((key) => {
    str += `${key}=${pickParams[key]}&`
  })
  str = str.slice(0, -1)
  return str
}
export const removeScript = (content) => {
  return content.replace(/<script[^>]*>.*?<\/script>/g, '')
}

export const basicBike = 'Easy Rider - Basic Bike'
export const bigBike = 'Easy Rider - Big Bike'
