import IExtraOption from '../../types/extraOptions';

interface IState {
    price: number;
    size: string;
    extras: IExtraOption[] | [];
    quantity: number;
}

interface IAction {
    type: 'SET_SIZE' | 'SET_EXTRAS' | 'SET_QUANTITY' | 'SET_PRICE';
    payload?: any;
}

const reducer = (state: IState, action: IAction) => {
    switch (action.type) {
        case 'SET_SIZE':
            return { ...state, size: action.payload.size };
        case 'SET_PRICE':
            return { ...state, price: action.payload.price };
        case 'SET_EXTRAS':
            return { ...state, extras: action.payload.extras };
        case 'SET_QUANTITY':
            return { ...state, quantity: action.payload.quantity };
        default:
            return state;
    }
};

export default reducer;
