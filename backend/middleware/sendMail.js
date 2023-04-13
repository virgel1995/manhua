
import mg from 'mailgun-js'
// eslint-disable-next-line no-undef
const procc = process.env
export const mailgun = () =>
  mg({
    apiKey: procc.MAILGUN_API_KEY,
    domain: procc.MAILGUN_DOMIAN,
  });

const sendmail = () => {

  return {
    message : 'success'
  }
}
export default sendmail