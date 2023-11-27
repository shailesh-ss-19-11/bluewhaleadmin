import React, { useEffect, useState } from 'react'
import PageTitle from '../../../layouts/PageTitle'
import { AiFillDelete, AiFillSetting } from 'react-icons/ai'
import axios from 'axios'
import { BACKENDURL } from '../../../../AppVaribale'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'

const CustomersCloudsList = () => {
    const [cloudsList, setcloudsList] = useState([])
    const params = useParams()
    const getCustomerServer = () => {
        axios.get(`${BACKENDURL}api/Customer/Cloud/getCustCloud/${params.id}`).then((resp) => {
            console.log(resp)
            if (resp.status == 200) {
                setcloudsList(resp.data.data)
            } else {
                setcloudsList([]);
            }
        }).catch((err) => console.log(err));
    }
    useEffect(() => {
        getCustomerServer();
    }, [])

    return (
        <>
            <PageTitle activeMenu={"Servers"} motherMenu={"Admin"} />
            {cloudsList.length > 0 ?
                cloudsList.map((server) => (
                    <div className="row">
                        <div className="col-md-6">
                            <div className="card p-1">
                                <div className="d-flex p-2 justify-content-between align-items-center">
                                    <div className="d-flex">
                                        {/* <div style={{ width: "100px" }}>
                                            <img style={{ width: "100%" }} src="data:image/png;base64,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" alt="" />
                                        </div> */}
                                        <div>
                                            <strong>
                                                {server.servername}
                                            </strong>
                                            {/* <p className='m-0'>Region a-southeast-3</p>
                                            <p className='m-0'>AAAAAAAAAAAAAAAB4b/4DBD9O8w4ftTUAAAAASUVORK5CYII=</p> */}
                                        </div>
                                    </div>
                                    {/* <div>
                                        <p>IP</p>
                                    </div> */}
                                    <div>
                                       {server.isActive=="Y"? 
                                       <button className='btn btn-sm btn-success'>
                                            Active
                                        </button>
                                       : <button className='btn btn-sm btn-danger'>
                                            Not Active
                                        </button>}
                                    </div>
                                    <div>
                                        <Link className='btn btn-sm btn-primary' to={`/customers/cloudlist/serverlist/${params.id}`}>
                                            <AiFillSetting /> Manage
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))
                : null}
        </>
    )
}

export default CustomersCloudsList;
