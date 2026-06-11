import React, { useState } from 'react'
interface SignupFormData {
    name: string
    email: string
    age: string
  }
  
  function SignupForm(): React.JSX.Element {
    const [form, setForm] = useState<SignupFormData>({
      name: '',
      email: '',
      age: ''
    })
  
    const handleChange = (
      e: React.ChangeEvent<HTMLInputElement>
    ): void => {
        console.log(e.target.value)//ab
        console.log(e.target.name)//email
        // { name: '', email: 'ab', age: '80' } 
      setForm({
        ...form,
        [e.target.name]: e.target.value
      })
    }

    const handleSubmit = (): void => {
      console.log(form)
    }
  
    return (
      <>
      <form>
        <input name="name" value={form.name} onChange={handleChange} />
        <input name="email" value={form.email} onChange={handleChange} />
        <input name="age" value={form.age} onChange={handleChange} />
      </form>
      <button type="button" onClick={handleSubmit}>Signup</button>
      </>
    )
  }

export default SignupForm