import { ITimetable } from "../../interface"


export const getTimetable = (data: ITimetable) => {
    return {
        type: "timetable:get",
        payload: data
    }
}

export const removeTimetable = (data: any) => {
    return {
        type: "timetable:remove",
    }
}