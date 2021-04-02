import React from 'react'

export function LiveSearch({ cb, datas, paramsFilterBy }) {
    const [state, setState] = React.useState('')
    const [copyDatas, setCopyDatas] = React.useState([])

    React.useEffect(() => {
        setCopyDatas(datas);
    }, [datas])


    const handleInput = (e) => {
        localStorage.setItem('input', e.target.value)
        setState(e.target.value);
        cb(filterData(e.target.value))
    }
    const filterData = (dataValue) => {
        return copyDatas?.filter( data => {
            let str = pathToProperty(data, paramsFilterBy).toLowerCase()
            let value = dataValue.toLowerCase()
            return str.includes(value)
        })
    }

    const pathToProperty = (data, path) => {
        let paths = path.split('.');
        let current = data;
        for(let i = 0; i < paths.length; i++) {
            current = current[`${paths[i]}`]
            if(!current) {
                return 
            }
        }
        return current
    }

    return (
        <div className="input_for_search">
            <label> Поиск: <input type="text" onInput={handleInput} value={state} id="search"/> </label>
        </div>
    )
}
