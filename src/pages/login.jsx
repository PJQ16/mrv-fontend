import React from 'react';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';

const Login = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const navigate = useNavigate();

  const validateEmail = (value) => {
    // ตรวจสอบว่าเป็นอีเมลหรือไม่
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(value) || 'Invalid email format';
  };

  const validatePassword = (value) => {
    // ตรวจสอบความยาวรหัสผ่าน
    return value.length >= 8 || 'Password must be at least 8 characters long';
  };

  const onSubmit = (data) => {
    // สมมุติว่าเป็นการเข้าสู่ระบบสำเร็จ
    console.log('Form Data:', data);
    navigate('/');
  };

  return (
    <div className="font-[sans-serif]">
      <div className="min-h-screen flex flex-col items-center justify-center py-6 px-4 bg-white">
        <div className="grid md:grid-cols-2 items-center gap-4 max-w-6xl w-full">
          <div className="border border-gray-300 rounded-lg p-6 max-w-md shadow-[0_2px_22px_-4px_rgba(93,96,127,0.2)] max-md:mx-auto">
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
              <div className="mb-8">
                <h3 className="text-gray-800 text-3xl font-extrabold">Sign in</h3>
                <p className="text-gray-500 text-sm mt-4 leading-relaxed">Sign in to your account and explore a world of possibilities. Your journey begins here.</p>
              </div>

              <div>
                <label className="text-gray-800 text-sm mb-2 block">Email</label>
                <div className="relative flex items-center">
                  <input 
                    {...register('username', { validate: validateEmail })} 
                    type="email" 
                    className={`w-full text-sm bg-white text-gray-800 border border-gray-300 px-4 py-3 rounded-lg outline-blue-600 ${errors.username ? 'border-red-500' : ''}`}
                    placeholder="Enter email" 
                  />
                </div>
                <p> {errors.username && <p className="text-red-500 text-sm mt-1">{errors.username.message}</p>}</p>
              </div>

              <div>
                <label className="text-gray-800 text-sm mb-2 block">Password</label>
                <div className="relative flex items-center">
                  <input 
                    {...register('password', { validate: validatePassword })} 
                    type="password" 
                    className={`w-full text-sm bg-white text-gray-800 border border-gray-300 px-4 py-3 rounded-lg outline-blue-600 ${errors.password ? 'border-red-500' : ''}`}
                    placeholder="Enter password" 
                  />
                </div>
                <p>{errors.password && <p className="text-red-500 text-sm mt-1">{errors.password.message}</p>}</p>
              </div>

              <div className="flex flex-wrap items-center justify-between gap-4">
                <div className="flex items-center">
                  <input id="remember-me" name="remember-me" type="checkbox" className="h-4 w-4 shrink-0 text-blue-600 focus:ring-blue-500 border-gray-300 rounded" />
                  <label htmlFor="remember-me" className="ml-3 block text-sm text-gray-800">
                    Remember me
                  </label>
                </div>

                <div className="text-sm">
                  <Link to="/signup" className="text-blue-600 hover:underline font-semibold">
                    Forgot your password?
                  </Link>
                </div>
              </div>

              <div className="!mt-8">
                <button type="submit" className="w-full shadow-xl py-3 px-4 text-sm tracking-wide rounded-lg text-white bg-blue-600 hover:bg-blue-700 focus:outline-none">
                  Log in
                </button>
              </div>

              <p className="text-sm !mt-8 text-center text-gray-800">Don't have an account <Link  to="/signup" className="text-blue-600 font-semibold hover:underline ml-1 whitespace-nowrap">Register here</Link></p>
            </form>
          </div>
          <div className="lg:h-[400px] md:h-[300px] max-md:mt-8">
            <img src="https://readymadeui.com/login-image.webp" className="w-full h-full max-md:w-4/5 mx-auto block object-cover" alt="Dining Experience" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
