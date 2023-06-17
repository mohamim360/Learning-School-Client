
import { Link } from 'react-router-dom';
import useSelect from '../../../Hooks/useSelect';

const SelectedClass = () => {
  const [select, refetch] = useSelect();

  const handleDelete = (id) => {
    console.log(id);

    
    fetch(`https://learning-school-server-mohamim360.vercel.app/selects/${id}`, {
      method: 'DELETE'
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.deletedCount > 0) {
          refetch();
          console.log('Class deleted successfully!');
        }
      })
      .catch((error) => {
        console.log('Error deleting class:', error);
      });
  };

  
  return (
    <div>
       <Link to="/dashboard/pay"><button
                    className="text-green-500 btn btn-warning"
                    
                  >
                    Pay
                  </button></Link>
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
