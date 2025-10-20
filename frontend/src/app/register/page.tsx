import React, {JSX} from 'react'
import RegisterForm from '../../component/auth/register/RegisterForm'

export default function RegisterPage(): JSX.Element {
  return (
    <div
      className="min-h-screen bg-cover bg-center flex items-center justify-center"
      style={{ backgroundImage: "url('/auth/authbg.jpg')" }}
    >
      <div className="absolute inset-0 bg-black/65" />
      <div className="relative z-10 w-full flex items-center justify-center px-6 py-12">
        <RegisterForm />
      </div>
    </div>
  )
}
