import React from 'react'

export function Season({cb, data}) {
    const [value, setValue] = React.useState(data)
    const handleInput = (e) => {
        setValue(e.target.value)
    }
    const handleCb = () => {
        cb(value)
    }
    return (
        <>
            <input type="text" placeholder="YYYY" value={value} onInput={handleInput} onBlur={handleCb}/>
        </>
    )
}
