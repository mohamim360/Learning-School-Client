import React from 'react';
import useSelect from '../../../Hooks/useSelect';
import Swal from 'sweetalert2';

const SelectedClass = () => {
  
  const [select, refetch] = useSelect();
  const handleDelete = (id) => {
    console.log(id)
    Swal.fire({
      title: 'Are you sure?',
     
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/selects/${id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount > 0) {
                    refetch();
                    Swal.fire(
                        'Deleted!'
                    )
                }
            })
    }
    });
  };

  const handlePay = (id) => {
    console.log(`Paying for class with ID: ${id}`);
  };

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">My Selected Classes:</h2>
      {select.length > 0 ? (
        <table className="min-w-full border border-gray-200">
          <thead>
            <tr>
              <th className="py-2 px-4 border-b">Class Name</th>
              <th className="py-2 px-4 border-b">Price</th>
              <th className="py-2 px-4 border-b">Actions</th>
            </tr>
          </thead>
          <tbody>
            {select.map((cls) => (
              <tr key={cls._id}>
                <td className="py-2 px-4 border-b">{cls.name}</td>
                <td className="py-2 px-4 border-b">{cls.price}</td>
                <td className="py-2 px-4 border-b">
                  <button
                    className="mr-2 text-red-500"
                    onClick={() => handleDelete(cls._id)}
                  >
                    Delete
                  </button>
                  <button
                    className="text-green-500"
                    onClick={() => handlePay(cls._id)}
                  >
                    Pay
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>No classes selected.</p>
      )}
    </div>
  );
};

export default SelectedClass;
