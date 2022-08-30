import React, { Fragment } from 'react';
import { AiFillCalendar, AiOutlineDelete, AiOutlineEdit } from 'react-icons/ai';
import {Container} from 'react-bootstrap';

const Create = () => {
    return (
        <div className='container'>
            <div className='row d-flex justify-content-center'>
                <div className='col-12 col-lg-8 col-md-8 col-sm-12 p-2'>
                    <div className='card'>
                        <div className='card-body'>
                            <h4>Create New</h4>
                            <br />
                            {/* <input ref={input=>taskRef=input} className='form-control animated fadeInUp' type="text" placeholder='Task Name'  /> */}
                            <input placeholder="Task Name" className="form-control animated fadeInUp" type="text"/>
                            <br />
                            <textarea className='form-control animated fadeInUp' type="text" rows={5} placeholder='Task Name'  />
                            {/* <textarea ref={(input)=>descriptionRef=input} rows={5} placeholder="Task Description" className="form-control animated fadeInUp" type="text"/> */}
                            <button className='btn btn-primary float-start mt-5'>Create</button>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Create;