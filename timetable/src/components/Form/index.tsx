import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getTimetable } from '../../state/actions'

import axios from 'axios'

import useInput from '../../hooks/useInput'
import Input from '../ui/tags/Input'


export default function Form() {
	const dispatch = useDispatch()

	const schoolInput = useInput('30')
	const gradeInput = useInput('11Т')


	const fetchTimetable = async (school: string, grade: string) => {
		await axios.post('/api/timetable', {
			school,
			grade
		}).then(response => {
			dispatch(getTimetable(response.data))

			localStorage.setItem('schoolNumber', school)
			localStorage.setItem('gradeNumber', grade)

		})
	}


	const handleClick = () => {
		if (!schoolInput.value || !gradeInput.value) return
		fetchTimetable(schoolInput.value, gradeInput.value)
	}


	return (
		<div className="form">
			<div className="form__content">
				<div className="form__title">
					<h3>Расписание школ</h3>
					<p>г.Вологда</p>
				</div>

				<div className="form__input">
					<Input type="text" placeholder={'Номер школы'} value={schoolInput.value} onChange={schoolInput.onChange} readonly={true} />
					<Input type="text" placeholder={'Класс'} value={gradeInput.value} onChange={gradeInput.onChange} readonly={true} />
				</div>

				<div className="form__button">
					<button onClick={handleClick} className='submit'>Получить</button>
				</div>
			</div>
		</div>
	)
}