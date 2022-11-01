import React from 'react'
import useInput from '../../../hooks/useInput'

type InputProps = {
    type: string,

    value?: string,
    placeholder?: string,
    onChange?: any,
    readonly?: boolean,
}
const Input: React.FunctionComponent<InputProps> = ({ type, placeholder, value, onChange, readonly }) => {
    return (
        readonly ?
            <input
                type={type}
                value={value}
                onChange={onChange}
                placeholder={placeholder}
                readOnly={true}

            />
            :
            <>
                <input
                    type={type}
                    value={value}
                    onChange={onChange}
                    placeholder={placeholder}
                />
            </>
    )
}

export default Input