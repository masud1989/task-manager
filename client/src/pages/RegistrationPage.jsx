import React, { Fragment, lazy, Suspense } from 'react';
import LazyLoader from '../components/MasterLayout/LazyLoader';
import MasterLayout from '../components/MasterLayout/MasterLayout';
const Registration = lazy( ()=> import('../components/Registration/Registration') )

const RegistrationPage = () => {
    return (
        <Fragment>
            <Suspense fallback={<LazyLoader/>}>
                <Registration />
            </Suspense>
        </Fragment>
    );
};

export default RegistrationPage;