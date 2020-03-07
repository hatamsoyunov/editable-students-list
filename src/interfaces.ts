export interface IStudent {
	id: string;
	name: string;
	birthDay: string;
	progress: number;
	editing: boolean;
}

export interface IStudentsState {
	students: IStudent[];
	newForm?: boolean;
	editForm?: boolean;
	order: Order;
	orderBy: keyof Data;
}

export interface IReducerAction {
	type: string;
	payload?: any;
}

export interface IProgressList {
	id: number;
	label: string;
}

export interface Data {
	name: string;
	birthDay: string;
	progress: number;
}

export type Order = 'asc' | 'desc';

export interface HeadCell {
	id: 'name' | 'birthDay' | 'progress';
	label: string;
}

export interface EnhancedTableProps {
	onRequestSort: (event: React.MouseEvent<unknown>, property: keyof Data) => void;
	order: Order;
	orderBy: string;
}
