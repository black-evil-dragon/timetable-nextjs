import { useRouter } from "next/router";
import React from "react";

import Input from "../components/ui/tags/Input";
import useInput from "../hooks/useInput";

export default function Home() {
	const router = useRouter()
	const schoolInput = useInput('Школа №30')
	const classInput = useInput('11')

	const schoolData = {
		'Школа №30': '30'
	} as any

	const handleClick = () => {
		router.push(`/timetable/school?number=${schoolData[`${schoolInput.value}`]}&class=${classInput.value}`)
	}
	return (
		<div className="find-school">
			<div className="find-school__content">
				<div className="find-school__title">
					<h3>Расписание школ</h3>
					<p>г.Вологда</p>
				</div>

				<div className="find-school__input">
					<Input type="text" placeholder={'Школа'} value={schoolInput.value} onChange={schoolInput.onChange} readonly={true} />
					<Input type="text" placeholder={'Класс без буквы'} value={classInput.value} onChange={classInput.onChange} readonly={true} />
				</div>

				<div className="find-school__button">
					<button onClick={handleClick} className='submit'>Получить</button>
				</div>
			</div>
		</div>
	)
}
