import React, { Fragment, lazy, Suspense } from 'react';
import LazyLoader from '../components/MasterLayout/LazyLoader';
import MasterLayout from '../components/MasterLayout/MasterLayout';
const NotFound = lazy( ()=> import('../components/NotFound/NotFound') )

const NotFoundPage = () => {
    return (
        <Fragment>
        <MasterLayout>
           <Suspense fallback={<LazyLoader />}>
                <NotFound />
           </Suspense>
        </MasterLayout>
    </Fragment>
    );
};

export default NotFoundPage;