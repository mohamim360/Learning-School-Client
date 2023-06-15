import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import { useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import useSelect from "../../Hooks/useSelect";


const ClassCard = ({ classData}) => {
  const { id,classImage, name, instructorName, availableSeats, price } = classData;
  
  const {user} = useContext(AuthContext); 

  const navigate = useNavigate();
  const location = useLocation();
  const [, refetch] = useSelect();
  const handleSelect = (classData) => {
   
    console.log(classData)

    if(user && user.email){
      const cartItem = {ItemId: id, name, price, email: user.email}
      fetch('http://localhost:5000/selects',{
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(cartItem)
    })
      .then(res => res.json())
      .then(data => {
        if(data.insertedId){
          refetch();
          Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'class selected',
            showConfirmButton: false,
            timer: 1500
          })
        }
       
      })
    }
    else{
      Swal.fire({
        title: 'please login',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Login now!'
      })
       
          navigate('/login', {state: {from: location}})
        
      
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6 mb-8 flex items-center">
      <img src={classImage} alt={name} className="w-32 h-auto mr-4" />
      <div>
        <h3 className="text-xl font-semibold mb-2">{name}</h3>
        <p className="mb-2">Instructor: {instructorName}</p>
        <p className="mb-2">Available Seats: {availableSeats}</p>
        <p className="mb-2">Price: ${price}</p>
        <button
          onClick={()=>handleSelect(classData)}
         
          className="bg-blue-500 text-white py-2 px-4"
        >
          Select
        </button>
      </div>
    </div>
  );
};

export default ClassCard;
