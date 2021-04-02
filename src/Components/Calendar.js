import React from 'react'
import { Matches } from './Matches'
import { Datapicker } from './DataPicker';
import CalendarStore from '../Store/CalendarStore';
import { observer } from 'mobx-react-lite';
import { useParams } from 'react-router';
import { Goback } from './GoBack';

export const Calendar = observer(() => {
    const { id } = useParams()
    const [dataPicker, setDataPicker] = React.useState({})
    const { matches, getMatches, isError, isLoading, clearStorage, setSessionStorage, getSessionStorage} = CalendarStore;

    React.useEffect(() => {
        getMatches(id, dataPicker.startDate, dataPicker.endDate)
    }, [id, dataPicker, getMatches, clearStorage, getSessionStorage])


    React.useEffect(() => {
        let date = getSessionStorage(`date`)
        if(date) {
            setDataPicker(date)
        }
    }, [getSessionStorage])

    const handlePickDate = (data) => {
        setSessionStorage('date', data)
        setDataPicker(data)
    }

    if(isError?.message) {
        return <h3>{isError?.message}</h3>
    }

    if(isLoading) {
        return <h3>Loading...</h3>
    }

    return (
        <>
            <div className="team_calendar_match">
                <Goback/>
                <h3>Команда: </h3>
                <Datapicker cb={handlePickDate} data={dataPicker}/>
                <Matches matches={matches} />
            </div>
        </>
    )
})
