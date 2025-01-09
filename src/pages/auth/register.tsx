import { useState } from 'react';

const Register = () => {
    const [formData, setFormData] = useState({
        account_type: 'ngo',
        email: '',
        password: '',
        org_name: '',
        first_name: '',
        last_name: '',
        org_reg_id: '',
        webaddress: '',
    });

    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setError('');
        setIsLoading(true);

        // Validate required fields
        if (
            !formData.email ||
            !formData.password ||
            !formData.org_name ||
            !formData.first_name ||
            !formData.last_name ||
            !formData.org_reg_id ||
            !formData.webaddress
        ) {
            setError('Please fill in all fields');
            setIsLoading(false);
            return;
        }

        try {
            // Replace this URL with your actual registration endpoint
            const response = await fetch('/api/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                const result = await response.json();
                console.log('Registration successful:', result);
                // Redirect or show a success message here
            } else {
                setError('Registration failed, please try again.');
            }
        } catch (err) {
            setError('An error occurred. Please try again.');
        }

        setIsLoading(false);
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-[url('/assets/svg/bglogin.jpeg')] bg-no-repeat bg-cover">
            <div className="w-full max-w-lg bg-white p-4 rounded-lg shadow-lg">
                <h2 className="text-2xl font-bold text-center text-gray-700">Register</h2>

                {error && <p className="text-red-500 text-center mt-2">{error}</p>}

                <form onSubmit={handleSubmit} className="mt-6 space-y-2">
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-600">
                            Email Address
                        </label>
                        <input
                            id="email"
                            name="email"
                            type="email"
                            value={formData.email}
                            onChange={handleChange}
                            className="w-full px-4 py-1 mt-1 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            required
                        />
                    </div>

                    <div>
                        <label htmlFor="password" className="block text-sm font-medium text-gray-600">
                            Password
                        </label>
                        <input
                            id="password"
                            name="password"
                            type="password"
                            value={formData.password}
                            onChange={handleChange}
                            className="w-full px-4 py-1 mt-1 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            required
                        />
                    </div>

                    <div>
                        <label htmlFor="org_name" className="block text-sm font-medium text-gray-600">
                            Organization Name
                        </label>
                        <input
                            id="org_name"
                            name="org_name"
                            type="text"
                            value={formData.org_name}
                            onChange={handleChange}
                            className="w-full px-4 py-1 mt-1 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            required
                        />
                    </div>

                    <div>
                        <label htmlFor="first_name" className="block text-sm font-medium text-gray-600">
                            First Name
                        </label>
                        <input
                            id="first_name"
                            name="first_name"
                            type="text"
                            value={formData.first_name}
                            onChange={handleChange}
                            className="w-full px-4 py-1 mt-1 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            required
                        />
                    </div>

                    <div>
                        <label htmlFor="last_name" className="block text-sm font-medium text-gray-600">
                            Last Name
                        </label>
                        <input
                            id="last_name"
                            name="last_name"
                            type="text"
                            value={formData.last_name}
                            onChange={handleChange}
                            className="w-full px-4 py-1 mt-1 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            required
                        />
                    </div>

                    <div>
                        <label htmlFor="org_reg_id" className="block text-sm font-medium text-gray-600">
                            Organization Registration ID
                        </label>
                        <input
                            id="org_reg_id"
                            name="org_reg_id"
                            type="text"
                            value={formData.org_reg_id}
                            onChange={handleChange}
                            className="w-full px-4 py-1 mt-1 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            required
                        />
                    </div>

                    <div>
                        <label htmlFor="webaddress" className="block text-sm font-medium text-gray-600">
                            Website Address
                        </label>
                        <input
                            id="webaddress"
                            name="webaddress"
                            type="text"
                            value={formData.webaddress}
                            onChange={handleChange}
                            className="w-full px-4 py-1 mt-1 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            required
                        />
                    </div>

                    <button
                        type="submit"
                        disabled={isLoading}
                        className="w-full py-1 mt-2 text-white bg-secondaryBgColor rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                        {isLoading ? 'Registering...' : 'Register'}
                    </button>
                </form>

                <div className="mt-6 text-center flex items-center gap-4 justify-center">
                    <p className="text-sm text-gray-600">Already have an account?</p>
                    <a href="/login" className="text-secondaryBgColor hover:underline">Login</a>
                </div>
            </div>
        </div>
    );
};

export default Register;
