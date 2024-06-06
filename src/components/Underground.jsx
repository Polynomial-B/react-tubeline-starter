import React from 'react'
import Line from './Line'

function Underground() {

const [lines, setLines] = React.useState([])


React.useEffect(()=> {
    async function fetchLines() {
        const response = await fetch('https://api.tfl.gov.uk/line/mode/tube/status')
        const lines = await response.json()
        setLines(lines)
    }
    fetchLines()
}, [])



return <>

<h1>Underground</h1>

<Line lines={lines} />


</>

}

export default Underground
 