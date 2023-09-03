import React from 'react'
import {AiFillDelete,AiFillSetting} from 'react-icons/ai'

const ServiceProviderCard = (props) => {
    console.log(props);
    return (
            <div className="col-md-4">
                <div className="card h-100">
                    <div className='d-flex flex-column align-items-center'>
                        <div style={{ width: "215px", height: "130px" }}>
                            <img src={props.img.img} alt="" style={{width:"100%"}}/>
                        </div>
                        <p>Abhishek Huiwai</p>
                        <p>ID : 19</p>
                    </div>
                    <div className="d-flex justify-content-between px-3">
                        <div>
                            <button className='btn btn-primary p-2'><AiFillSetting /> manage</button>
                        </div>
                        <div>
                            <button className='btn btn-danger p-2'><AiFillDelete /> Delete</button>
                        </div>
                    </div>
                </div>
            </div>
    )
}

export default ServiceProviderCard
