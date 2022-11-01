import React from "react";

import Input from "../components/ui/tags/Input";
import useInput from "../hooks/useInput";

export default function Home() {
	const schoolInput = useInput('Школа №30')
	const classInput = useInput('11Т')

	const handleClick = () => {
		console.log('click', schoolInput.value, classInput.value)
	}
	return (
		<div className="find-school">
			<div className="find-school__title">
				<p></p>
			</div>

			<div className="find-school__input">
				<Input type="text" placeholder={'Школа'} value={schoolInput.value} onChange={schoolInput.onChange} readonly={true} />
				<Input type="text" placeholder={'Класс'} value={classInput.value} onChange={classInput.onChange} readonly={true} />
			</div>

			<div className="find-school__button">
				<button onClick={handleClick}>check</button>
			</div>
		</div>
	)
}
