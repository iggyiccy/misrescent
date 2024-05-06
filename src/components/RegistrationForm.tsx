'use client'
import { useEffect, useState } from 'react'

interface Props {
  eventName: string
}

function RegistrationForm({ eventName }: Props) {
  const [isMounted, setIsMounted] = useState(false)
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [organisation, setOrganisation] = useState('')

  useEffect(() => {
    setIsMounted(true)
  }, [])

  const handleSubmit = () => {
    fetch('/api/handleregistration', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        eventName,
        firstName,
        lastName,
        email,
        phone,
        organisation,
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
        value={firstName}
        onChange={(e) => setFirstName(e.target.value)}
        placeholder="First Name 名字"
        required
        className="rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-gray-500"
      />
      <input
        type="text"
        value={lastName}
        onChange={(e) => setLastName(e.target.value)}
        placeholder="Last Name 姓氏"
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
      <input
        type="text"
        value={organisation}
        onChange={(e) => setOrganisation(e.target.value)}
        placeholder="Organisation 機構"
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

export default RegistrationForm
