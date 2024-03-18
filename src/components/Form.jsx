
const Form = () => {
    return (
        <div className="w-4/6 bg-slate-400 p-10">
            <form className="w-full">
                <label htmlFor="">Name</label>
                <input className="border-2 w-full border-black " type="text" name="name" placeholder="Name"/>
                <br />
                <label >Email</label>
                <input className="border-2 w-full border-black  mt-5" type="email" name="email" placeholder="email"/>
                <br />
                <label >Password</label>
                <input className="border-2 w-full border-black  mt-5" type="password" name="password" placeholder="password"/>
                <br />
                <button className="bg-black text-white p-2 mt-2 text-rigth">Register Now!</button>
            </form>
        </div>
    );
};

export default Form;