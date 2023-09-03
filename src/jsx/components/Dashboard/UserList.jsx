import React from 'react'
import { Card, Table } from 'react-bootstrap'
import { Link } from 'react-router-dom'
const UserList = () => {
    let data = [
        {
            "name": "Marah Dorsey",
            "email": "dui@google.couk",
            "country": "Netherlands",
            "phone": "(311) 339-6441"
        },
        {
            "name": "Akeem Navarro",
            "email": "nullam.scelerisque@outlook.org",
            "country": "Brazil",
            "phone": "(647) 538-0266"
        },
        {
            "name": "Yuli Morrow",
            "email": "nibh.dolor.nonummy@outlook.couk",
            "country": "Austria",
            "phone": "(604) 376-7385"
        },
        {
            "name": "Emerson Macdonald",
            "email": "vestibulum.mauris.magna@hotmail.ca",
            "country": "Brazil",
            "phone": "(146) 877-5118"
        },
        {
            "name": "Alexandra Battle",
            "email": "pede.ac@google.couk",
            "country": "Colombia",
            "phone": "1-500-857-3374"
        }
    ]
    return (
        <div>
            <Card>
                <Card.Header>
                    <Card.Title>User List</Card.Title>
                </Card.Header>
                <Card.Body>
                    <Table responsive>
                        <thead>
                            <tr>
                                {/* <th className="width50 ">
													<div className="form-check custom-checkbox checkbox-success check-lg me-3 bs_exam_topper_all">
														<input
															type="checkbox"
															className="form-check-input"
															id="checkAll"
															required=""
														//   onClick={() => chackboxFun("all")}
														/>
														<label
															className="form-check-label"
															htmlFor="checkAll"
														></label>
													</div>
												</th> */}
                                <th>
                                    <strong>NAME</strong>
                                </th>
                                <th>
                                    <strong>Email</strong>
                                </th>
                                <th>
                                    <strong>Phone</strong>
                                </th>
                                <th>
                                    <strong>Country</strong>
                                </th>
                                <th>
                                    <strong>Status</strong>
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {data.length > 0 ?
                                data.map((user) => (
                                    <tr>
                                        {/* <td>
													<div className="form-check custom-checkbox checkbox-success check-lg me-3 bs_exam_topper">
														<input
															type="checkbox"
															className="form-check-input"
															id="customCheckBox2"
															required=""
														//   onClick={() => chackboxFun()}
														/>
														<label
															className="form-check-label"
															htmlFor="customCheckBox2"
														></label>
													</div>
												</td> */}
                                        <td>
                                            <div className="d-flex align-items-center">
                                                {/* <img
															src={avatar1}
															className="rounded-lg me-2"
															width="24"
															alt=""
														/>{" "} */}
                                                <span className="w-space-no">{user.name}</span>
                                            </div>
                                        </td>
                                        <td>{user.email}</td>
                                        <td>{user.phone}</td>
                                        <td>
                                           {user.country}
                                        </td>
                                        <td>
                                            {/* <div className="d-flex">
                                        <Link
                                            href="#"
                                            className="btn btn-primary shadow btn-xs sharp me-1"
                                        >
                                            <i className="fas fa-pencil-alt"></i>
                                        </Link>
                                        <Link
                                            href="#"
                                            className="btn btn-danger shadow btn-xs sharp"
                                        >
                                            <i className="fa fa-trash"></i>
                                        </Link>
                                    </div> */}
                                            active
                                        </td>
                                    </tr>
                                ))
                                : null}
                        </tbody>
                    </Table>
                </Card.Body>
            </Card>
        </div>
    )
}

export default UserList
