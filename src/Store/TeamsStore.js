import { makeAutoObservable, configure } from "mobx"
import TeamsService from "../Services/TeamsService.js";
configure({enforceActions: 'never'})

class Teams {
    teams = []
    isLoading = false;
    isError = {message: null}

    constructor() {
        makeAutoObservable(this)
        this.teamsService = new TeamsService();
    }

    setTeams = data => {
        this.teams = data;
    };


    getTeams = async () => {
        try {
            this.isLoading = true
            const data = await this.teamsService.getTeams();
            this.setTeams(data)
            this.isLoading = false
        } catch (err) {
            this.isError.message = err.message;
        }
    }

}


const TeamsStore = new Teams();
export default TeamsStore;