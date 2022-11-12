import type { NextApiRequest, NextApiResponse } from 'next'
import { data } from '../../data/timetable'

type Data = {
    name: string,
}

type ResponseData = {
    gradeNumber?: string,
    schoolName?: string,
    timetable?: {}[],

    error?: {
        text: string,
    }
}
type RequestData = {
    school: string,
    grade: string,
}

export default function handler(
    req: NextApiRequest,
    res: NextApiResponse<ResponseData>
) {
    const { school, grade } = req.body as RequestData

    const schoolData = data.school.find(element => element.schoolNumber === school)
    if (!schoolData) return res.status(200).json({ error: { text: 'Школа не найдена' } })

    const classData = schoolData.data.find(element => element.gradeNumber === grade.toLowerCase())
    if (!classData) return res.status(200).json({ error: { text: 'Класс не найден' } })

    res.status(200).json({ schoolName: schoolData.schoolName, gradeNumber: classData.gradeNumber, timetable: classData.timetable })
}