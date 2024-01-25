// Write your code here
import './index.css'

const LatestMatch = props => {
  const {LatestMatchDetails} = props
  const {
    umpires,
    result,
    manOfTheMatch,
    id,
    date,
    venue,
    competingTeam,
    competingTeamLogo,
    firstInnings,
    secondInnings,
    matchStatus,
  } = LatestMatchDetails
  return (
    <div className="latestMatchmaincontainer">
      <div className="topcontainer">
        <div className="leftcontainer">
          <h1 className="wonteamname">{competingTeam}</h1>
          <p className="p">{date}</p>
          <p className="p">{venue}</p>
          <p className="p">{result}</p>
        </div>
        <img src={competingTeamLogo} className="wonteamimage" />
      </div>
      <hr className="r" />
      <div className="bottomcontainer">
        <p className="p">First Innings</p>
        <p className="p">{firstInnings}</p>
        <p className="p">Second nnings</p>
        <p className="p">{secondInnings}</p>
        <p className="p">Man Of Te Matc</p>
        <p className="p">{manOfTheMatch}</p>
        <p className="p">Umpires</p>
        <p className="p">{umpires}</p>
      </div>
    </div>
  )
}

export default LatestMatch
