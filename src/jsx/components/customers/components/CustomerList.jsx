import React from 'react'
import MUIDataTable from "mui-datatables";
import { Link } from 'react-router-dom';
import { IconButton } from '@mui/material';
import { BiDotsVerticalRounded } from 'react-icons/bi'
import "../Customer.scss"
const CustomerList = (props) => {
    return (
        <div>
            <MUIDataTable
                title={"Linode List"}
                data={props.allusers}
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
                        label: "Name",
                        name: "name",
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
                        label: "Email",
                        name: "email",
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
                        label: "Company Name",
                        name: "companyname",
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
                        label: "Phone",
                        name: "phn_number",
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
                        label: "Country",
                        name: "country",
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
                        label: "Actions",
                        name: "id",
                        options: {
                            customBodyRender: (value, tableMeta, updateValue) => {
                                return (
                                    <span className="more-option-block">
                                        <IconButton
                                            id="basic-button"
                                            aria-controls={
                                                props.actionOpen ? "basic-menu" : undefined
                                            }
                                            aria-haspopup="true"
                                            aria-expanded={
                                                props.actionOpen ? "true" : undefined
                                            }
                                            onClick={(e) => {
                                                console.log(tableMeta, "tableMeta.rowData[10]")
                                                props.handleActionOpen(e);
                                                // props.getId(tableMeta.rowData[13]);
                                                // props.fetchEditData(tableMeta.rowData[13]);
                                                // props.getTicketNumber(tableMeta.rowData[13], tableMeta.rowData[1]);
                                            }}
                                        >
                                            {/* <BiDotsVerticalRounded className="icon" /> */}
                                            <Link className='btn btn-sm btn-square btn-primary p-1' to={`/customers/cloudlist/${tableMeta?.rowData[6]}`}>Servers</Link>
                                        </IconButton>
                                    </span>)
                            },
                        },
                    },
                ]}
            // options={options}
            />
        </div>
    )
}

export default CustomerList
