import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { TableContainer, Table, TableHead, TableRow, TableCell, TableBody, Paper } from '@material-ui/core';

import { IStudent, IStudentsState } from '../interfaces';
import { addStudent } from '../actions/StudentsActions';
import { defaultStudents } from '../utils/defaultStudents';

import NewFormContainer from './NewFormContainer';
import StudentsList from './StudentsList';
import StudentsListEmpty from './StudentsListEmpty';

const StudentsTable: React.FC = () => {
	const dispatch = useDispatch();
	const students = useSelector((state: IStudentsState) => state.students);
	const newForm = useSelector((state: IStudentsState) => state.newForm);
	const addStudentAction = (data: IStudent[]) => dispatch(addStudent(data));

	const tableRowForm = newForm ? <NewFormContainer /> : null;
	const studentsList = students.length > 0 || newForm ? <StudentsList /> : <StudentsListEmpty />;

	useEffect(() => {
		const storageState = localStorage.getItem('students');
		const students = storageState !== null ? (JSON.parse(storageState) as IStudent[]) : defaultStudents;

		addStudentAction(students);
	}, []);

	useEffect(() => {
		localStorage.setItem('students', JSON.stringify(students));
	}, [students]);

	return (
		<TableContainer component={Paper}>
			<Table>
				<TableHead>
					<TableRow hover>
						<TableCell className="table-col-1">ФИО</TableCell>
						<TableCell className="table-col-2">Дата рождения</TableCell>
						<TableCell className="table-col-3">Успеваемость</TableCell>
						<TableCell className="table-col-4">Действие</TableCell>
					</TableRow>
				</TableHead>

				<TableBody>
					{studentsList}
					{tableRowForm}
				</TableBody>
			</Table>
		</TableContainer>
	);
};

export default StudentsTable;
