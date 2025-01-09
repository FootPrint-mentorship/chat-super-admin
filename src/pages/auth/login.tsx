import {ReactNode, useState} from 'react';
import Link from "next/link";
import {useAppDispatch} from "@/hook/useReduxTypes";
import {login} from "@/redux/auth/authSlice";
import {UnAuthorize} from "@/lib/auth/UnAuthorized";

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');



    const dispatch = useAppDispatch();


    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!email || !password) {
            setError('Please fill in both fields');
            return;
        }
        try {
          await dispatch(login({email, password}));
        } catch (error) {
            console.log(error)

        }

        console.log('Login successful');
    };

    return (
        <div className="flex items-center justify-center p-4 md:p-0 min-h-screen bg-[url('/assets/svg/bglogin.jpeg')] bg-no-repeat bg-cover bg-center">
            <div className="w-full max-w-sm bg-white p-4 md:p-8 rounded-lg shadow-lg">
                <h2 className="text-2xl font-bold text-center text-gray-700">Login</h2>

                {error && <p className="text-red-500 text-center mt-2">{error}</p>}

                <form onSubmit={handleSubmit} className="mt-6 space-y-4">
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-600">
                            Email Address
                        </label>
                        <input
                            id="email"
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="w-full px-4 py-2 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            required
                        />
                    </div>

                    <div>
                        <label htmlFor="password" className="block text-sm font-medium text-gray-600">
                            Password
                        </label>
                        <input
                            id="password"
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="w-full px-4 py-2 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            required
                        />
                    </div>

                    <button
                        type="submit"
                        className="w-full py-2 mt-4 text-white bg-secondaryBgColor rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                        Login
                    </button>
                </form>

                <div className="mt-6 text-center flex items-center gap-4">
                    <p className="text-sm text-gray-600">Don&#39;t have an account?</p>
                    <Link href="/auth/register" className="text-secondaryBgColor hover:underline">Create account</Link>
                </div>
            </div>
        </div>
    );
};

Login.getLayout = (page: ReactNode) => (
    <UnAuthorize>
        {page}
    </UnAuthorize>
)

export default Login;
