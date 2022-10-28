import { ReactNode } from 'react';
import { clsx } from 'clsx';

export interface TextInputProps {
    placeholder?: string

}

export function TextInput({ placeholder}: TextInputProps) {


    return (
        <input
            className={clsx(
                'py-4 px-3 rounded w-full bg-gray-800 text-gray-100 tex-gray-100 text-xs placeholder:text-gray-400',
            )}
            placeholder={placeholder}
        />   
	)
}