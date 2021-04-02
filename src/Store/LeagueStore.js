import { makeAutoObservable, configure } from "mobx"
import LeagueService from "../Services/LeagueService";
configure({enforceActions: 'never'})

class League {
    league = []
    isLoading = false;
    isError = {message: null}

    constructor() {
        makeAutoObservable(this)
        this.leagueService = new LeagueService()
    }

    setLeague = league => {
        this.league = league
    }

    setSessionStorage = (name, data) => {
        this.leagueService.setSessionStorage(name, data);
    }

    getSessionStorage = (name) => {
        return JSON.parse(this.leagueService.getItemFromSessionStorage(name));
    } 
  
    getLeague = async (id, season, startDate, endDate) => {
        try {
            this.isLoading = true;
            const data = await this.leagueService.getLeague(id, season, startDate, endDate);
            this.setLeague(data);
            this.isLoading = false;
        } catch(err) {
            this.isError.message = err.message;
        }
    }

}


const LeagueStore = new League();
export default LeagueStore;