import React, { Fragment, useEffect } from 'react';
import { Container } from 'react-bootstrap';
import { AiFillCalendar, AiOutlineDelete, AiOutlineEdit } from 'react-icons/ai';
import { TaskListByStatus } from '../../apiRequest/apiRequest';

const Progress = () => {

    useEffect( ()=>{
        TaskListByStatus("Progress")
    }, [])

    return (
        <Fragment>
        <Container fluid={true} className="content-body">
        <div className="row p-0 m-0">
                    <div className="col-12 col-md-6 col-lg-8 px-3">
                        <h5>In Progress Tasks</h5>
                    </div>
                    <div className="col-12 float-end col-md-6 col-lg-4 px-2">
                        <div className="row">
                            <div className="col-8">
                                <input className="form-control w-100"/>
                            </div>
                            <div className="col-4">
                                <button className="btn btn-primary w-100">Search</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
             
                        <div  className="col-12 col-lg-3 col-sm-6 col-md-4  p-2 m-3">
                            <div className="card h-100">
                                <div className="card-body">
                                    {/* <h5 className="animated fadeInUp">Total Progress </h5> */}
                                    {/* <h6 className="text-secondary animated fadeInUp">55</h6> */}
                                    <h4 className="animated fadeInUp">Title</h4>
                                    <p className="animated fadeInUp">Description</p>
                                    <p className="m-0 animated fadeInUp p-0">
                                        <AiFillCalendar/>22/02/2022
                                        <a className="icon-nav text-primary mx-1"><AiOutlineEdit /></a>
                                        <a className="icon-nav text-danger mx-1"><AiOutlineDelete /></a>
                                        <a className="badge float-end bg-primary">Status</a>
                                    </p>
                                </div>
                            </div>
                        </div>                
                </div>
        </Container>
        </Fragment>
    );
};

export default Progress;