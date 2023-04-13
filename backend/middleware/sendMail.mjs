export const mailgun = () =>
  mg({
    apiKey: process.env.MAILGUN_API_KEY,
    domain: process.env.MAILGUN_DOMIAN,
  });

const sendmail = () => {

  return {
    message : 'success'
  }
}
export default sendmail