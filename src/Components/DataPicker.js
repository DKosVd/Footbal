import React from 'react'

export function Datapicker({cb, data}) {
    const [date, setDate] = React.useState(data)

    const handleSetDate = (e) => {
        setDate({
            ...date,
            [e.target.name]: e.target.value
        })
    }

    const handleSend = () => {
        if(!date) {
            return 
        }
        cb(date)
    }

    return (
        <div>
            <span>От</span><input type="date" name="startDate" onChange={handleSetDate} value={date?.startDate || ''}/>
            <span>До</span><input type="date" name="endDate" onChange={handleSetDate} value={date?.endDate || ''}/>
            <button type="button" onClick={handleSend}>Применить</button>
        </div>
    )
}
