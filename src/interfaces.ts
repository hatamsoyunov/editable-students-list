export interface IStudentBase {
    name: string;
    birthDay: string;
    progress: number;
}

export interface IStudent extends IStudentBase {
    id: string;
    name: string;
    editing: boolean;
}

export type Order = 'asc' | 'desc';

export interface IStudentsState {
    students: IStudent[];
    newForm?: boolean;
    editForm?: boolean;
    order: Order;
    orderBy: keyof IStudentBase;
}

export interface IReducerAction {
    type: string;
    payload?: any;
}

export interface IProgressList {
    id: number;
    label: string;
}

export interface HeadCell {
    id: keyof IStudentBase;
    label: string;
}

export interface EnhancedTableProps {
    onRequestSort: (event: React.MouseEvent<unknown>, property: keyof IStudentBase) => void;
    order: Order;
    orderBy: string;
}
