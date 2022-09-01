import React, { Fragment, useEffect } from 'react';
import { SummaryRequest } from '../../apiRequest/apiRequest';
import { useSelector } from 'react-redux';

const Dashboard = () => {
   
    useEffect(()=>{
        SummaryRequest()
    }, [])

    const summaryList = useSelector((state) => state.summary.value)
    // console.log(summaryList);
    return (
        <Fragment>
            <div className="container">
                <div className="row">
                    {
                        summaryList.map((task,i) => 
                    <div className="col-12 col-lg-3 col-sm-6 col-md-3  p-2">
                        <div className="card h-100  ">
                            <div className="card-body">
                                <h5 className="animated fadeInUp text-center text-primary  ">{task._id}</h5>
                                 <h5 className="animated fadeInUp text-center text-primary ">{task.sum}</h5>
                            </div>
                        </div>
                    </div>
                        )
                    }
                </div>
            </div>
        </Fragment>
    );
};

export default Dashboard;