import  { useState } from "react";

interface ContactFormData {
    name: string;
    email: string;
    message: string;
}

function ContactForm() {
    const [name, setName] = useState<string>("");
    const [email, setEmail] = useState<string>("");
    const [message, setMessage] = useState<string>("");

    const handleNameChange = ( e: React.ChangeEvent<HTMLInputElement>):void =>{
        setName(e.target.value);
    };

    const handleEmailChange = (
        e: React.ChangeEvent<HTMLInputElement>
    ): void => {
        setEmail(e.target.value);
    };

    const handleMessageChange = (
        e: React.ChangeEvent<HTMLTextAreaElement>
    ): void => {
        setMessage(e.target.value);
    };

    const handleSubmit = (
        e: React.FormEvent<HTMLFormElement>
    ): void => {
        e.preventDefault();

        if (
            name.trim() === "" ||
            email.trim() === "" ||
            message.trim() === ""
        ) {
            alert("All fields are required");
            return;
        }

        const formData: ContactFormData = {
            name,
            email,
            message,
        };

        console.log(formData);

        setName("");
        setEmail("");
        setMessage("");
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>Name:</label>
                <input
                    type="text"
                    value={name}
                    onChange={(handleNameChange)}
                />
            </div>

            <div>
                <label>Email:</label>
                <input
                    type="email"
                    value={email}
                    onChange={handleEmailChange}
                />
            </div>

            <div>
                <label>Message:</label>
                <textarea
                    value={message}
                    onChange={handleMessageChange}
                />
            </div>

            <button type="submit">
                Send
            </button>
        </form>
    );
}

export default ContactForm;