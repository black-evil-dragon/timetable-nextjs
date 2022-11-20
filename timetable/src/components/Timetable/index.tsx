import React from 'react'
import { ITimetable } from '../../interface';
import { Week, Lesson, TimetableProps } from '../../types';



const Timetable: React.FunctionComponent<TimetableProps> = ({ timetableData }) => {
    return (
        <div className="timetable">
            <div className="timetable__title">
                {timetableData.schoolName}
                <span>{timetableData.gradeNumber}</span>
            </div>

            <div className="timetable__content">
                {timetableData.timetable.map((week: Week, index) => (
                    <div className='week' key={index}>
                        <div className='week__title'>
                            <h3>{week.weekName}</h3>
                        </div>
                        <div className='week__content'>{week.lessons.map((lesson: Lesson, index) => (
                            <div className='lesson' key={index}>
                                <div className='lesson__name'>{lesson.subjectName}</div>
                                <div className='lesson__room'>{lesson.room}</div>
                            </div>
                        ))}</div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Timetable

