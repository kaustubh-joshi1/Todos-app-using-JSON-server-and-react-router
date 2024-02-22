import axios from "axios"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { ApiUrl } from "../../config"

export const Todo = () => {
    const [toData, setToData] = useState([])
    const [isLoading, setIsloading] = useState(false)
    const getData = async () => {
        try {
            setIsloading(true)
            // const {data} = await axios.get(`${ApiUrl}/todo`)
            setTimeout(async () => {
                const data = await axios.get(`${ApiUrl}/todo`)
                setToData(data?.data)
                setIsloading(false)
            }, 2000);

        } catch (error) {
            // setIsloading(false)
        }
    }

    const deleteTodo = async (id) => {
        const data = await axios.delete(`${ApiUrl}/todo/${id}`)
        getData()
    }
    useEffect(() => {
        getData()
    }, [])
    return (
        <>
            <div className="container mt-4">
                <Link to='/add' className="btn btn-lg btn-primary">Add Todo</Link>

                {
                    isLoading && <div className="spinner-border text-primary" role="status">
                        <span className="sr-only">Loading...</span>
                    </div>
                }

                <div className="mt-5">
                    {
                         !isLoading  && 
                         <>
                          {
                        toData  && toData.length > 0 ?
                            <table className="table table-striped">
                                <thead>
                                    <tr>
                                        <th>Name</th>
                                        <th>Age</th>
                                        <th>Email</th>
                                        <th>Education</th>
                                        <th>Action</th>
                                    </tr>
                                </thead>
                                <tbody>

                                    {
                                        toData.map((item) => (
                                            <tr key={item.id}>
                                                <td>{item.name}</td>
                                                <td>{item.age}</td>
                                                <td>{item.email}</td>
                                                <td>{item.education}</td>
                                                <td>
                                                    <Link to={`/edit/${item.id}`} className="btn btn-success">edit</Link>
                                                    <button onClick={() => deleteTodo(item.id)} className="btn btn-danger ms-3">delete</button>
                                                </td>
                                            </tr>
                                        ))

                                    }
                                </tbody>
                            </table>
                            : <p>no data available</p>
                    }
                         </>
                    }
                   

                </div>
            </div>
        </>
    )
}
