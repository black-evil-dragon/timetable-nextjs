export interface ITimetable {
    onLoad?: boolean,
    gradeNumber: string,
    schoolName: string,
    timetable: []
}

export interface IData {
    school: {
        schoolNumber: string,
        schoolName: string,
        data: {
            gradeNumber: string,
            timetable: {
                weekName: string,
                lessons: {
                    subjectName: string,
                    room: string,
                }[]
            }[]
        }[]
    }[]
}