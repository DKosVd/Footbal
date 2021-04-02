import { observer } from 'mobx-react-lite';
import React from 'react'
import { Card, ListGroup } from 'react-bootstrap';
import { Route, Switch, useParams } from 'react-router'
import { Link } from 'react-router-dom';
import TeamStore from '../Store/TeamStore';
import { Calendar } from './Calendar';
import { Goback } from './GoBack';
export const Team = observer((props) => {
    const { id } = useParams()
    const {isLoading, isError, team, getTeam, squad, activeCompetitions} = TeamStore
    React.useEffect(() => {
        getTeam(id);
    }, [id, getTeam])


    if(isError?.message) {
        return <h3>{isError?.message}</h3>
    }

    if(isLoading) {
        return <h3>Loading...</h3>
    }


    return (
        <>
            <Switch>
                <Route exact path="/teams/:id">
                    
                    <Goback/>
                    <div className="team">
                        <Card >
                            <Card.Img variant="top" src={team?.crestUrl} />
                            <Card.Body>
                                <Card.Title>Информация о команде</Card.Title>
                                <Card.Text>
                                    <p>Основан: {team?.founded}</p>
                                    <p>Название: {team?.name}</p>
                                    <p>Адрес: {team?.address}</p>
                                    <p>E-mail: {team?.email}</p>
                                    <p>Website: {team?.website}</p>
                                    <Link to={`/teams/${id}/calendar`}>
                                        Расписание матчей
                                    </Link>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </div>
                    <div>
                        <h3>Состав команды</h3>
                        <div className="team_squad">
                            {squad.map(player => {
                                return (<Card key={player.id}>
                                    <Card.Body>
                                        <Card.Title>{player.name}</Card.Title>
                                        <Card.Text>
                                            <p>Национальность: {player.nationality}</p>
                                            <p>Позиция: {player.position}</p>
                                            <p>Страна в которой родился: {player.countryOfBirth}</p>
                                        </Card.Text>
                                    </Card.Body>
                                </Card>)
                            })}
                        </div>
                    </div>
                    <div className="team_competitions">
                        <h3>Активные соревнования</h3>
                        {activeCompetitions.map(competition => {
                            return (<Card key={competition.id}>
                                <ListGroup>
                                    <ListGroup.Item>Название соревнований: {competition.name}</ListGroup.Item>
                                    <ListGroup.Item>Код: {competition.code}</ListGroup.Item>
                                    <ListGroup.Item>Место проведения: {competition?.area.name}</ListGroup.Item>
                                </ListGroup>
                            </Card>)
                        })}
                    </div>
                </Route>
                <Route path="/teams/:id/calendar">
                   <Calendar />
                </Route>
            </Switch>
        </>
    )
})
