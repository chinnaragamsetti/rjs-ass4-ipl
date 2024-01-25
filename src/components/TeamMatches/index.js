import {Component} from 'react'
import Loader from 'react-loader-spinner'

import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'
import './index.css'
import { async } from 'fast-glob'
import LatestMatch from './LatestMatch'

import './index.css'

class TeamMatches extends Component {
  state = {isLoading: false, teamData: {}}

  componentDidMount=()=>{
      this.getteamData()
  }

  getteamData= async()=>{
      const {match}=this.props 
      const{params}=match 
      const{id}=params 
      const response=await fetch(`https://apis.ccbp.in/ipl/${id}`)
      const data=await response.json()

      const updatedteamData ={

          {
          teamBannerUrl:data[0].team_banner_url,
          latestMatchDetails:{
              umpires:data[0].latest_match_details.umpires,
              result:data[0].latest_match_details.result,
              manOfTheMatch:data[0].latest_match_details.man_of_the_match,
              id:data[0].latest_match_details.id,
              date:data[0].latest_match_details.date,
              venue:data[0].latest_match_details.venue,
              competingTeam:data[0].latest_match_details.competing_team,
              competingTeamLogo:data[0].latest_match_details.competing_team_logo,
              firstInnings:data[0].latest_match_details.first_innings,
              secondInnings:data[0].latest_match_details.second_innings,
              matchStatus:data[0].latest_match_details.match_status,
          }
        },
          recentMatches:data.recent_matches.map(each=>({
              umpires:each.umpires,
              result:each.result,
              manOfTheMatch:each.man_of_the_match,
              id:each.id,
              date:each.date,
              venue:each.venue,
              competingTeam:each.competing_team,
              competingTeamLogo:each.competing_team_logo,
              firstInnings:each.first_innings,
              secondInnings:each.second_innings,
              matchStatus:each.match_status,

          }))

    }
    this.setState({isLoading:false,teamData:updatedteamData})
  }

  rendergetteamData = () => {
        const {teamData}=this.state
        return(
            <>
                <img src={teamData[0].teamBannerUrl} className='banner'/>
                <LatestMatch latestMatchDetails={teamData[0].latestMatchDetails}/>
                <ul className='matchcardList'>
                    {teamData.recentMatches.map(each=>(<MatchCard matchDetails={each} key={each.id}/>))}
                </ul>
            </>
        )
  }

  render() {
    const {isLoading} = this.state
    return (
      <div className="teammaincontainer">
        {isLoading ? (
          <Loader type="TailSpin" color="#00BFFF" height={50} width={50} />
        ) : (
          this.rendergetteamData()
        )}
      </div>
    )
  }
}

export default TeamMatches
