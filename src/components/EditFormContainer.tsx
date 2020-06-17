import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { IStudent, IStudentsState } from '../interfaces';
import { cancelForm, saveStudent } from '../actions/StudentsActions';

import StudentForm from './StudentForm';

interface Props {
    student: IStudent;
}
const EditFormContainer: React.FC<Props> = ({ student }) => {
    const dispatch = useDispatch();
    const students = useSelector((state: IStudentsState) => state.students);
    const saveStudentAction = (students: IStudent[]) => dispatch(saveStudent(students));
    const cancelFormAction = (students: IStudent[]) => dispatch(cancelForm(students));

    const handleCancel = (id: string): void => {
        const newStudents = students.map(student => {
            if (student.id === id) {
                return {
                    ...student,
                    editing: false,
                };
            }
            return student;
        });

        cancelFormAction(newStudents);
    };

    const handleSave = ({ id, name, birthDay, progress }: IStudent): void => {
        const editedStudent = {
            id,
            name,
            birthDay: birthDay !== null ? birthDay!.toString() : '',
            progress,
            editing: false,
        };

        const newStudents = students.map(student => {
            if (student.id === id) {
                return editedStudent;
            }
            return student;
        });

        saveStudentAction(newStudents);
    };

    return <StudentForm {...student} onCancel={handleCancel} onSave={handleSave} />;
};

export default EditFormContainer;
