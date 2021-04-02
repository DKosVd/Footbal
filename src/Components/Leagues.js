import React from 'react'
import { Table } from 'react-bootstrap'
import { Route, Switch, useHistory } from 'react-router';
import { Rowl } from './RowL';
import { League } from './League';
import { LiveSearch } from './LiveSearch';
import { Goback } from './GoBack';
import LeaguesStore from '../Store/LeaguesStore';
import { observer } from 'mobx-react-lite';

export const Leagues = observer((props) => {
    const [filterLeagues, setFiltersLeagues] = React.useState();
    const [filter, setFilter] = React.useState('name')
    const { leagues, isLoading, isError, getLeagues } = LeaguesStore;
    const history = useHistory();
    React.useEffect(() => {
        if (localStorage.getItem('filter')) {
            setFilter(localStorage.getItem('filter'))
        }
        getLeagues()
    }, [getLeagues])

    React.useEffect(() => {
        setFiltersLeagues(leagues)
    }, [leagues])

    const clickHandler = (id) => {
        history.push(`/leagues/${id}`)
    }

    const handlerInput = (data) => {
        console.log(data)
        setFiltersLeagues(data)
    }

    const handleChange = (e) => {
        setFilter(e.target.value)
    }



    if (isError?.message) {
        return <h3>{isError?.message}</h3>
    }

    if (isLoading) {
        return <h3>Loading...</h3>
    }


    return (
        <>
            <Switch>
                <Route exact path="/leagues">
                    <Goback />
                    <div>
                        <h1>Список лиг</h1>
                        <div className="search__type">
                            <LiveSearch cb={handlerInput} datas={leagues} paramsFilterBy={filter} />
                            <select defaultValue={filter} onChange={handleChange} >
                                <option disabled >Выберите критерий сортировки</option>
                                <option value='name' selected={'name' === filter}>Название лиги</option>
                                <option value='area.name' selected={'area.name' === filter}>Страна</option>
                            </select>
                        </div>
                    </div>
                    <Table  responsive>
                        <thead>
                            <tr>
                                <th>Страна</th>
                                <th>Название</th>
                                <th>Дата начала</th>
                                <th>Дата окончания</th>
                            </tr>
                        </thead>
                        <tbody>
                            <Rowl leagues={filterLeagues} click={clickHandler} />
                        </tbody>
                    </Table>
                </Route>
                <Route path="/leagues/:id">
                    <League />
                </Route>
            </Switch>
        </>
    )
})
