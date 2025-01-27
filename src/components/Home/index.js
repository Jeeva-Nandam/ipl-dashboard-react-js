import './index.css'
import {Component} from 'react'

import Loader from 'react-loader-spinner'

import TeamCard from '../TeamCard'

class Home extends Component {
  state = {teamsList: [], isLoading: true}

  componentDidMount() {
    this.getIplTeams()
  }

  getIplTeams = async () => {
    const response = await fetch('https://apis.ccbp.in/ipl')
    const data = await response.json()
    const {teams} = data
    this.setState({teamsList: teams, isLoading: false})
  }

  renderHomePage = () => {
    const {teamsList} = this.state
    const renderTeams = teamsList.map(eachTeam => (
      <TeamCard key={eachTeam.id} teamDetails={eachTeam} />
    ))
    return renderTeams
  }

  render() {
    const {isLoading, teamsList} = this.state
    console.log(teamsList)
    return (
      <div className="home-bg">
        <div className="home-heading-section">
          <img
            alt="ipl logo"
            src="https://assets.ccbp.in/frontend/react-js/ipl-logo-img.png "
            className="ipl-logo"
          />
          <h1 className="home-title">IPL Dashboard</h1>
        </div>
        {isLoading ? (
          <div className="team-list" data-testid="loader">
            <Loader type="Oval" color="#ffffff" height={50} width={50} />{' '}
          </div>
        ) : (
          <ul className="team-list">{this.renderHomePage()}</ul>
        )}
      </div>
    )
  }
}

export default Home

// Write your code here

// import {Component} from 'react'
// import Loader from 'react-loader-spinner'

// import TeamCard from '../TeamCard'

// import './index.css'

// // const teamsApiStatus = {
// //   success: 'SUCCESS',
// //   inProgress: 'IN_PROGRESS',
// //   failed: 'FAILED',
// // }

// class Home extends Component {
//   state = {teamList: [], teamsFetch: false}

//   componentDidMount() {
//     this.getTeamList()
//   }

//   getTeamList = async () => {
//     const teamListApi = 'https://apis.ccbp.in/ipl'

//     const response = await fetch(teamListApi)
//     const data = await response.json()
//     const {teams} = data
//     this.setState({teamList: teams, teamsFetch: true})
//   }

//   renderTeamList = () => {
//     const {teamList, teamsFetch} = this.state

//     switch (teamsFetch) {
//       case true:
//         return teamList.map(eachTeam => (
//           <TeamCard eachTeam={eachTeam} key={eachTeam.id} />
//         ))
//       case false:
//         return (
//           // eslint-disable-next-line react/no-unknown-property
//           <div className="team-list" testid="loader">
//             <Loader type="Oval" color="#ffffff" height={50} width={50} />{' '}
//           </div>
//         )

//       default:
//         return null
//     }
//   }

//   render() {
//     return (
//       <div className="home-bg">
//         <div className="home-heading-section">
//           <img
//             alt="ipl logo"
//             src="https://assets.ccbp.in/frontend/react-js/ipl-logo-img.png "
//             className="ipl-logo"
//           />
//           <h1 className="home-title">IPL Dashboard</h1>
//         </div>
//         <ul className="team-list">{this.renderTeamList()}</ul>
//       </div>
//     )
//   }
// }

// export default Home
