import React from 'react'


function Line() {

return <>
<div>
    <ul>
        {lines.map((line, index) => {
            return <li key={index}>{line.name} - {line.lineStatuses[0].statusSeverityDescription}

            </li>
    })}
    </ul>
</div>


</>

}

export default Line