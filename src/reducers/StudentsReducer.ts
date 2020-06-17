import { IStudentsState, IReducerAction } from '../interfaces';

const initialState: IStudentsState = {
    students: [],
    newForm: false,
    editForm: false,
    order: 'asc',
    orderBy: 'name',
};

const reducer = (state: IStudentsState = initialState, action: IReducerAction) => {
    // console.log(action);

    switch (action.type) {
        case 'ADD_NEW_FORM':
            return {
                ...state,
                newForm: true,
            };

        case 'CANCEL_NEW_FORM':
            return {
                ...state,
                newForm: false,
            };

        case 'ADD_STUDENT':
            return {
                ...state,
                students: action.payload,
                newForm: false,
            };

        case 'EDIT_STUDENT':
            return {
                ...state,
                editForm: true,
                students: action.payload,
            };

        case 'SAVE_STUDENT':
            return {
                ...state,
                editForm: false,
                students: action.payload,
            };

        case 'CANCEL_FORM':
            return {
                ...state,
                editForm: false,
                students: action.payload,
            };

        case 'REMOVE_STUDENT':
            return {
                ...state,
                students: action.payload,
            };

        case 'SET_SORT':
            return {
                ...state,
                order: action.payload.order,
                orderBy: action.payload.orderBy,
            };

        default:
            return state;
    }
};

export default reducer;
