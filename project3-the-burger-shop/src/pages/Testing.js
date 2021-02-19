import React, {useState} from 'react'

export default function Testing(){

    const [change, showChange] = useState(1)

    function clickHere(){
        if(change === 0){
            showChange(1)
        }
        if(change === 1){
            showChange(0)
        }
    }

    if(change === 1){
        return (
            <React.Fragment>
                <button onClick={clickHere}>CLICK HERE</button>
                <h1>1ST PAGE</h1>
            </React.Fragment>
        )
    }
    if(change === 0){
        return (
            <React.Fragment>
                <button onClick={clickHere}>CLICK HERE</button>
                <h1>2ND PAGE</h1>
            </React.Fragment>
        )
    }
}