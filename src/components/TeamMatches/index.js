import {Component} from 'react'
import Loader from 'react-loader-spinner'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'
import LatestMatch from '../LatestMatch'
import MatchCard from '../MatchCard'
import './index.css'

class TeamMatches extends Component {
  state = {isLoading: true, latestMatch: {}, allrecentMatches: [], banner: ''}

  componentDidMount = () => {
    this.getteamData()
  }

  getteamData = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params
    const response = await fetch(`https://apis.ccbp.in/ipl/${id}`)
    console.log(response)
    const data = await response.json()
    console.log(data)

    const teamBannerUrl = data.team_banner_url
    const latestMatchDetails = {
      umpires: data.latest_match_details.umpires,
      result: data.latest_match_details.result,
      manOfTheMatch: data.latest_match_details.man_of_the_match,
      id: data.latest_match_details.id,
      date: data.latest_match_details.date,
      venue: data.latest_match_details.venue,
      competingTeam: data.latest_match_details.competing_team,
      competingTeamLogo: data.latest_match_details.competing_team_logo,
      firstInnings: data.latest_match_details.first_innings,
      secondInnings: data.latest_match_details.second_innings,
      matchStatus: data.latest_match_details.match_status,
    }

    const recentMatches = data.recent_matches.map(each => ({
      umpires: each.umpires,
      result: each.result,
      manOfTheMatch: each.man_of_the_match,
      id: each.id,
      date: each.date,
      venue: each.venue,
      competingTeam: each.competing_team,
      competingLogo: each.competing_team_logo,
      firstInnings: each.first_innings,
      secondInnings: each.second_innings,
      matchStatus: each.match_status,
    }))

    this.setState({
      isLoading: false,
      latestMatch: latestMatchDetails,
      allrecentMatches: recentMatches,
      banner: teamBannerUrl,
    })
  }

  rendergetteamData = () => {
    const {latestMatch, allrecentMatches, banner} = this.state
    return (
      <>
        <img src={banner} className="banner" alt="teambanner" />
        <LatestMatch latest={latestMatch} />
        <ul className="matchcardList">
          {allrecentMatches.map(each => (
            <MatchCard matchCarddetails={each} key={each.id} />
          ))}
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
