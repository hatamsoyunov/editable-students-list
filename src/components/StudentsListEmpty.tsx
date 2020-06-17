import React from 'react';
import { TableRow, TableCell } from '@material-ui/core';

const StudentsListEmpty = () => {
    return (
        <TableRow hover className="empty">
            <TableCell align="center" colSpan={4}>
                Список пуст
            </TableCell>
        </TableRow>
    );
};

export default StudentsListEmpty;
