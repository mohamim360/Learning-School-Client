

import useClass from '../../../Hooks/useClass';

const ManageClasses = () => {
  const [classes, refetch] = useClass();
 

  return (
    <div className="container mx-auto py-8">
      <h2 className="text-2xl font-bold mb-4">Manage Classes</h2>
      <div className="overflow-x-auto">
        <table className="min-w-full border border-gray-300">
          <thead>
            <tr>
              <th className="py-2 px-4 border-b">Class Image</th>
              <th className="py-2 px-4 border-b">Class Name</th>
              <th className="py-2 px-4 border-b">Instructor Name</th>
              <th className="py-2 px-4 border-b">Instructor Email</th>
              <th className="py-2 px-4 border-b">Available Seats</th>
              <th className="py-2 px-4 border-b">Price</th>
              <th className="py-2 px-4 border-b">Status</th>
            </tr>
          </thead>
          <tbody>
            {classes.map((classItem) => (
              <tr key={classItem._id}>
                <td className="py-2 px-4 border-b">
                  <img src={classItem.classImage} alt="Class" className="w-16 h-auto" />
                </td>
                <td className="py-2 px-4 border-b">{classItem.name}</td>
                <td className="py-2 px-4 border-b">{classItem.instructorName}</td>
                <td className="py-2 px-4 border-b">{classItem.instructorEmail}</td>
                <td className="py-2 px-4 border-b">{classItem.availableSeats}</td>
                <td className="py-2 px-4 border-b">{classItem.price}</td>
                <td className="py-2 px-4 border-b">{classItem.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageClasses;
