import axios from 'axios'
import React from 'react'
import { Table, Badge } from 'reactstrap'
import image from './image/img1.jpg'
import { Model } from './Model'
// For forms use formik
export function KunddliList() {
    const [tableData, setTableData] = React.useState([])
    const [dataModal, setModalData] = React.useState(null)

    React.useEffect(() => {
        commingData();
    }, [])
    const commingData = async () => {
        const data = await axios.get('http://localhost:5000/shortListbecholer')
        setTableData(data.data);
        console.log(data.data)
    }
    const findDetail = async (id) => {
        const a = await axios.get(`http://localhost:5000/findbecholer?id=${id}`)
        console.log(a?.data)
        setModalData(a?.data);
    }
    const dataDelete = async (id) => {
        const del = await axios.delete(`http://localhost:5000/deletebecholer?id=${id}`)
        console.log(del?.data);
        commingData();

    }
    return (
        <>
            <div>
                <h3>KunddliList</h3>
                <div style={{ margin: "3rem" }}>
                    <Table>
                        <thead>
                            <tr><th>Groom</th>
                                <th>Bridle</th>
                                <th>id</th>
                                <th> Name</th>
                                <th>Age</th>
                                <th>qualification</th>
                                <th>fatherName</th>
                                <th style={{ whiteSpace: "nowrap" }}>F-name</th>
                                <th style={{ whiteSpace: "nowrap" }}>F-age</th>
                                <th style={{ whiteSpace: "nowrap" }}>F-qualification</th>
                                <th style={{ whiteSpace: "nowrap" }}>F-fathername</th>
                                <th style={{ whiteSpace: "nowrap" }}>Status</th>
                                <th >update</th>
                                <th>Delete</th>
                            </tr>
                        </thead>
                        <tbody>
                            {tableData.map((o) => {
                                return <tr>
                                    <td><img style={{ borderRadius: "1rem" }} src={image} alt='no img' width="25px" /></td>
                                    <td><img style={{ borderRadius: "1rem" }} src={image} alt='no img' width="25px" /></td>
                                    <th scope="row">{o.id}</th>
                                    <td>{o.Mname}</td>
                                    <td>{o.Mage}</td>
                                    <td>{o.Mqualification}</td>
                                    <td>{o.Mfathername}</td>
                                    <td>{o.Fname}</td>
                                    <td>{o.Fage}</td>
                                    <td>{o.Fqualificaton}</td>
                                    <td>{o.Ffathername}</td>
                                    {/* {o.status+''} */}
                                    <td>{
                                        o.status ?
                                            <Badge color="success"> matched</Badge>
                                            :
                                            <Badge color="danger">not matched</Badge>
                                    }

                                    </td>
                                    <td onClick={() => findDetail(o.id)} >
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-box-arrow-in-down-left" viewBox="0 0 16 16">
                                            <path fill-rule="evenodd" d="M9.636 2.5a.5.5 0 0 0-.5-.5H2.5A1.5 1.5 0 0 0 1 3.5v10A1.5 1.5 0 0 0 2.5 15h10a1.5 1.5 0 0 0 1.5-1.5V6.864a.5.5 0 0 0-1 0V13.5a.5.5 0 0 1-.5.5h-10a.5.5 0 0 1-.5-.5v-10a.5.5 0 0 1 .5-.5h6.636a.5.5 0 0 0 .5-.5z" />
                                            <path fill-rule="evenodd" d="M5 10.5a.5.5 0 0 0 .5.5h5a.5.5 0 0 0 0-1H6.707l8.147-8.146a.5.5 0 0 0-.708-.708L6 9.293V5.5a.5.5 0 0 0-1 0v5z" />
                                        </svg></td>
                                    <td onClick={() => dataDelete(o.id)}>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash3" viewBox="0 0 16 16">
                                            <path d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5ZM11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H2.506a.58.58 0 0 0-.01 0H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1h-.995a.59.59 0 0 0-.01 0H11Zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5h9.916Zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47ZM8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5Z" />
                                        </svg>
                                    </td>
                                </tr>
                            })}

                        </tbody>
                    </Table>
                </div>
            </div>
            <Model openModel={dataModal} refresh={commingData} />
        </>
    )
}


















