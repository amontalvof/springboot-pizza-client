import { Routes, Route } from 'react-router-dom';
import { Footer, Navbar } from './layout';
import { Cart, Home, Orders, PageNotFound, Product } from './pages';
import { IntlProvider } from 'react-intl';

const App = () => {
    return (
        <IntlProvider locale="en" defaultLocale="en">
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="cart" element={<Cart />} />
                <Route path="product/:productId" element={<Product />} />
                <Route path="order/:orderId" element={<Orders />} />
                <Route path="*" element={<PageNotFound />} />
            </Routes>
            <Footer />
        </IntlProvider>
    );
};

export default App;
