import React from 'react'
import { Card, ListGroup } from 'react-bootstrap';

export function Matches({ matches }) {
    return (
        <>
            <h1>Матчи в туре</h1>
            {matches && matches.map(match => { return (<Card key={match.id}>
                <ListGroup>
                    <ListGroup.Item className={`${match.status === 'FINISHED' ? 'match__finished': 'match__scheduled'}`}>
                        <div className="match_stat">{new Date(match.utcDate).toLocaleDateString()}</div>
                        <div className="match_stat">{match.homeTeam.name} {match.score.fullTime.homeTeam} : {match.score.fullTime.awayTeam} {match.awayTeam.name} </div> 
                        <div className="match_stat">Группа: {match.group}</div>
                    </ListGroup.Item>
                </ListGroup>
            </Card>)})}
        </>
    )
}
