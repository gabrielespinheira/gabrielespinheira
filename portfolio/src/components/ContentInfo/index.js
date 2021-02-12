import React, { useState } from 'react'
import axios from 'axios'
import { FiLinkedin, FiGithub, FiAtSign, FiX } from 'react-icons/fi'

import styles from './style.module.scss'

const ContentInfo = () => {
  const [submitText, setSubmitText] = useState('Enviar mensagem')
  const [contact, setContact] = useState(false)
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

  const handleContact = async (e) => {
    e.preventDefault()

    if (name == '' || email == '' || message == '') {
      return
    }

    try {
      const contact = await axios.post('/api/contact', {
        name,
        email,
        message,
      })

      if (contact.status !== 200) {
        return setSubmitText('Tente novamente')
      }

      setName('')
      setEmail('')
      setMessage('')
      setContact(false)
      setSubmitText('Enviar mensagem')
    } catch (err) {
      return setSubmitText('Tente novamente')
    }
  }

  return (
    <div className={styles.content_info}>
      <h1>Gabriel Araujo</h1>
      <h2>Engenheiro de Software</h2>

      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean pulvinar
        tincidunt ligula et mattis. Sed sit amet ex ut ligula commodo viverra
        non vulputate metus. Cras ac tempor sapien. Vivamus tristique quam sed
        sapien imperdiet, a venenatis ex fringilla. Nunc vel lectus nisl.{' '}
      </p>

      <div className={styles.social}>
        <a
          href="https://www.linkedin.com/in/ogabrielaraujo/"
          target="_blank"
          title="LinkedIn"
          rel="noreferrer"
        >
          <FiLinkedin />
        </a>
        <a
          href="https://github.com/ogabrielaraujo"
          target="_blank"
          title="GitHub"
          rel="noreferrer"
        >
          <FiGithub />
        </a>
        <a
          href="mailto:gabriiel66@gmail.com"
          target="_blank"
          title="E-mail"
          rel="noreferrer"
        >
          <FiAtSign />
        </a>
      </div>

      <div
        className={styles.contact}
        style={{ display: contact ? 'flex' : 'none' }}
      >
        <div className="close" onClick={() => setContact(false)}>
          <FiX size={24} />
        </div>

        <h3>Entrar em contato</h3>

        <form onSubmit={handleContact}>
          <input
            type="text"
            name="nome"
            placeholder="Nome"
            value={name}
            onChange={(e) => {
              setName(e.target.value)
            }}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="E-mail"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value)
            }}
            required
          />
          <textarea
            name="mensagem"
            placeholder="Mensagem"
            value={message}
            onChange={(e) => {
              setMessage(e.target.value)
            }}
            required
          ></textarea>
          <button type="submit">{submitText}</button>
        </form>
      </div>

      <button onClick={() => setContact(true)}>Entrar em contato</button>
    </div>
  )
}

export default ContentInfo
