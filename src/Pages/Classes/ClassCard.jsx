

const ClassCard = ({ classData, isLoggedIn, isAdmin }) => {
  const { classImage, name, instructorName, availableSeats, price } = classData;

  const handleSelect = (classData) => {
   
    console.log(classData)
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
          disabled={availableSeats === 0 || isAdmin}
          className={`bg-blue-500 text-white py-2 px-4 rounded ${availableSeats === 0 || isAdmin ? 'opacity-50 cursor-not-allowed' : ''}`}
        >
          Select
        </button>
      </div>
    </div>
  );
};

export default ClassCard;
