import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Button = ({name, handle})=>{
    return (
        <div>
            <button onClick={handle}>{name}</button>
        </div>
    )
}

const StatisticLine = ({text,value,value2}) => {
     return (
        <div>
            <p> {text} {value} {value2}</p>
        </div>
     )
}

const Statistics = ({good,neutral,bad}) => {
    if (good+neutral+bad>0){
        return (
            <div>
                <table>
                    <tbody>
                        <tr>
                            <td>
                                <StatisticLine text="Good: " value ={good} />
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <StatisticLine text="Neutral: " value ={neutral} />
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <StatisticLine text="Bad: " value ={bad} />
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <StatisticLine text="Total: " value ={good+neutral+bad} />
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <StatisticLine text="Average: " value ={(good-bad)/(good+neutral+bad)} />
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <StatisticLine text="Positive: " value ={(good)/(good+neutral+bad)*100} value2="%"/>
                            </td>
                        </tr>
                    </tbody>
                </table> 
            </div>
        )
    }
    return (
    <div><p>No feedback given</p></div>
    )
}


const App = () => {
  const [clicks, setClicks] = useState({
        good: 0, neutral: 0, bad: 0
    })
    const handleGoodClick = () => setClicks({ ...clicks, good: clicks.good + 1 })
    const handleNeutralClick = () => setClicks({ ...clicks, neutral: clicks.neutral + 1 })
    const handleBadClick = () => setClicks({ ...clicks, bad: clicks.bad + 1 })
  return (
    <div>
      <h1>Give feedback</h1>
      <Button name="Good" handle={handleGoodClick}/>
      <Button name="Neutral" handle={handleNeutralClick}/>
      <Button name="Bad" handle={handleBadClick}/>
      <p></p>
      <h2>Statistics</h2>
      <Statistics good={clicks.good} neutral={clicks.neutral} bad={clicks.bad}/>
    </div>
  )
}

ReactDOM.render(<App />, 
  document.getElementById('root')
)