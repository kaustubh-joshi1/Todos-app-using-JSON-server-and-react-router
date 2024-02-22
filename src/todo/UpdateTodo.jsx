import axios from 'axios'
import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { ApiUrl } from '../../config'

export const UpdateTodo = () => {
    const [name, setName] = useState(null)
    const [email, setEmail] = useState('')
    const [age, setAge] = useState()
    const [education, setEducation] = useState()
    const naviagte = useNavigate()
    // const params=useParams()
    const { todoId } = useParams()

    const getSingleData = async () => {
        try {
            const response = await axios.get(`${ApiUrl}/todo/${todoId}`);
       
            if (response.data) {
             setName(response?.data?.name)   
             setAge(response?.data?.age)   
             setEducation(response?.data?.education)   
             setEmail(response?.data?.email)   
            }
        } catch (error) {
            console.error('Error fetching single data:', error);
        }
       
    }
    const todoSumbit = async (e) => {
        e.preventDefault()
        const todoData = {
            name, age, education, email
        }
        if (!name || !age || !education || !email) {
            alert("please fill all value")
            return
        }
        const data = await axios.put(`${ApiUrl}/todo/${todoId}`, todoData)
        if (!data) {
            alert("some thing wrong")
            return
        }
        if (data) {
            naviagte('/')
        }
    }
    useEffect(() => {
        if (todoId) {

            getSingleData()
        }
    }, [todoId])
    return (
        <form className="ms-5" onSubmit={todoSumbit}>
            <label>
                Name
            </label> <br />
            <input
                className="mt-2"
                type="text"
                name="name"
                value={name}
                onChange={(e) => setName(e.target.value)}

            />
            <br />
            <label>
                Age

            </label> <br />
            <input
                className="mt-2"
                type="number"
                name="age"
                value={age}
                onChange={(e) => setAge(e.target.value)}

            />
            <br />
            <label>
                Education

            </label> <br />
            <input
                className="mt-2"
                type="text"
                name="education"
                value={education}
                onChange={(e) => setEducation(e.target.value)}

            />
            <br />
            <label>
                Email

            </label> <br />
            <input
                className="mt-2"
                type="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />
            <br />
            <button type="submit" className="mt-2 btn btn-success btn-lg">Submit</button>
        </form>
    )
}
