import React, { Fragment, useRef } from 'react';
import { AiFillCalendar, AiOutlineDelete, AiOutlineEdit } from 'react-icons/ai';
import {Container} from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { ErrorToast, IsEmpty } from '../../helper/FormHelper';
import { CreateTaskRequest } from '../../apiRequest/apiRequest';

const Create = () => {
    let titleRef, descriptionRef = useRef();
    let navigate = useNavigate();

    const handleCreateBtn = () => {
        let title = titleRef.value
        let description = descriptionRef.value
        // console.log(title +" "+description);

        // Validation Apply 
        if(IsEmpty(title)){
            ErrorToast("Task Title is Required")
        }
        else if(IsEmpty(description)){
            ErrorToast("Task Description is Required")
        }
        else{
            CreateTaskRequest(title,description).then((result)=>{
                if(result === true){
                    navigate('/new')
                }
            })
        }
    }


    return (
        <div className='container'>
            <div className='row d-flex justify-content-center'>
                <div className='col-12 col-lg-8 col-md-8 col-sm-12 p-2'>
                    <div className='card'>
                        <div className='card-body'>
                            <h4>Create New Task</h4>
                            <br />
                            {/* <input ref={input=>taskRef=input} className='form-control animated fadeInUp' type="text" placeholder='Task Name'  /> */}
                            <input ref={(input)=>titleRef=input} placeholder="Task Name" className="form-control animated fadeInUp" type="text"/>
                            <br />
                            <textarea ref={(input)=> descriptionRef=input} className='form-control animated fadeInUp' type="text" rows={5} placeholder='Task Name'  />
                            {/* <textarea ref={(input)=>descriptionRef=input} rows={5} placeholder="Task Description" className="form-control animated fadeInUp" type="text"/> */}
                            <button 
                                className='btn btn-primary float-start mt-5'
                                onClick={handleCreateBtn}
                            >
                            Create
                            </button>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Create;