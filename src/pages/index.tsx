import { lazy } from 'react';

const LazyCart = lazy(
    /* webpackChunkName: "LazyCart" */ () => import('./cart')
);
const LazyHome = lazy(
    /* webpackChunkName: "LazyHome" */ () => import('./home')
);
const LazyProduct = lazy(
    /* webpackChunkName: "LazyProduct" */ () => import('./product')
);
const LazyOrders = lazy(
    /* webpackChunkName: "LazyOrders" */ () => import('./orders')
);
const LazyPageNotFound = lazy(
    /* webpackChunkName: "LazyPageNotFound" */ () => import('./pageNotFound')
);
const LazyAdmin = lazy(
    /* webpackChunkName: "LazyAdmin" */ () => import('./admin')
);
const LazyLogin = lazy(
    /* webpackChunkName: "LazyLogin" */ () => import('./login')
);

export {
    LazyCart,
    LazyHome,
    LazyProduct,
    LazyOrders,
    LazyPageNotFound,
    LazyAdmin,
    LazyLogin,
};
