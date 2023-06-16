import { useState } from 'react';
import useAxiosSecure from '../../../Hooks/useAxios';

const AddClass = () => {
  const [className, setClassName] = useState('');
  const [classImage, setClassImage] = useState('');
  const [availableSeats, setAvailableSeats] = useState(0);
  const [price, setPrice] = useState(0);

  const [axiosSecure] = useAxiosSecure();

  const handleSubmit = (e) => {
    e.preventDefault();

   
    const newClass = {
      name: className,
      classImage,
       availableSeats,
      price,
      status: 'pending',
    };
    
    axiosSecure.post('/classes' , newClass).then(data => {
      console.log('after posting new menu item', data.data)
    })
    
    setClassName('');
    setClassImage('');
    setAvailableSeats(0);
    setPrice(0);
  };

  return (
    <div className="container mx-auto">
      <h1 className="text-2xl font-bold mb-4">Add a Class</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="className" className="block mb-1">
            Class Name:
          </label>
          <input
            type="text"
            id="className"
            value={className}
            onChange={(e) => setClassName(e.target.value)}
            className="border border-gray-300 p-2 w-full"
          />
        </div>
        <div>
          <label htmlFor="classImage" className="block mb-1">
            Class Image:
          </label>
          <input
            type="text"
            id="classImage"
            value={classImage}
            onChange={(e) => setClassImage(e.target.value)}
            className="border border-gray-300 p-2 w-full"
          />
        </div>
        <div>
          <label htmlFor="availableSeats" className="block mb-1">
            Available Seats:
          </label>
          <input
            type="number"
            id="availableSeats"
            value={availableSeats}
            onChange={(e) => setAvailableSeats(parseInt(e.target.value))}
            className="border border-gray-300 p-2 w-full"
          />
        </div>
        <div>
          <label htmlFor="price" className="block mb-1">
            Price:
          </label>
          <input
            type="number"
            id="price"
            value={price}
            onChange={(e) => setPrice(parseInt(e.target.value))}
            className="border border-gray-300 p-2 w-full"
          />
        </div>
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Add
        </button>
      </form>
    </div>
  );
};

export default AddClass;
