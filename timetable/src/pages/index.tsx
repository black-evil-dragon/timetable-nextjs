import React from "react";
import { useSelector } from "react-redux";

import Form from "../components/Form";
import Timetable from "../components/Timetable";

import { Reducers } from "../types";

export default function Home() {
	const timetableData = useSelector((state: Reducers) => state.timetable)

	return (
		timetableData.onLoad ? <Timetable timetableData = {timetableData}/> : <Form />
	)
}
