import { Routes, Route } from 'react-router-dom';
import { QueryClientProvider, QueryClient } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import { IntlProvider } from 'react-intl';
import { Footer, Navbar } from './layout';
import { Cart, Home, Orders, PageNotFound, Product } from './pages';

const queryClient = new QueryClient();

const App = () => {
    return (
        <IntlProvider locale="en" defaultLocale="en">
            <QueryClientProvider client={queryClient}>
                <Navbar />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="cart" element={<Cart />} />
                    <Route path="product/:productId" element={<Product />} />
                    <Route path="order/:orderId" element={<Orders />} />
                    <Route path="*" element={<PageNotFound />} />
                </Routes>
                <Footer />
                <ReactQueryDevtools
                    initialIsOpen={false}
                    position="bottom-left"
                />
            </QueryClientProvider>
        </IntlProvider>
    );
};

export default App;
