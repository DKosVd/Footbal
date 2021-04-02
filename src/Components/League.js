import React from 'react'
import { useParams } from 'react-router'
import { Matches } from './Matches';
import { Datapicker } from './DataPicker';
import { Season } from './Season';
import { Goback } from './GoBack';
import { observer } from 'mobx-react-lite';
import LeagueStore from '../Store/LeagueStore';

export const League = observer((props) => {
    const { id } = useParams();
    const [dataPicker, setDataPicker] = React.useState({})
    const [season, setSeason] = React.useState('')
    const {league, isLoading, isError, getLeague, setSessionStorage, getSessionStorage} = LeagueStore;
    React.useEffect(() => {
        getLeague(id, season, dataPicker.startDate, dataPicker.endDate)
    }, [dataPicker, season, id, getLeague])
    

    React.useEffect(() => {
        let date = getSessionStorage(`dateLeague`)
        let season = getSessionStorage(`season`)
        if(date) {
            setDataPicker(date)
        }
        if(season) {
            setSeason(season)
        }
    }, [getSessionStorage])


    const handlePickDate = (data) => {
        setSessionStorage('dateLeague', data)
        setDataPicker(data)
    }

    const handleSeason = (data) => {
        setSessionStorage('season', data)
        setSeason(data)
    }

    if (isError?.message) {
        return <h3>{isError?.message}</h3>
    }

    if (isLoading) {
        return <h3>Loading...</h3>
    }

    return (
        <>
            <div className="league_ma">
                <Goback />
                <div className="search__type">
                    <Datapicker cb={handlePickDate} data={dataPicker}/>
                    <Season cb={handleSeason} data={season}/>
                </div>
                <Matches matches={league} />
            </div>
        </>
    )
})
