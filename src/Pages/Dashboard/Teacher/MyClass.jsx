
import useClass from '../../../Hooks/useClass';


const MyClass = () => {
  const [select, refetch] = useClass();



  return (
    <div className="container mx-auto py-8">
      <h2 className="text-2xl font-bold mb-4">My Classes</h2>
      {select.map((classItem) => (
        <div key={classItem._id} className="bg-white rounded shadow p-4 mb-4">
          <h3 className="text-lg font-semibold mb-2">{classItem.name}</h3>
          
          <p className="mb-2">Class Image: </p>
          <img src={classItem.classImage} alt="" />
          <p className="mb-2">Available Seats: {classItem.availableSeats}</p>
          <p className="mb-2">Price: {classItem.price}</p>
          <p className="mb-2">Status: {classItem.status}</p>
        </div>
      ))}
    </div>
  );
};

export default MyClass;
