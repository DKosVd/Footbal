import { makeAutoObservable, configure } from "mobx"
import CalendarService from '../Services/CalendarService'
configure({enforceActions: 'never'})

class Calendar {
    matches = []
    isLoading = false;
    isError = {message: null}

    constructor() {
        makeAutoObservable(this)
        this.calendarService = new CalendarService();
    }

    setMatches = matches => {
        this.matches = matches
    }

    setSessionStorage = (name, data) => {
        this.calendarService.setSessionStorage(name, data);
    }

    getSessionStorage = (name) => {
        return JSON.parse(this.calendarService.getItemFromSessionStorage(name));
    } 


    getMatches = async (id, startDate='', endDate='') => {
        try {
            this.isLoading = true
            const data = await this.calendarService.getMatchesForTeam(id, startDate, endDate);
            this.setMatches(data)
            this.isLoading = false
        } catch(err) {
            this.isError.message = err.message;
        }
    }

}


const CalendarStore = new Calendar();
export default CalendarStore;