import React, { Fragment, lazy, Suspense } from 'react';
import LazyLoader from '../components/MasterLayout/LazyLoader';
import MasterLayout from '../components/MasterLayout/MasterLayout';
const Login = lazy( ()=> import('../components/Cancelled/Cancelled') )

const LoginPage = () => {
    return (
        <Fragment>
            <MasterLayout>
                <Suspense fallback={<LazyLoader />}>
                    <Login />
                </Suspense>
            </MasterLayout>
        </Fragment>
    );
};

export default LoginPage;