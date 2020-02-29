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
}

export interface IReducerAction {
	type: string;
	payload?: any;
}

export interface IProgressList {
	id: number;
	label: string;
}
