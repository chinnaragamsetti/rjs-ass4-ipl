// Write your code here

import './index.css'

const MatchCard = props => {
  const {matchCarddetails} = props
  const {competingLogo, competingTeam, result, status} = matchCarddetails

  return (
    <div className="eaclist">
      <img src={competingLogo} alt={competingTeam} className="competingimage" />
      <p className="teamnames">{competingTeam}</p>
      <p className="result">{result}</p>
      <p className="status">{status}</p>
    </div>
  )
}

export default MatchCard
