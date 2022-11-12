import React from 'react'
import { ITimetable } from '../../interface';
import { Week, Lesson, TimetableProps } from '../../types';



const Timetable: React.FunctionComponent<TimetableProps> = ({ timetableData }) => {
    return (
        <div className="timetable">
            {timetableData.schoolName}
            {timetableData.gradeNumber}

            {timetableData.timetable.map((week: Week, index) => (
                <div key={index}>
                    <div>{week.weekName}</div>
                    <div>{week.lessons.map((lesson: Lesson, index) => (
                        <div key={index}>
                            <div>{lesson.subjectName}</div>
                            <div>{lesson.room}</div>
                        </div>
                    ))}</div>
                </div>
            ))}
        </div>
    )
}

export default Timetable

