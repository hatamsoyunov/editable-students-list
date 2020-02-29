import React from 'react';
import { useSelector } from 'react-redux';

import { IStudent, IStudentsState } from '../interfaces';

import StudentItem from './StudentItem';

const StudentsList: React.FC = () => {
	const students = useSelector((state: IStudentsState) => state.students);

	return (
		<>
			{students.map((student: IStudent) => (
				<StudentItem key={student.id} student={student} />
			))}
		</>
	);
};

export default StudentsList;
