import React, { useEffect, useState } from 'react'
import MUIDataTable from "mui-datatables";
import { Link } from 'react-router-dom';
import axios from 'axios';
import { BACKENDURL } from '../../../../AppVaribale';
import { useParams } from 'react-router-dom';
import { GoDotFill } from 'react-icons/go'
const ServersList = (props) => {

    const [serverlist, setserverlist] = useState([])
    const params = useParams();
    const columns = ["Name", "Company", "City", "State"];
    const options = {
        filterType: 'checkbox',
    };

    const getServerslist = () => {
        axios.get(`${BACKENDURL}api/cloud/linode/instances/list/${params.id}`).then((resp) => {
            console.log(resp);
            if (resp.status == 200) {
                setserverlist(resp.data.apiRes.data);
            }

        }).then((err) => console.log(err));
    }

    useEffect(() => {
        getServerslist();
    }, []);
    return (
        <div className='card w-100 p-2'>
            <div className="d-flex justify-content-end p-2">
                {/* <Link className='btn btn-primary btn-square' to={"/server/linode/create"}>
                    Create Linode
                </Link> */}
            </div>
            <MUIDataTable
                title={"Servers List"}
                data={serverlist}
                columns={[
                    {
                        label: "No.",
                        name: "sr",
                        options: {
                            customBodyRender: (value, tableMeta, updateValue) => {
                                return (
                                    <>
                                        <span>{" "}{tableMeta.rowIndex + 1} {" "}</span>
                                    </>
                                );
                            },
                        },
                    },
                    {
                        label: "Label",
                        name: "label",
                        options: {
                            customBodyRender: (value, tableMeta, updateValue) => {
                                return value !== "" &&
                                    value !== null &&
                                    value !== undefined ? (
                                    <span>{value}</span>
                                ) : (
                                    <span>--------</span>
                                );
                            },
                        },
                    },
                    {
                        label: "Status",
                        name: "status",
                        options: {
                            customBodyRender: (value, tableMeta, updateValue) => {
                                return value !== "" &&
                                    value !== null &&
                                    value !== undefined ? (
                                    <span style={{ textTransform: "capitalize" }}> <GoDotFill style={{ color: "rgb(23, 207, 115)", fontSize: "20px" }} /> {value}</span>
                                ) : (
                                    <span>--------</span>
                                );
                            },
                        },
                    },
                    {
                        label: "Plan",
                        name: "type",
                        options: {
                            customBodyRender: (value, tableMeta, updateValue) => {
                                return value !== "" &&
                                    value !== null &&
                                    value !== undefined ? (
                                    <span>{value}</span>
                                ) : (
                                    <span>--------</span>
                                );
                            },
                        },
                    },
                    {
                        label: "Public IP Address",
                        name: "ipv4",
                        options: {
                            customBodyRender: (value, tableMeta, updateValue) => {
                                return value !== "" &&
                                    value !== null &&
                                    value !== undefined ? (
                                    <span>{value[0]}</span>
                                ) : (
                                    <span>--------</span>
                                );
                            },
                        },
                    },
                    {
                        label: "Region",
                        name: "region",
                        options: {
                            customBodyRender: (value, tableMeta, updateValue) => {
                                return value !== "" &&
                                    value !== null &&
                                    value !== undefined ? (
                                    <span>{value}</span>
                                ) : (
                                    <span>--------</span>
                                );
                            },
                        },
                    },
                    {
                        label: "Last Backup",
                        name: "backups",
                        options: {
                            customBodyRender: (value, tableMeta, updateValue) => {
                                return value !== "" &&
                                    value.last_successful !== null &&
                                    value !== undefined ? (
                                    <span>{value.last_successful}</span>
                                ) : (
                                    <span>--------</span>
                                );
                            },
                        },
                    },

                ]}
                options={options}
            />
        </div>
    )
}

export default ServersList
