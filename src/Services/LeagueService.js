import { axios } from '../utils/axios.js'


class LeagueService {

      setSessionStorage = (name, data) => {
        sessionStorage.setItem(name, JSON.stringify(data))
      }

      getItemFromSessionStorage = (name) => {
        return sessionStorage.getItem(name)
      }

      getLeague = async (id, season='', startDate='', endDate='') => {
        const { data } = await axios.get(`http://api.football-data.org/v2/competitions/${id}/matches?season=${season}&dateFrom=${startDate}&dateTo=${endDate}`);
        return data.matches;
      };
}

export default LeagueService;