import { makeAutoObservable, configure } from "mobx"
import LeaguesService from "../Services/LeaguesService";
configure({enforceActions: 'never'})

class Leagues{
    leagues = []
    isLoading = false;
    isError = {message: null}

    constructor() {
        makeAutoObservable(this)
        this.leaguesService = new LeaguesService();
    }

    setLeagues = leagues => {
        this.leagues = leagues
    }

    getLeagues = async () => {
        try {
            this.isLoading = true
            const data = await this.leaguesService.getLeagues();
            this.setLeagues(data)
            this.isLoading = false
        } catch(err) {
            this.isError.message = err.message;
        }
    }

}


const LeaguesStore = new Leagues();
export default LeaguesStore;