import { ITimetable } from "../interface"

export type LinkProps = {
    text: string,
    href: string,
}

export type InputProps = {
    type: string,

    value?: string,
    placeholder?: string,
    onChange?: any,
    readonly?: boolean,
}

export type Action = {
    type: string,
    payload: any,
}

export type Reducers = {
    timetable: ITimetable,
}

export type Week = {
    weekName: string,
    lessons: {
        subjectName: string,
        room: string,
    }[]
}

export type TimetableProps = {
    timetableData: ITimetable
}

export type Lesson = {
    subjectName: string,
    room: string,
}