// Write your code here

import './index.css'

const MatchCard = props => {
  const {matchDetails} = props
  const {competingLogo, competingTeam, result, status} = matchDetails

  return (
    <div className="eaclist">
      <img
        src={competingLogo}
        alt={competing_team}
        className="competingimage"
      />
      <h1 className="teamnames">{competingTeam}</h1>
      <p className="result">{result}</p>
      <p className="status">{status}</p>
    </div>
  )
}

export default MatchCard
