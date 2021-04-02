import React from 'react'

export function Rowl({ click, leagues }) {
    return (
        <>{leagues?.map( league => {
            return (<tr key={league.id} onClick={() => click(league.id)}>
                <td>{league.area?.name}</td>
                <td>{league.name}</td>
                <td>{league.currentSeason?.startDate}</td>
                <td>{league.currentSeason?.endDate}</td>
            </tr>)
        })}
        </>
    )
}
