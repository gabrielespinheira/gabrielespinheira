import React, { useState } from 'react'
import axios from 'axios'
import { motion } from 'framer-motion'
import { FiX } from 'react-icons/fi'

import styles from './style.module.scss'

const Contact = ({ isActive, setIsActive }) => {
  const [submitText, setSubmitText] = useState('Enviar mensagem')
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

  const variants = {
    closed: {
      clipPath: 'circle(0px at 140px 440px)',
      transition: {
        type: 'spring',
        stiffness: 20,
        restDelta: 2,
      },
    },
    open: {
      clipPath: `circle(630px at 50px 50px)`,
      transition: {
        type: 'spring',
        stiffness: 20,
        restDelta: 2,
      },
    },
  }

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
    <motion.div
      className={styles.contact}
      animate={isActive ? 'open' : 'closed'}
      transition={{ duration: 0.2 }}
      variants={variants}
    >
      <div className="close" onClick={() => setIsActive(false)}>
        <FiX size={24} />
      </div>

      <h3>Entrar em contato</h3>

      <form onSubmit={handleContact}>
        <label htmlFor="nome">
          <input
            type="text"
            name="nome"
            id="nome"
            placeholder="Nome"
            value={name}
            onChange={(e) => {
              setName(e.target.value)
            }}
            required
          />
        </label>

        <label htmlFor="email">
          <input
            type="email"
            name="email"
            id="email"
            placeholder="E-mail"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value)
            }}
            required
          />
        </label>

        <label htmlFor="mensagem">
          <textarea
            name="mensagem"
            placeholder="Mensagem"
            id="mensagem"
            value={message}
            onChange={(e) => {
              setMessage(e.target.value)
            }}
            required
          ></textarea>
        </label>

        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 1 }}
          onClick={() => setIsActive(true)}
          type="submit"
        >
          {submitText}
        </motion.button>
      </form>
    </motion.div>
  )
}

export default Contact
