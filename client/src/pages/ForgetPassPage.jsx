import React, { Fragment, lazy, Suspense } from 'react';
import LazyLoader from '../components/MasterLayout/LazyLoader';
import MasterLayout from '../components/MasterLayout/MasterLayout';
const ForgetPass = lazy( ()=> import('../components/ForgetPass/ForgetPass') )

const ForgetPassPage = () => {
    return (
        <Fragment>
            <MasterLayout>
                <Suspense fallback={<LazyLoader />}>
                    <ForgetPass />
                </Suspense>
            </MasterLayout>
        </Fragment>
    );
};

export default ForgetPassPage;