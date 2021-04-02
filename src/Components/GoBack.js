import { Button } from 'react-bootstrap';
import React from 'react'
import { useHistory } from 'react-router'

export function Goback(props) {
    const history = useHistory();
    const handleClick = () => {
        history.goBack()
    }
    return (
        <>
            <Button onClick={handleClick}>Назад</Button>
        </>
    )
}
