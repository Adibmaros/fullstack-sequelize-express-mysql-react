import { useState , useEffect} from "react"
import axios from "axios"
import { useNavigate , useParams } from "react-router-dom"


const EditUser = () => {

    const [name , setName] = useState("")
    const [email , setEmail] = useState("")
    const [gender , setGender] = useState("Male")
    const navigate = useNavigate()
    const {id}  = useParams()

    

    const updateUser = async (e) => {
        e.preventDefault();
        try{
            await axios.patch(`http://localhost:5000/users/${id}     `, 
        {
            name,
            email,
            gender
        })
        navigate("/")
        } catch(err){
            console.log(err)
        }
    }
    

    const getUserById = async () => {
        const response = await axios.get(`http://localhost:5000/users/${id}`)
        setName(response.data.name)
        setEmail(response.data.email)
        setGender(response.data.gender)

    }

    useEffect(() => {
        getUserById()
    },[])


  return (
    <div>
        <div className="columns mt-5 is-centered">
            <div className="column is-half">
                <form onSubmit={updateUser}>
                    <div className="field">
                        <label  className="label">Name</label>
                          <input
                           placeholder="name" 
                           type="text" 
                           value={name}
                           onChange={(e) => setName(e.target.value)}
                           className="input" />
                           
                    </div>
                    <div className="field">
                        <label  className="label">Email</label>
                          <input
                           placeholder="email" 
                           value={email}
                           onChange={(e) => setEmail(e.target.value)}
                           type="email" 
                           className="input" />
                    </div>
                    <div className="field">
                        <label  className="label">Gender</label>
                        <div className="select is-fullwidth">
                            <select 
                            value={gender}
                            onChange={(e) => setGender(e.target.value)}>
                                <option value="Male">Male</option>
                                <option value="Female">Female</option>
                            </select>
                        </div>
                        <div className="field">
                            <br />  
                       <button type="submit" className="button is-success">Update</button>
                    </div>
                    </div>
                </form>
            </div>
        </div>
      
    </div>
  )
}

export default EditUser
