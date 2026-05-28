import { useState } from "react"
interface FormData {
    name: string
    email: string
    message: string
}
export default function Ex1Form(): React.JSX.Element {
    const [data, setData] = useState<FormData>({
        name: '',
        email: '',
        message: ''
    })
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
        console.log(e.target.value)
        console.log(e.target.name)
        console.log(data)
        setData({
            ...data,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
        e.preventDefault()
        console.log(e)
        console.log(data)
    }

    return (
        <>
            <input name="name" value={data.name} onChange={handleChange} />
            <input name="email" value={data.email} onChange={handleChange} />
            <input name="message" value={data.message} onChange={handleChange} />
            <button onClick={handleChange}>Submit</button>
        </>
    )
}