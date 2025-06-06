import React, {useState} from 'react';
import {RxCross2} from "react-icons/rx";
import {FaFacebook} from "react-icons/fa";
import {SiGmail} from "react-icons/si";


function Index() {


    const [show, setShow] = useState(false);
    const[showSignup,setShowSignup]=useState(false);
    const [formInput, setFormInput] = useState({
        name: '',
        email: '',
        password: ''
    })

    function handleInputChange(e) {
        setFormInput((prevState) => {
            return {
                ...prevState,
                [e.target.name]: e.target.value
            }
        })
    }


    function handleSignup(){
        setShow((p)=>!p);
        setShowSignup(true);
    }

    function handleBox(){
        setShow(false);
        setShowSignup(false);
    }
    return (
        <div className="bg-[#18191b] text-white min-h-screen w-full">

            <div
                className={`w-screen ${show ? 'visible opacity-100' : 'invisible opacity-20'} transition-all duration-400 h-screen fixed bg-[#262627ad] flex justify-center items-center`}>
                <div className="w-[360px] bg-[#323334] m-auto px-6 py-4 rounded-md relative">
                    <div onClick={handleBox}
                         className="absolute right-4 top-4 text-xl cursor-pointer text-white"><RxCross2/></div>
                    <h2 className="text-white pb-4 text-center text-xl">Login and sign up in seconds</h2>

                    <form>



                        <div className="flex flex-col gap-3 mb-3 text-white">

                            {showSignup && <><label htmlFor="name">Name</label>
                                <input onChange={(e) => handleInputChange(e)} value={formInput.name} type="text"
                                       name="name" placeholder="name" id="name"
                                       className="px-3 py-2 rounded-md border outline-none border-[#66644f] focus:border-purple-400 bg-transparent"/></>}

                            <label htmlFor="email">Email</label>
                            <input onChange={(e) => handleInputChange(e)} value={formInput.email} type="email"
                                   name="email" placeholder="email" id="email"
                                   className="px-3 py-2 rounded-md border outline-none border-[#66644f] focus:border-purple-400 bg-transparent"/>

                            <label htmlFor="password">Password</label>
                            <input onChange={(e) => handleInputChange(e)} value={formInput.password} type="password"
                                   name="password" placeholder="password" id="password"
                                   className="px-3 py-2 rounded-md border outline-none border-[#66644f] focus:border-purple-400 bg-transparent"/>


                        </div>

                        <div>
                            <button
                                className="px-3 py-2 rounded-md bg-purple-500 w-full outline-none hover:bg-purple-600">Signin
                            </button>
                        </div>
                        <div className="flex py-4 justify-between items-center px-3">
                            <div className="w-[44%] h-[1px] bg-slate-400"></div>
                            <div className="w-[4%]  text-center flex pb-1  text-white">or</div>
                            <div className="w-[44%] h-[1px] bg-slate-400"></div>
                        </div>
                        <div>

                            <button
                                className="px-3 py-2 rounded-md bg-[#be3144] w-full outline-none hover:bg-red-700 flex items-center justify-center gap-2">
                                <span><SiGmail/></span>
                                <span>Login with Gmail</span>
                            </button>
                        </div>
                        <div>
                            <button
                                className="px-3 mt-4 py-2 rounded-md bg-blue-500 w-full outline-none hover:bg-blue-600 flex items-center justify-center gap-2">
                                <span><FaFacebook/></span>
                                <span>Login with facebook</span>
                            </button>
                        </div>

                    </form>

                </div>
            </div>


            <div className="bg-[#212223] shadow-md">
                <div className="w-[93%] m-auto py-3">
                    <div className="flex justify-between items-center">
                        <div className="w-[80px] h-[48px]">
                            <img className="w-full h-full "
                                 src="https://static.canva.com/web/images/8439b51bb7a19f6e65ce1064bc37c197.svg"
                                 alt="canva_logo"/>
                        </div>

                        <div className="flex gap-4">
                            <button onClick={() => setShow(true)}
                                    className="py-2 w-[80px] bg-teal-600 transition-all hover:bg-teal-700 font-medium text-white rounded-sm">SignIn
                            </button>
                            <button
                                onClick={()=>handleSignup()}
                                className="py-2 w-[80px] bg-purple-600 transition-all hover:bg-purple-700 font-medium text-white rounded-sm">SignUp
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            <div className="w-full h-full justify-center items-center p-4 ">
                <div className="py-[170px] flex justify-center items-center flex-col gap-6">
                    <h2 className="text-6xl font-bold text-[#c7c6c8]">What will you design today?</h2>
                    <span className="text-[#aca9a9] text-2xl font-medium">Canva make it easy to create and share professional designs. </span>
                    <button
                        className="py-2 w-[200px] text-center bg-purple-600 transition-all hover:bg-blue-400 font-medium text-white rounded-sm">SignUp
                        for Free
                    </button>
                </div>
            </div>

        </div>
    );
}

export default Index;