import { axios } from '../utils/axios.js'


class TeamService {


  getTeam = async (id) => {
    const { data } = await axios.get(`http://api.football-data.org/v2/teams/${id}`);
    return data
  };

}

export default TeamService;