import IProduct from '../../types/product';

interface IAction {
    type:
        | 'SET_SIZE'
        | 'SET_EXTRAS'
        | 'SET_QUANTITY'
        | 'SET_PRICE'
        | 'SET_NAME'
        | 'SET_IMG'
        | 'SET_ID';
    payload?: any;
}

const reducer = (state: IProduct, action: IAction) => {
    switch (action.type) {
        case 'SET_ID':
            return { ...state, id: action.payload.id };
        case 'SET_NAME':
            return { ...state, name: action.payload.name };
        case 'SET_IMG':
            return { ...state, image: action.payload.image };
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
