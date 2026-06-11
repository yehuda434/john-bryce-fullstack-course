import  { useState } from "react";

interface ContactFormData {
    name: string;
    email: string;
    message: string;
}

function ContactForm2() {
    const [data, setData] = useState<ContactFormData>({
        name: "",
        email: "",
        message: "",
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>):void =>{
        setData({...data, [e.target.name]: e.target.value});
    };
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>):void =>{
        e.preventDefault();
        console.log(data);
    };
    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>Name:</label>
                <input
                    name="name"
                    type="text"
                    value={data.name}
                    onChange={(handleChange)}
                />
            </div>

            <div>
                <label>Email:</label>
                <input
                    name="email"
                    type="email"
                    value={data.email}
                    onChange={(handleChange)}
                />
            </div>

            <div>
                <label>Message:</label>
                <input
                    name="message"
                    type="text"
                    value={data.message}
                    onChange={(handleChange)}
                />
            </div>

            <button type="submit">
                Send
            </button>
        </form>
    );
}

export default ContactForm2;