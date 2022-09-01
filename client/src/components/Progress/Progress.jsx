import React, { Fragment, useEffect } from 'react';
import { Container } from 'react-bootstrap';
import { AiFillCalendar, AiOutlineDelete, AiOutlineEdit } from 'react-icons/ai';
import { useSelector } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import { TaskListByStatus } from '../../apiRequest/apiRequest';
import DeleteAlert from '../../helper/DeleteAlert';

const Progress = () => {

    useEffect( ()=>{
        TaskListByStatus("Progress")
    }, [])

    const NewProgressList = useSelector((state)=>state.task.Progress)

    //Delete Function
      const handleDeleteItem = (id) => {
        DeleteAlert(id).then((result) => {
            if(result === true){
                TaskListByStatus("Progress")
            }
        })
    }

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
                {
                    NewProgressList.map((task, i) =>
                        <div key={i.toString()} className="col-12 col-lg-3 col-sm-6 col-md-3  p-2">
                            <div className="card h-100">
                                <div className="card-body">
                                    {/* <h5 className="animated fadeInUp">Total Progress </h5> */}
                                    {/* <h6 className="text-secondary animated fadeInUp">55</h6> */}
                                    <h4 className="animated fadeInUp">{task.title}</h4>
                                    <p className="animated fadeInUp">{task.escription}</p>
                                    <p className="m-0 animated fadeInUp p-0">
                                        <AiFillCalendar/>{task.createdDate}
                                        <a className="icon-nav text-primary mx-1"><AiOutlineEdit /></a>
                                        <a onClick={handleDeleteItem.bind(this,task._id)} className="icon-nav text-danger mx-1"><AiOutlineDelete /></a>
                                        <a className="badge float-end bg-primary">{task.status}</a>
                                    </p>
                                </div>
                            </div>
                        </div>
                    )
                }             
                </div>
                <ToastContainer />
        </Container>
        </Fragment>
    );
};

export default Progress;