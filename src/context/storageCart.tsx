import { createContext, ReactNode, useEffect, useState } from 'react';
import IProduct from '../types/product';

interface IState {
    products: IProduct[];
    quantity: number;
    total: number;
}

interface IStorageCartContext {
    state: IState;
    reducers: {
        addProduct: (product: IProduct) => void;
        resetCart: () => void;
    };
}

const getCartFromLocalStorage = () => {
    const productList = localStorage.getItem('products') || '[]';
    return {
        storedProducts: JSON.parse(productList),
    };
};

const StorageCartContext = createContext<IStorageCartContext>({
    state: { products: [], quantity: 0, total: 0 },
    reducers: { addProduct: () => {}, resetCart: () => {} },
});

const StorageCartProvider = ({ children }: { children: ReactNode }) => {
    const { storedProducts } = getCartFromLocalStorage();
    const [products, setProducts] = useState<IProduct[]>(storedProducts);
    const [quantity, setQuantity] = useState(0);
    const [total, setTotal] = useState(0);

    useEffect(() => {
        // local storage
        localStorage.setItem('products', JSON.stringify(products));
        // quantity
        let newQuantity = products.reduce((acc: number, product: IProduct) => {
            return (acc += 1);
        }, 0);
        setQuantity(newQuantity);
        // total
        let newTotal = products.reduce((acc: number, product: IProduct) => {
            return (acc += product.price * product.quantity);
        }, 0);
        newTotal = parseFloat(newTotal.toFixed(2));
        setTotal(newTotal);
    }, [products]);

    const addProduct = (product: IProduct) => {
        setProducts([...products, product]);
        setQuantity((quantity) => quantity + 1);
        setTotal((total) => total + product.price * product.quantity);
    };

    const resetCart = () => {
        setProducts([]);
        setQuantity(0);
        setTotal(0);
    };

    return (
        <StorageCartContext.Provider
            value={{
                state: { products, quantity, total },
                reducers: { addProduct, resetCart },
            }}
        >
            {children}
        </StorageCartContext.Provider>
    );
};

export { StorageCartContext, StorageCartProvider };
