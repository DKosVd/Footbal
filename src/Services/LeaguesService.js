import { axios } from '../utils/axios.js'


class LeaguesService {
      getLeagues = async () => {
        const { data } = await axios.get(`http://api.football-data.org/v2/competitions/`);
        return data.competitions;
      };
}

export default LeaguesService;