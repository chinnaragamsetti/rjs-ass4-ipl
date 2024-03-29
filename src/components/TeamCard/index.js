// Write your code here
import {Link} from 'react-router-dom'

import './index.css'

const TeamCard = props => {
  const {teamData} = props
  const {name, id, teamImageUrl} = teamData

  return (
    <Link to={`/team-matches/${id}`} className="eachteam">
      <div className="teamcontainer">
        <img src={teamImageUrl} alt={name} className="teamurl" />
        <p className="teamname">{name}</p>
      </div>
    </Link>
  )
}

export default TeamCard
