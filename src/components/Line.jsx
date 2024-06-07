import React from 'react'


function Line({lines}) {



return <>
<div>
    <ul>
        {lines ? lines.map(line => {
            return <li id={line.id} key={line.id}>
                {line.name} - {line.lineStatuses[0].statusSeverityDescription}

            </li>
    }) : <p>Awaiting info....</p>}
    </ul>
</div>


</>

}

export default Line