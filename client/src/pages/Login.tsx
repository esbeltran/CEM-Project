import { useNavigate } from "react-router-dom"

function Login() {
    let navigate = useNavigate();
    const signuproute = () => {
        navigate("/signup");
    }
    const homepageroute = () => {
        navigate("/");
    }
    return (
        <div className='w-screen h-screen flex flex-col space-y-3 place-content-start pt-14'>
            <button onClick={()=> homepageroute()} className="place-self-center">
                <img src="/src/assets/react.svg" className="w-28" alt="Flowbite Logo" /> 
            </button>
            <h1 className="title font-bold">Log in</h1>
            
            <div className="rounded-md w-3/4 p-4 place-self-center shadow-lg flex flex-row">
            {/* log in form (left side) */}
                <div className="w-1/2 flex flex-col space-y-3 px-4">
                    <h2 className="font-bold text-start">Log In</h2>
                    <input type="text" id="email" className="input-field 
                    border-gray-300 focus:ring-plant focus:border-plant" placeholder="Email" required />
                    <input type="password" id="password" className="input-field border-gray-300 focus:ring-plant focus:border-plant" placeholder="Password" required />
                    <div className="flex flex-row justify-between pb-4">
                        <div className="flex text-sm space-x-1">
                        <input type="checkbox"
                        id="password" className="rounded-md p-1" placeholder="Password" required />
                        <p>Keep me Logged In</p>
                        </div>
                        <button className="text-xs text-blue-500 hover:text-blue-900">
                            Forgot Password?
                        </button>
                    </div>
                    <button className="button bg-plant text-white hover:bg-green-800">
                        <span>
                            Log In
                        </span>
                    </button>
                    <button onClick={()=> signuproute()} className="button bg-white text-plant hover:bg-slate-200">
                        <span>
                            Create Account
                        </span>
                    </button>
                </div>
            {/* description (right side) */}
                <div className="w-3/5 flex flex-col place-content-center space-y-2">
                <img src="/src/assets/react.svg" className="w-20 place-self-center" alt="Flowbite Logo" /> 
                <h2 className='text-md'>
                    MAJAYJAY AGRICULTURAL SYSTEM
                </h2>
                <h1 className='text-plant font-bold text-xl'>
                    INVENTORY MANAGEMENT SYSTEM
                </h1>
                </div>
            </div>
        </div>
    )
}

export default Login