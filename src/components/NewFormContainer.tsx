import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';

import { IStudent, IStudentsState } from '../interfaces';
import { cancelNewForm, addStudent } from '../actions/StudentsActions';

import StudentForm from './StudentForm';

const TableRowForm: React.FC = () => {
	const dispatch = useDispatch();
	const students = useSelector((state: IStudentsState) => state.students);
	const cancelNewFormAction = () => dispatch(cancelNewForm);
	const addStudentAction = (students: IStudent[]) => dispatch(addStudent(students));

	const handleSave = ({ name, birthDay, progress }: IStudent): void => {
		const newStudent = {
			id: uuidv4(),
			name,
			birthDay: birthDay !== null ? birthDay!.toString() : '',
			progress,
			editing: false
		};

		localStorage.setItem('students', JSON.stringify([...students, newStudent]));
		addStudentAction([...students, newStudent]);
	};

	return <StudentForm handleCancel={cancelNewFormAction} handleSave={handleSave} />;
};

export default TableRowForm;
