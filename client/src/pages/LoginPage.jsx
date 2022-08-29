import React, { Fragment, lazy, Suspense } from 'react';
import LazyLoader from '../components/MasterLayout/LazyLoader';
import MasterLayout from '../components/MasterLayout/MasterLayout';
const Login = lazy( ()=> import('../components/Login/Login') )

const LoginPage = () => {
    return (
        <Fragment>
                <Suspense fallback={<LazyLoader />}>
                    <Login />
                </Suspense>
        </Fragment>
    );
};

export default LoginPage;