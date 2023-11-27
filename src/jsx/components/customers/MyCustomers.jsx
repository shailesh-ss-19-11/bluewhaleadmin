import React, { useEffect, useState } from 'react'
import MUIDataTable from "mui-datatables";
import CustomerList from './components/CustomerList';
import axios from 'axios';
import { BACKENDURL } from '../../../AppVaribale';
import Menu from 'material-ui/Menu';
import MenuItem from 'material-ui/MenuItem';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
const MyCustomers = () => {
    const [allusers, setallusers] = useState([]);
    const [anchorElAction, setanchorElAction] = useState(null)
    const getUserList = () => {
        axios.get(`${BACKENDURL}api/Customer/User/allCustomer`).then((resp) => {
            console.log(resp);
            if (resp.status == 200) {
                setallusers(resp.data.userList)
            } else {
                setallusers([]);
            }
        }).catch((err) => console.log(err));
    }
    useEffect(() => {
        getUserList();
    }, []);

    const handleActionClose = () => {
        setanchorElAction(null);
    }

    const handleActionOpen = (e) => {
        setanchorElAction(e.currentTarget);
    }
    const actionOpen = Boolean(anchorElAction);
    return (
        <div className='card w-100 p-2'>
            <CustomerList allusers={allusers} handleActionOpen={handleActionOpen} actionOpen={actionOpen} handleActionClose={handleActionClose}/>
        </div>
    )
}

export default MyCustomers
