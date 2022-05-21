import { instance_Calendar as api } from "./api";

class CalendarService {
    fetchEvents(calendars) {
        return api.get("/api/v1/queue", { params: { filter: JSON.stringify(calendars) } })
    }

    DeleteSchedule(id) {
        return api.delete(`/api/v1/delete_queue/${id}`)
    }

    AddSchedule(detail) {
        return api.post("/api/v1/add_queue", { detail })
    }

    UpdateSchedule(detail) {

    }
}

export default new CalendarService();