import { Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { QueryClientProvider, QueryClient } from 'react-query';
// import { ReactQueryDevtools } from 'react-query/devtools';
import { IntlProvider } from 'react-intl';
import { Footer, Navbar } from './layout';
import { StorageCartProvider } from './context/storageCart';
import { AuthProvider } from './context/auth';
import 'react-toastify/dist/ReactToastify.css';
import RequireAuth from './components/requireAuth';
import ScrollToTop from './components/scrollToTop';
import {
    LazyCart,
    LazyHome,
    LazyProduct,
    LazyOrders,
    LazyPageNotFound,
    LazyAdmin,
    LazyLogin,
} from './pages';

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
                            <Route path="/" element={<LazyHome />} />
                            <Route path="cart" element={<LazyCart />} />
                            <Route
                                path="admin"
                                element={
                                    <RequireAuth>
                                        <LazyAdmin />
                                    </RequireAuth>
                                }
                            />
                            <Route path="login" element={<LazyLogin />} />
                            <Route
                                path="product/:productId"
                                element={<LazyProduct />}
                            />
                            <Route
                                path="order/:orderId"
                                element={<LazyOrders />}
                            />
                            <Route path="*" element={<LazyPageNotFound />} />
                        </Routes>
                        <Footer />
                    </StorageCartProvider>
                </AuthProvider>
                {/* <ReactQueryDevtools
                    initialIsOpen={false}
                    position="bottom-left"
                /> */}
            </QueryClientProvider>
        </IntlProvider>
    );
};

export default App;
