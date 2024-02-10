// Write your code here

import './index.css'

const MatchCard = props => {
  const {matchCarddetails} = props
  const {competingLogo, competingTeam, result, matchStatus} = matchCarddetails
  // console.log(matchStatus)
  return (
    <div className="eachlist">
      <img
        src={competingLogo}
        alt={`competing team ${competingTeam}`}
        className="competingimage"
      />
      <p className="teamnames">{competingTeam}</p>
      <p className="result">{result}</p>
      <p className={matchStatus === 'Won' ? 'wonstatus' : 'loststatus'}>
        {matchStatus}
      </p>
    </div>
  )
}

export default MatchCard
