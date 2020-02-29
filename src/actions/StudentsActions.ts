import { IStudent } from '../interfaces';

export const addNewForm = () => ({
	type: 'ADD_NEW_FORM'
});

export const cancelNewForm = {
	type: 'CANCEL_NEW_FORM'
};

export const cancelForm = (students: IStudent[]) => ({
	type: 'CANCEL_FORM',
	payload: students
});

export const addStudent = (students: IStudent[]) => ({
	type: 'ADD_STUDENT',
	payload: students
});

export const editStudent = (students: IStudent[]) => ({
	type: 'EDIT_STUDENT',
	payload: students
});

export const saveStudent = (students: IStudent[]) => ({
	type: 'SAVE_STUDENT',
	payload: students
});

export const removeStudent = (students: IStudent[]) => ({
	type: 'REMOVE_STUDENT',
	payload: students
});
