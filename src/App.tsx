import { Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { QueryClientProvider, QueryClient } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import { IntlProvider } from 'react-intl';
import { Footer, Navbar } from './layout';
import { Cart, Home, Orders, PageNotFound, Product } from './pages';
import { StorageCartProvider } from './context/storageCart';
import { AuthProvider } from './context/auth';
import 'react-toastify/dist/ReactToastify.css';
import Admin from './pages/admin';
import Login from './pages/login';
import RequireAuth from './components/requireAuth';
import ScrollToTop from './components/scrollToTop';

const queryClient = new QueryClient();

const App = () => {
    return (
        <IntlProvider locale="en" defaultLocale="en">
            <QueryClientProvider client={queryClient}>
                <AuthProvider>
                    <StorageCartProvider>
                        <ToastContainer />
                        <ScrollToTop />
                        <Navbar />
                        <Routes>
                            <Route path="/" element={<Home />} />
                            <Route path="cart" element={<Cart />} />
                            <Route
                                path="admin"
                                element={
                                    <RequireAuth>
                                        <Admin />
                                    </RequireAuth>
                                }
                            />
                            <Route path="login" element={<Login />} />
                            <Route
                                path="product/:productId"
                                element={<Product />}
                            />
                            <Route path="order/:orderId" element={<Orders />} />
                            <Route path="*" element={<PageNotFound />} />
                        </Routes>
                        <Footer />
                    </StorageCartProvider>
                </AuthProvider>
                <ReactQueryDevtools
                    initialIsOpen={false}
                    position="bottom-left"
                />
            </QueryClientProvider>
        </IntlProvider>
    );
};

export default App;
