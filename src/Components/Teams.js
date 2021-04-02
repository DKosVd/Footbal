import {observer} from 'mobx-react-lite';
import React from 'react'
import { Table } from 'react-bootstrap'
import { Row } from './Row'
import { Route, Switch, useHistory } from 'react-router';
import { Team } from './Team';
import { LiveSearch } from './LiveSearch';
import { Goback } from './GoBack';
import TeamsStore from '../Store/TeamsStore';


export const Teams = observer((props) => {
    const [filterTeams, setFilterTeams] = React.useState([]);
    const {teams, isLoading, getTeams, isError} = TeamsStore;
    const [filter, setFilter] = React.useState('name')
    const history = useHistory();
    React.useEffect(() => {
        getTeams()
    }, [getTeams])

    React.useEffect(() => {
        setFilterTeams(teams)
    }, [teams])

    const handlerClick = (id) => {
        history.push(`/teams/${id}`)
    }

    const handleInput = (data) => {
        setFilterTeams(data)
    }

    const handleChange = (e) => {
        setFilter(e.target.value)
    }
    
    
    if(isError?.message) {
        return <h3>{isError?.message}</h3>
    }

    if(isLoading) {
        return <h3>Loading...</h3>
    }



    return (
        <Switch>
                <Route exact path="/teams">
                    <Goback/>
                    <h1>Список команд</h1>
                    <div className="search__type">
                        <LiveSearch datas={teams} cb={handleInput} paramsFilterBy={filter} />
                        <select defaultValue={'name'} onChange={handleChange}>
                            <option disabled >Выберите критерий сортировки</option>
                            <option value='name' selected={'name' === filter}>Название команды</option>
                            <option value='area.name' selected={'area.name' === filter}>Страна</option>
                        </select></div>
                    <Table striped bordered hover variant="dark">
                        <thead>
                            <tr>
                                <th>Crest</th>
                                <th>Name</th>
                                <th>Short name</th>
                                <th>Area</th>
                                <th>Club colors</th>
                            </tr>
                        </thead>
                        <tbody>
                            <Row click={handlerClick} teams={filterTeams} />
                        </tbody>
                    </Table>
                </Route>
                <Route path="/teams/:id">
                    <Team />
                </Route>
        </Switch>
    )
})
