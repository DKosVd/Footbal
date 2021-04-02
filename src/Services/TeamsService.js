import { axios } from '../utils/axios.js'


class TeamsService {
      getTeams = async () => {
        const { data } = await axios.get(`http://api.football-data.org/v2/teams`);
        return data.teams;
      };
}

export default TeamsService;