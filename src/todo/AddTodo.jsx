import axios from "axios"
import { useState } from "react"
import { ApiUrl } from "../../config"
import { useNavigate } from "react-router-dom"

const AddTodo = () => {
    const [name, setName] = useState(null)
    const [email, setEmail] = useState('')
    const [age, setAge] = useState()
    const [education, setEducation] = useState()
    const naviagte = useNavigate()
    // const [formData, setFormData] = useState({
    //     name: '',
    //     age: '',
    //     education: '',
    //     email: ''
    //   });

    //   const handleChange = (e) => {
    //     const { name, value } = e.target;
    //     setFormData(prevState => ({
    //       ...prevState,
    //       [name]: value
    //     }));
    //   };
    const todoSumbit = async (e) => {
        e.preventDefault()
        const todoData = {
            name, age, education, email
        }
        if (!name|| !age|| !education|| !email) {
            alert("please fill all value")
            return
        }
        const data = await axios.post(`${ApiUrl}/todo`, todoData)
        if (!data) {
            alert("some thing wrong")
            return
        }
        if (data) {
            naviagte('/')
        }
    }

    return (
        <div className="container mt-4">


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


            {/* <form >
      <label>
        Name:
     <input
     className="mt-2"
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />
      </label>
      <br />
      <label>
        Age:
        <input
        className="mt-2"
          type="number"
          name="age"
          value={formData.age}
          onChange={handleChange}
          required
        />
      </label>
      <br />
      <label>
        Education:
        <input
        className="mt-2"
          type="text"
          name="education"
          value={formData.education}
          onChange={handleChange}
          required
        />
      </label>
      <br />
      <label>
        Email:
        <input
        className="mt-2"
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />
      </label>
      <br />
      <button type="submit">Submit</button>
    </form> */}

        </div>

    )
}

export default AddTodo