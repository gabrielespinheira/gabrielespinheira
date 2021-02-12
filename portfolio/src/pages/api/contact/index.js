const axios = require('axios')

export default async (req, res) => {
  if (req.method !== 'POST') {
    return res.status(404).json({
      error: 'Not found',
    })
  }

  const bot_token = process.env.BOT_TOKEN
  const chat_id = process.env.CHAT_ID
  const { name, email, message } = req.body

  if (!name || !email || !message) {
    return res.status(400).json({
      error: 'Você precisa preencher todos os campos.',
    })
  }

  const text = `<b>NOVO CONTATO</b>\nNome: ${name}\nE-mail: ${email}\nMensagem: ${message}`

  try {
    const send = await axios.post(
      `https://api.telegram.org/bot${bot_token}/sendMessage`,
      {
        chat_id,
        text,
        parse_mode: 'html',
      }
    )

    if (send.status !== 200) {
      return res.status(400).json({
        error:
          'Não foi possível entrar em contato, tente novamente mais tarde.',
      })
    }

    return res.status(200).json({ message: 'Mensagem enviada com sucesso!' })
  } catch (err) {
    return res.status(400).json({
      error: 'Não foi possível entrar em contato, tente novamente mais tarde.',
    })
  }
}
