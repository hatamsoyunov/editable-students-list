import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { TableRow, TableCell, IconButton } from '@material-ui/core';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';

import { IStudent, IStudentsState, IProgressList } from '../interfaces';
import progressList from '../utils/progressList';
import formatDate from '../utils/formatDate';
import { removeStudent, editStudent } from '../actions/StudentsActions';

import EditFormContainer from './EditFormContainer';

interface Props {
	student: IStudent;
}

const StudentsItem: React.FC<Props> = ({ student }) => {
	const dispatch = useDispatch();
	const students = useSelector((state: IStudentsState) => state.students);
	const newForm = useSelector((state: IStudentsState) => state.newForm);
	const editForm = useSelector((state: IStudentsState) => state.editForm);
	const removeStudentAction = (students: IStudent[]) => dispatch(removeStudent(students));
	const editStudentAction = (students: IStudent[]) => dispatch(editStudent(students));

	const listItemClass = newForm || editForm ? 'disabled' : '';

	const handleEdit = (id: string): void => {
		const editedStudent = {
			...student,
			editing: true
		};

		const newStudents = students.map(student => {
			if (student.id === id) {
				return editedStudent;
			}
			return student;
		});

		editStudentAction(newStudents);
	};

	const handleRemove = (id: string): void => {
		removeStudentAction(students.filter(student => student.id !== id));
	};

	const renderDisplay = ({ id, name, birthDay, progress }: IStudent) => {
		return (
			<TableRow hover className={listItemClass}>
				<TableCell>{name}</TableCell>
				<TableCell>{formatDate(birthDay)}</TableCell>
				<TableCell>
					{progressList.map((progressItem: IProgressList) =>
						progressItem.id === progress ? progressItem.label : null
					)}
				</TableCell>
				<TableCell>
					<IconButton title="Редактировать" onClick={() => handleEdit(id)}>
						<EditIcon />
					</IconButton>
					<IconButton title="Удалить" onClick={() => handleRemove(id)}>
						<DeleteIcon />
					</IconButton>
				</TableCell>
			</TableRow>
		);
	};

	return <>{student.editing ? <EditFormContainer student={student} /> : renderDisplay(student)}</>;
};

export default StudentsItem;
