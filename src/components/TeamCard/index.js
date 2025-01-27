import './index.css'
import {Link} from 'react-router-dom'

const TeamCard = props => {
  const {teamDetails} = props
  const convertData = {
    id: teamDetails.id,
    name: teamDetails.name,
    teamImageUrl: teamDetails.team_image_url,
  }
  const {id, name, teamImageUrl} = convertData
  return (
    <li className="team-card-item">
      <Link to={`/team-matches/${id}`} className="team-link">
        <img alt={`${name}`} src={teamImageUrl} className="team-logo" />
        <p className="team-title">{name}</p>
      </Link>
    </li>
  )
}

export default TeamCard
