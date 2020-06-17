import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { TableContainer, Table, TableHead, TableRow, TableCell, TableBody, Paper, TableSortLabel } from '@material-ui/core';

import { IStudent, IStudentsState, HeadCell, Order, EnhancedTableProps, IStudentBase } from '../interfaces';
import { addStudent, setSort } from '../actions/StudentsActions';
import { defaultStudents } from '../utils/defaultStudents';

import NewFormContainer from './NewFormContainer';
import StudentsList from './StudentsList';
import StudentsListEmpty from './StudentsListEmpty';

// Table headers
const headCells: HeadCell[] = [
    { id: 'name', label: 'ФИО' },
    { id: 'birthDay', label: 'Дата рождения' },
    { id: 'progress', label: 'Успеваемость' },
];

// Children table head component
const EnhancedTableHead: React.FC<EnhancedTableProps> = props => {
    const { order, orderBy, onRequestSort } = props;
    const createSortHandler = (property: keyof IStudentBase) => (event: React.MouseEvent) => {
        onRequestSort(event, property);
    };

    return (
        <TableHead>
            <TableRow>
                {headCells.map((headCell, index) => (
                    <TableCell
                        className={`table-col-${index + 1}`}
                        key={headCell.id}
                        sortDirection={orderBy === headCell.id ? order : false}
                    >
                        <TableSortLabel
                            active={orderBy === headCell.id}
                            direction={orderBy === headCell.id ? order : 'asc'}
                            onClick={createSortHandler(headCell.id)}
                        >
                            {headCell.label}
                        </TableSortLabel>
                    </TableCell>
                ))}
                <TableCell className="table-col-4">Действие</TableCell>
            </TableRow>
        </TableHead>
    );
};

// Main Component
const StudentsTable: React.FC = () => {
    const dispatch = useDispatch();
    const students = useSelector((state: IStudentsState) => state.students);
    const newForm = useSelector((state: IStudentsState) => state.newForm);
    const order = useSelector((state: IStudentsState) => state.order);
    const orderBy = useSelector((state: IStudentsState) => state.orderBy);

    const addStudentAction = (data: IStudent[]) => dispatch(addStudent(data));
    const setSortAction = (order: Order, orderBy: keyof IStudentBase) => dispatch(setSort(order, orderBy));

    const tableRowForm = newForm ? <NewFormContainer /> : null;
    const studentsList = students.length > 0 || newForm ? <StudentsList order={order} orderBy={orderBy} /> : <StudentsListEmpty />;

    useEffect(() => {
        const storageState = localStorage.getItem('students');
        const students = storageState !== null ? (JSON.parse(storageState) as IStudent[]) : defaultStudents;

        addStudentAction(students);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    useEffect(() => {
        localStorage.setItem('students', JSON.stringify(students));
    }, [students]);

    const handleRequestSort = (event: React.MouseEvent<unknown>, property: keyof IStudentBase) => {
        const isAsc = orderBy === property && order === 'asc';
        setSortAction(isAsc ? 'desc' : 'asc', property);
    };

    return (
        <TableContainer component={Paper}>
            <Table>
                <EnhancedTableHead order={order} orderBy={orderBy} onRequestSort={handleRequestSort} />
                <TableBody>
                    {studentsList}
                    {tableRowForm}
                </TableBody>
            </Table>
        </TableContainer>
    );
};

export default StudentsTable;
