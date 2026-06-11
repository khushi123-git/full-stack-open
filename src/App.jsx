import { useState } from "react"

const Display = props => <div>{props.value}</div>

const Button = (props) => (
  <button onClick={props.onClick}>
    {props.text}
  </button>
)

const StatisticLine = (props) => {
  return( 
  <tr>
      <td>{props.text}</td>
      <td>{props.value}</td>
  </tr>
    )
}

const Statistics = (props) => {
  const total = props.good+props.bad+props.neutral
  if(total===0){
    return <div>No feedback given</div>
  }
  const average = (props.good - props.bad) / total
  const positive = (100 * props.good) / total
  return(
    <div>
      <table>
        <tbody>
          <StatisticLine text="good" value={props.good} />
          <StatisticLine text="neutral" value={props.neutral} />
          <StatisticLine text="bad" value={props.bad} />
          <StatisticLine text="all" value={total} />
          <StatisticLine text="average" value={average} />
          <StatisticLine text="positive" value={positive + '%'} />
        </tbody>
      </table>
    </div>
  )
}

const App = () => {
  
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const handleGood = () => {setGood(good + 1)}
  const handleNeutral = () => {setNeutral(neutral + 1)}
  const handleBad = () => {setBad(bad + 1)}

  return (
    <div>
      <h1>give feedback</h1>
      <Button onClick={handleGood} text="good" />
      <Button onClick={handleNeutral} text="neutral" />
      <Button onClick={handleBad} text="bad" />
      <h1>statistics</h1>
      <Statistics
      good={good}
      neutral={neutral}
      bad={bad}
      />
    </div>
  )
}

export default App