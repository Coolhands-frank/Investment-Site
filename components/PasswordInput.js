"use client"
import { useState } from 'react';
import { Eye, EyeOff } from 'lucide-react';

export default function PasswordInput({ placeholder, value, name, onChange }) {
    const [passwordVisible, setPasswordVisible] = useState(false);

    const toggleVisibility = () => {
        setPasswordVisible(!passwordVisible);
    };

    return (
        <div className="relative w-full max-w-sm">
            {/* Password Input */}
            <input
                type={passwordVisible ? 'text' : 'password'}
                name={ name }
                placeholder={ placeholder }
                className="w-full p-3 pr-10 border rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
                value={ value }
                onChange={ onChange }
                required
            />

            {/* Toggle Icon */}
            <button
                type="button"
                onClick={toggleVisibility}
                className="absolute inset-y-0 right-3 flex items-center"
            >
                {passwordVisible ? (
                    <EyeOff className="w-5 h-5 text-gray-500 hover:text-gray-700" />
                ) : (
                    <Eye className="w-5 h-5 text-gray-500 hover:text-gray-700" />
                )}
            </button>
        </div>
    );
}