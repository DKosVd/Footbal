import React from 'react'
import { Image } from 'react-bootstrap'

export function Row({ click, teams }) {
    if (!teams) {
        return <tr><td>Loading</td></tr>
    }
    return (
        <>
            {teams.map(team => {
                return (<tr key={team.id} onClick={ () => click(team.id)}>
                    <div className="crestUrl">
                        <Image src={team.crestUrl} />
                    </div>
                    <td>{team.name}</td>
                    <td>{team.shortName}</td>
                    <td>{team.area?.name}</td>
                    <td>{team.clubColors.split('/').map( color => <span key={`${color}`} style={{
                        display: 'inline-block',
                        width: '15px',
                        height: '15px',
                        borderRadius: '50%',
                        backgroundColor: color.split(' ').join(''),
                        marginLeft: '5px'
                    }}></span>)}</td>
                </tr>)
            })}
        </>
    )
}

