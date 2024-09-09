import React, { useState, useEffect } from 'react';
import { useForm, Controller } from 'react-hook-form';
import Select from 'react-select';
import { useNavigate, Link } from 'react-router-dom';
import useStore from '../store/registerStore';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import VisibilityIcon from '@mui/icons-material/Visibility';

export default function SignUp() {
    const { control, handleSubmit, register, watch, setValue, formState: { errors } } = useForm();
    const { data, isLoading, getAddressData } = useStore((state) => ({
        data: state.data,
        isLoading: state.isLoading,
        getAddressData: state.getAddressData
    }));
    const [provinces, setProvinces] = useState([]);
    const [amphures, setAmphures] = useState([]);
    const [tambons, setTambons] = useState([]);
    const [postalCodes, setPostalCodes] = useState([]);
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const navigate = useNavigate();

    // Fetch address data when component mounts
    useEffect(() => {
        getAddressData();
    }, [getAddressData]);

    // Populate provinces dropdown
    useEffect(() => {
        if (data) {
            const provinceOptions = data.map(province => ({
                value: province.id,
                label: province.name_th
            }));
            setProvinces(provinceOptions);
        }
    }, [data]);

    // Handle province change
    const handleProvinceChange = (selectedOption) => {
        const provinceId = selectedOption?.value;
        if (provinceId) {
            const selectedProvince = data.find(province => province.id === provinceId);
            const amphureOptions = selectedProvince.amphure.map(amphure => ({
                value: amphure.id,
                label: amphure.name_th
            }));
            setAmphures(amphureOptions);
            setTambons([]);
            setPostalCodes([]);
            setValue('amphure', null);
            setValue('tambon', null);
            setValue('postalCode', null);
        }
    };

    // Handle amphure change
    const handleAmphureChange = (selectedOption) => {
        const amphureId = selectedOption?.value;
        if (amphureId) {
            const selectedProvince = data.find(province => province.id === watch('province')?.value);
            const selectedAmphure = selectedProvince.amphure.find(amphure => amphure.id === amphureId);
            const tambonOptions = selectedAmphure.tambon.map(tambon => ({
                value: tambon.id,
                label: tambon.name_th
            }));
            setTambons(tambonOptions);
            setPostalCodes([]);
            setValue('tambon', null);
            setValue('postalCode', null);
        }
    };

    // Handle tambon change
    const handleTambonChange = (selectedOption) => {
        const tambonId = selectedOption?.value;
        if (tambonId) {
            const selectedProvince = data.find(province => province.id === watch('province')?.value);
            const selectedAmphure = selectedProvince.amphure.find(amphure => amphure.id === watch('amphure')?.value);
            const selectedTambon = selectedAmphure.tambon.find(tambon => tambon.id === tambonId);
            setPostalCodes([{
                value: selectedTambon.zip_code,
                label: selectedTambon.zip_code
            }]);
            setValue('postalCode', null);
        }
    };

    const onSubmit = (formData) => {
        console.log('Form Data:', formData);
        navigate('/');
    };

    const validateEmail = (value) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(value) || 'Invalid email format';
    };
    
    const validatePassword = (value) => {
        return value.length >= 8 || 'Password must be at least 8 characters long';
    };
    
    return (
        <div className="font-[sans-serif]">
            <div className="min-h-screen flex flex-col items-center justify-center py-6 px-4 bg-white">
                <div className="grid md:grid-cols-2 items-center gap-4 max-w-6xl w-full">
                    <div className="rounded-lg p-5 max-w-md shadow-[0_2px_22px_-4px_rgba(93,96,127,0.2)] max-md:mx-auto">
                        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                            <div className="mb-8">
                                <h3 className="text-gray-800 text-3xl font-extrabold">Sign up</h3>
                                <p className="text-gray-500 text-sm mt-4 leading-relaxed">Sign in to your account and explore a world of possibilities. Your journey begins here.</p>
                            </div>

                            <div>
                                <label className="text-gray-800 text-sm mb-2 block">ชื่อ</label>
                                <input 
                                    {...register('firstName', { required: 'First name is required' })} 
                                    type="text" 
                                    className={`w-full text-sm bg-white text-gray-800 border border-gray-300 px-4 py-3 rounded-lg outline-blue-600 ${errors.firstName ? 'border-red-500' : ''}`}
                                    placeholder="ระบุชื่อ" 
                                />
                                <p className="text-red-500 text-sm mt-1">{errors.firstName && errors.firstName.message}</p>
                            </div>

                            <div>
                                <label className="text-gray-800 text-sm mb-2 block">นามสกุล</label>
                                <input 
                                    {...register('lastName', { required: 'Last name is required' })} 
                                    type="text" 
                                    className={`w-full text-sm bg-white text-gray-800 border border-gray-300 px-4 py-3 rounded-lg outline-blue-600 ${errors.lastName ? 'border-red-500' : ''}`}
                                    placeholder="ระบุนามสกุล" 
                                />
                                <p className="text-red-500 text-sm mt-1">{errors.lastName && errors.lastName.message}</p>
                            </div>

                            <div>
                                <label className="text-gray-800 text-sm mb-2 block">Email</label>
                                <input 
                                    {...register('email', { validate: validateEmail })} 
                                    type="email" 
                                    className={`w-full text-sm bg-white text-gray-800 border border-gray-300 px-4 py-3 rounded-lg outline-blue-600 ${errors.email ? 'border-red-500' : ''}`}
                                    placeholder="Enter email" 
                                />
                                <p className="text-red-500 text-sm mt-1">{errors.email && errors.email.message}</p>
                            </div>

                            <div>
                                <label className="text-gray-800 text-sm mb-2 block">รหัสผ่าน</label>
                                <div className="relative">
                                    <input 
                                        {...register('password', { validate: validatePassword })} 
                                        type={showPassword ? "text" : "password"} 
                                        className={`w-full text-sm bg-white text-gray-800 border border-gray-300 px-4 py-3 rounded-lg outline-blue-600 ${errors.password ? 'border-red-500' : ''}`}
                                        placeholder="Enter password" 
                                    />
                                    <button
                                        type="button"
                                        onClick={() => setShowPassword(!showPassword)}
                                        className="absolute inset-y-0 right-0 flex items-center pr-3"
                                    >
                                        {showPassword ? <VisibilityIcon sx={{color:'darkorange'}} /> : <VisibilityOffIcon />}
                                    </button>
                                </div>
                                <p className="text-red-500 text-sm mt-1">{errors.password && errors.password.message}</p>
                            </div>

                            <div>
                                <label className="text-gray-800 text-sm mb-2 block">ยืนยันรหัสผ่าน</label>
                                <div className="relative">
                                    <input 
                                        {...register('confirmPassword', { validate: (value) => value === watch('password') || 'Passwords do not match' })} 
                                        type={showConfirmPassword ? "text" : "password"} 
                                        className={`w-full text-sm bg-white text-gray-800 border border-gray-300 px-4 py-3 rounded-lg outline-blue-600 ${errors.confirmPassword ? 'border-red-500' : ''}`}
                                        placeholder="Confirm password" 
                                    />
                                    <button
                                        type="button"
                                        onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                                        className="absolute inset-y-0 right-0 flex items-center pr-3"
                                    >
                                        {showConfirmPassword ? <VisibilityIcon sx={{color:'darkorange'}} /> : <VisibilityOffIcon />}
                                    </button>
                                </div>
                                <p className="text-red-500 text-sm mt-1">{errors.confirmPassword && errors.confirmPassword.message}</p>
                            </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 sm:grid:cols-1 gap-4">
                            <div>
                                <label className="text-gray-800 text-sm mb-2 block">จังหวัด</label>
                                <Controller
                                    name="province"
                                    control={control}
                                    rules={{ required: 'Province is required' }}
                                    render={({ field }) => (
                                        <Select
                                            {...field}
                                            options={provinces}
                                            onChange={(selectedOption) => {
                                                field.onChange(selectedOption);
                                                handleProvinceChange(selectedOption);
                                            }}
                                            className={`w-full text-sm bg-white text-gray-800 border border-gray-300 rounded-lg ${errors.province ? 'border-red-500' : ''}`}
                                            classNamePrefix="react-select"
                                            placeholder="เลือกจังหวัด"
                                            isLoading={isLoading}
                                        />
                                    )}
                                />
                                <p className="text-red-500 text-sm mt-1">{errors.province && errors.province.message}</p>
                            </div>

                            <div>
                                <label className="text-gray-800 text-sm mb-2 block">อำเภอ</label>
                                <Controller
                                    name="amphure"
                                    control={control}
                                    rules={{ required: 'Amphure is required' }}
                                    render={({ field }) => (
                                        <Select
                                            {...field}
                                            options={amphures}
                                            onChange={(selectedOption) => {
                                                field.onChange(selectedOption);
                                                handleAmphureChange(selectedOption);
                                            }}
                                            className={`w-full text-sm bg-white text-gray-800 border border-gray-300 rounded-lg ${errors.amphure ? 'border-red-500' : ''}`}
                                            classNamePrefix="react-select"
                                            placeholder="เลือกอำเภอ"
                                            isDisabled={amphures.length === 0}
                                        />
                                    )}
                                />
                                <p className="text-red-500 text-sm mt-1">{errors.amphure && errors.amphure.message}</p>
                            </div>

                            <div>
                                <label className="text-gray-800 text-sm mb-2 block">ตำบล</label>
                                <Controller
                                    name="tambon"
                                    control={control}
                                    rules={{ required: 'Tambon is required' }}
                                    render={({ field }) => (
                                        <Select
                                            {...field}
                                            options={tambons}
                                            onChange={(selectedOption) => {
                                                field.onChange(selectedOption);
                                                handleTambonChange(selectedOption);
                                            }}
                                            className={`w-full text-sm bg-white text-gray-800 border border-gray-300 rounded-lg ${errors.tambon ? 'border-red-500' : ''}`}
                                            classNamePrefix="react-select"
                                            placeholder="เลือกตำบล"
                                            isDisabled={tambons.length === 0}
                                        />
                                    )}
                                />
                                <p className="text-red-500 text-sm mt-1">{errors.tambon && errors.tambon.message}</p>
                            </div>

                            <div>
                                <label className="text-gray-800 text-sm mb-2 block">รหัสไปรษณีย์</label>
                                <Controller
                                    name="postalCode"
                                    control={control}
                                    rules={{ required: 'Postal code is required' }}
                                    render={({ field }) => (
                                        <Select
                                            {...field}
                                            options={postalCodes}
                                            className={`w-full text-sm bg-white text-gray-800 border border-gray-300 rounded-lg ${errors.postalCode ? 'border-red-500' : ''}`}
                                            classNamePrefix="react-select"
                                            placeholder="เลือกไปรษณีย์"
                                            isDisabled={postalCodes.length === 0}
                                        />
                                    )}
                                />
                                <p className="text-red-500 text-sm mt-1">{errors.postalCode && errors.postalCode.message}</p>
                            </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 sm:grid-cols-1 gap-4">
                                <div>
                                    <label className="text-gray-800 text-sm mb-2 block">สังกัด</label>
                                    <select 
                                        className={`w-full text-sm bg-white text-gray-800 border border-gray-300 px-4 py-3 rounded-lg outline-blue-600 ${errors.affiliation ? 'border-red-500' : ''}`}
                                        {...register('affiliation', { required: 'Affiliation is required' })}
                                    >
                                        <option value="">เลือก</option>
                                        {/* Add more options here */}
                                    </select>
                                    <p className="text-red-500 text-sm mt-1">{errors.affiliation && errors.affiliation.message}</p>
                                </div>

                                <div>
                                    <label className="text-gray-800 text-sm mb-2 block">หน่วยงาน</label>
                                    <select 
                                        className={`w-full text-sm bg-white text-gray-800 border border-gray-300 px-4 py-3 rounded-lg outline-blue-600 ${errors.organization ? 'border-red-500' : ''}`}
                                        {...register('organization', { required: 'Organization is required' })}
                                    >
                                        <option value="">เลือก</option>
                                        {/* Add more options here */}
                                    </select>
                                    <p className="text-red-500 text-sm mt-1">{errors.organization && errors.organization.message}</p>
                                </div>
                            </div>

                            <div className="!mt-8">
                                <button type="submit" className="w-full shadow-xl py-3 px-4 text-sm tracking-wide rounded-lg text-white bg-green-600 hover:bg-green-500 focus:outline-none">
                                    ลงทะเบียน
                                </button>
                            </div>
                        </form>
                    </div>
                    <div className="lg:h-[400px] md:h-[300px] max-md:mt-8">
                        <img src="https://readymadeui.com/login-image.webp" className="w-full h-full max-md:w-4/5 mx-auto block object-cover" alt="Dining Experience" />
                        <p className="text-sm !mt-8 text-center text-gray-800">
                            <Link to="/login" className="w-full shadow-xl py-3 px-4 text-sm tracking-wide rounded-lg text-white bg-green-600 hover:bg-green-500 focus:outline-none">
                                เข้าสู่ระบบ
                            </Link>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

