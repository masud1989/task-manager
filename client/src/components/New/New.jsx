import React, { Fragment, useEffect } from 'react';
import { AiFillCalendar, AiOutlineDelete, AiOutlineEdit } from 'react-icons/ai';
import { Container } from 'react-bootstrap';
import { TaskListByStatus } from '../../apiRequest/apiRequest';
import { useSelector } from 'react-redux';
import { DeleteAlert } from '../../helper/DeleteAlert';
import { ToastContainer } from 'react-toastify';

const New = () => {

    useEffect( ()=>{
        TaskListByStatus("New")
    }, [])

    const NewTaskList = useSelector((state)=>state.task.New)
// console.log(NewTaskList);

    const handleDeleteItem = (id) => {
        DeleteAlert(id).then((result) => {
            if(result === true){
                TaskListByStatus("New")
            }
        })
    }

    return (
        <Fragment>
        <Container fluid={true} className="content-body">
        <div   className="row p-0 m-0">
                    <div className="col-12 col-md-6 col-lg-8 px-3">
                        <h5>New Tasks</h5>
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
                        NewTaskList.map((task, i) => 
                        <div key={i.toString()} className="col-12 col-lg-3 col-sm-6 col-md-3  p-2">
                            <div className="card h-100">
                                <div className="card-body">
                                    {/* <h5 className="animated fadeInUp">Total Progress </h5> */}
                                    {/* <h6 className="text-secondary animated fadeInUp">55</h6> */}
                                    <h4 className="animated fadeInUp">{task.title}</h4>
                                    <p className="animated fadeInUp">{task.description}</p>
                                    <p className="m-0 animated fadeInUp p-0">
                                        <AiFillCalendar/>{task.createdDate}
                                        <a className="icon-nav text-primary mx-1"><AiOutlineEdit /></a>
                                        <a onClick={handleDeleteItem.bind(this,task._id)} className="icon-nav text-danger mx-1"><AiOutlineDelete /></a>
                                        <a className="badge float-end bg-info">{task.status}</a>
                                    </p>
                                </div>
                            </div>
                        </div>   
                     )
                    }
<ToastContainer />
                </div>
        </Container>
    </Fragment>
    );
};

export default New;