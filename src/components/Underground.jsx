import React from 'react'
import Line from './Line'

function Underground() {

const [lines, setLines] = React.useState(null)


React.useEffect(()=> {
    async function fetchLines() {
        const response = await fetch('https://api.tfl.gov.uk/line/mode/tube/status')
        const lines = await response.json()
        setLines(lines)
    }
    fetchLines()

    setInterval(()=> {
        fetchLines()
    }, 1000)
}, [])



return <>

<h1>Underground</h1>

<Line lines={lines} />


</>

}

export default Underground
 