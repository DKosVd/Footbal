import { axios } from '../utils/axios.js'


class CalendarService {

  setSessionStorage = (name, data) => {
    sessionStorage.setItem(name, JSON.stringify(data))
  }

  getItemFromSessionStorage = (name) => {
    return sessionStorage.getItem(name)
  }



  getMatchesForTeam = async (id, startDate, endDate) => {
    const { data } = await axios.get(`http://api.football-data.org/v2/teams/${id}/matches?dateFrom=${startDate}&dateTo=${endDate}`)
    return data.matches
  }
}

export default CalendarService;