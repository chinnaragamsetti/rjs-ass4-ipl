// Write your code here
import {Component} from 'react'
import Loader from 'react-loader-spinner'
import {Link} from 'react-router-dom'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'
import TeamCard from '../TeamCard'
import './index.css'

class Home extends Component {
  state = {teamList: [], isLoading: true}

  componentDidMount() {
    this.getteamList()
  }

  getteamList = async () => {
    const response = await fetch('https://apis.ccbp.in/ipl')
    const data = await response.json()
    // console.log(data)
    const formateData = data.teams.map(each => ({
      id: each.id,
      name: each.name,
      teamImageUrl: each.team_image_url,
    }))
    //  console.log(formateData)
    this.setState({teamList: formateData, isLoading: false})
    // console.log(teamList)
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
            <h1 className="logotext">IPL Dashboard</h1>
          </div>
          {isLoading ? (
            <Loader
              testid="loader"
              type="ThreeDots"
              color="#00BFFF"
              height={50}
              width={50}
            />
          ) : (
            <ul className="teamlist">
              {teamList.map(each => (
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
