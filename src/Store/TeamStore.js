import { makeAutoObservable, configure } from "mobx"
import TeamService from "../Services/TeamService";
configure({enforceActions: 'never'})

class Team {
    team = []
    squad = []
    matches = []
    activeCompetitions = []
    isLoading = false;
    isError = {message: null}

    constructor() {
        makeAutoObservable(this)
        this.teamService = new TeamService();
    }

    setTeam = team => {
        this.team = team;
    };

    setMatches = matches => {
        this.matches = matches
    }

    setSquad = squad => {
        this.squad = squad
    }

    setActiveCompetitions = competitions => {
        this.activeCompetitions = competitions
    }

    getTeam = async (id) => {
        try {
            this.isLoading = true
            const data = await this.teamService.getTeam(id);
            this.setTeam(data)
            this.setSquad(data.squad)
            this.setActiveCompetitions(data.activeCompetitions)
            this.isLoading = false
        } catch (err) {
            this.isError.message = err.message;
        }
    }

    getMatches = async (id, startDate='', endDate='') => {
        try {
            this.isLoading = true
            const data = await this.teamService.getMatchesForTeam(id, startDate, endDate);
            this.setMatches(data)
            this.isLoading = false
        } catch(err) {
            this.isError.message = err.message;
        }
    }

}


const TeamStore = new Team();
export default TeamStore;