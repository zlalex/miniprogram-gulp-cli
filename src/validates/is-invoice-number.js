import isConstantCode from './is-constant-code'

const INVOICE_LENGTH = [15, 17, 18, 20]
const isInvoiceNumber = value => {
  if (INVOICE_LENGTH.includes(value.length)) {
    return isConstantCode(value)
  }
  return false
}

export default isInvoiceNumber