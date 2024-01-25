// Write your code here
import {Component} from 'react'
import Loader from 'react-loader-spinner'
import {Link} from 'react-router-dom'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'
import TeamCard from './TeamCard'
import './index.css'

class Home extends Component {
  state = {teamList: {}, isLoading: true}

  componentDidMount() {
    this.getteamList()
  }

  getteamList = async () => {
    const response = await fetch('https://apis.ccbp.in/ipl')
    const data = await response.json()
    console.log(data)
    const formateData = data.teams.map(each => ({
      id: each.id,
      name: each.name,
      teamImageUrl: each.team_image_url,
    }))

    this.setState({teamList: {formateData}, isLoading: false})
  }

  render() {
    const {teamList, isLoading} = this.state
    return (
      <Link to="/">
        <div className="dashboard">
          <div className="logocontainer">
            <img
              src="https://assets.ccbp.in/frontend/react-js/ipl-logo-img.png"
              className="logo"
              alt="ipl logo"
            />
            <p className="logotext">IPL Dashboard</p>
          </div>
          {isLoading ? (
            <Loader type="TailSpin" color="#00BFFF" height={50} width={50} />
          ) : (
            <ul className="teamlist">
              {teamList.teams.map(each => (
                <TeamCard teamData={each} key={each.id} />
              ))}
            </ul>
          )}
        </div>
      </Link>
    )
  }
}

export default Home
