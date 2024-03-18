import { useState } from "react";

const Form = () => {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    // is checked
    const [isChecked, setIschceked] = useState(false)
    // show modal data
    const [isShow, setIsShow] = useState(false)
    // storage all input data
    const [inputValues, setInputValues] = useState([])
    const handelOnSubmit = (e) => {
        e.preventDefault()
        if (!isChecked) {
            return
        }
    
        const inputInfo = {
            name: name,
            email: email,
            password: password,
        }
        const newIput = [...inputValues, inputInfo]
        setInputValues(newIput)
        setIsShow(true)
    }
    const handelClose = (close) => {
        setIsShow(close)
    }
    return (
        <div className="w-4/6 bg-slate-400 p-10">
            <form className="w-full " onSubmit={(e) => handelOnSubmit(e)}>
                <label htmlFor="">Name</label>
                <input className="border-2 w-full border-black " type="text" name="name" required placeholder="Name" onChange={(e) => setName(e.target.value)} />
                <br />
                <label >Email</label>
                <input className="border-2 w-full border-black  " type="email" name="email" required placeholder="email" onChange={(e) => setEmail(e.target.value)} />
                <br />
                <label >Password</label>
                <input className="border-2 w-full border-black  " type="password" name="password" required placeholder="password" onChange={(e) => setPassword(e.target.value)} />
                <br />
                <div className="flex justify-between">
                    <div>
                        <input type="checkbox" onChange={(e) => setIschceked(e.target.checked)} />please checked now
                    </div>
                    <button className="bg-black text-white p-2  text-rigth">Register Now!</button>
                </div>
            </form>
            {
                isShow === true ? <div className="fixed top-0 left-0 bg-black flex justify-center items-center w-full h-screen">
                    <button className="bg-white fixed top-0 right-2" onClick={() => handelClose(false)}>close</button>
                    <div className="bg-slate-500 h-1/2 w-1/2 flex flex-col justify-center items-center">

                        <h1 className="text-4xl">Success Your Registration</h1>
                        <h1 className="text-2xl">{name}</h1>
                        <h1 className="text-xl">{email}</h1>
                    </div>
                </div> : ""
            }
        </div>
    );
};

export default Form;