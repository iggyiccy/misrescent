'use client'
import { useEffect, useState } from 'react'

function ContactForm() {
  const [isMounted, setIsMounted] = useState(false)
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [message, setMessage] = useState('')

  useEffect(() => {
    setIsMounted(true)
  }, [])

  const handleSubmit = () => {
    fetch('/api/handlecontactform', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name,
        email,
        phone,
        message,
      }),
    })
      .then((response) => response.json())
      .then((data) => console.log(data))
      .catch((error) => console.error('Error:', error))

    alert('Form submitted successfully! 表格提交成功！')
  }

  if (!isMounted) {
    return null
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="flex w-full flex-col justify-center space-y-4"
    >
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Name 姓名"
        required
        className="rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-gray-500"
      />
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email 郵箱"
        required
        className="rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-gray-500"
      />
      <input
        type="tel"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
        placeholder="Phone 電話號碼"
        required
        className="rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-gray-500"
      />
      <textarea
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="Message 訊息"
        required
        className="rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-gray-500"
      />
      <button
        type="submit"
        className="rounded-md bg-black px-4 py-2 text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500"
      >
        Submit 提交
      </button>
    </form>
  )
}

export default ContactForm
