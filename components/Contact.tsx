'use client'

import { useState, useEffect } from 'react'
import emailjs from '@emailjs/browser'
import styles from './Contact.module.css'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  useEffect(() => {
    // Initialize EmailJS with public key
    const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
    if (publicKey) {
      emailjs.init(publicKey)
    }
  }, [])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus('idle')

    try {
      // EmailJS configuration
      const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || ''
      const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || ''
      const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || ''

      if (!serviceId || !templateId || !publicKey) {
        throw new Error('EmailJS configuration missing. Please check your environment variables.')
      }

      // Send email using EmailJS
      await emailjs.send(
        serviceId,
        templateId,
        {
          name: formData.name,
          email: formData.email,
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
          to_email: 'Idanshah58@gmail.com',
        },
        publicKey
      )

      setSubmitStatus('success')
      setFormData({ name: '', email: '', message: '' })
      
      // Reset status after 5 seconds
      setTimeout(() => setSubmitStatus('idle'), 5000)
    } catch (error) {
      console.error('Error sending email:', error)
      setSubmitStatus('error')
      setTimeout(() => setSubmitStatus('idle'), 5000)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="contact" className={styles.contact}>
      <div className={styles.backgroundPattern}></div>
      <div className="container">
        <h2 className="section-title">Get In Touch</h2>
        <div className={styles.content}>
          <div className={styles.info}>
            <p className={styles.description}>
              I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
            </p>
            <div className={styles.contactMethods}>
              <div className={styles.contactItem}>
                <div className={styles.contactRow}>
                  <div className={styles.contactInfo}>
                    <h3>📧 Email</h3>
                    <a href="mailto:Idanshah58@gmail.com" className={styles.contactLink}>
                      Idanshah58@gmail.com
                    </a>
                  </div>
                  <div className={styles.contactInfo}>
                    <h3>💼 LinkedIn</h3>
                    <a 
                      href="https://www.linkedin.com/in/shahridan-noriman" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className={styles.contactLink}
                    >
                      Shahridan Noriman
                    </a>
                  </div>
                  <div className={styles.contactInfo}>
                    <h3>📱 Instagram</h3>
                    <a 
                      href="https://www.instagram.com/ii_dann_" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className={styles.contactLink}
                    >
                      @ii_dann_
                    </a>
                  </div>
                  <div className={styles.contactInfo}>
                    <h3>🎵 TikTok</h3>
                    <a 
                      href="https://www.tiktok.com/@.shahridan" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className={styles.contactLink}
                    >
                      @.shahridan
                    </a>
                  </div>
                  <div className={styles.contactInfo}>
                    <h3>👤 Facebook</h3>
                    <a 
                      href="https://www.facebook.com/idan.skc/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className={styles.contactLink}
                    >
                      Shahridan Noriman
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <form className={styles.form} onSubmit={handleSubmit}>
            <div className={styles.formGroup}>
              <label htmlFor="name">Name</label>
              <input 
                type="text" 
                id="name" 
                name="name" 
                value={formData.name}
                onChange={handleChange}
                required 
              />
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="email">Email</label>
              <input 
                type="email" 
                id="email" 
                name="email" 
                value={formData.email}
                onChange={handleChange}
                required 
              />
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="message">Message</label>
              <textarea 
                id="message" 
                name="message" 
                rows={5} 
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>
            {submitStatus === 'success' && (
              <div className={styles.statusMessage} style={{ color: '#10b981' }}>
                ✓ Message sent successfully! I'll get back to you soon.
              </div>
            )}
            {submitStatus === 'error' && (
              <div className={styles.statusMessage} style={{ color: '#ef4444' }}>
                ✗ Error sending message. Please try again.
              </div>
            )}
            <button 
              type="submit" 
              className={styles.submitBtn}
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}
