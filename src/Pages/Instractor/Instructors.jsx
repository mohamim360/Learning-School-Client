import instructorsData from "../../../public/data.json";
const Instructors = () => {
  return (
    <div >
      <div className="flex flex-wrap justify-center">
      {instructorsData.map((instructor) => (
        <div key={instructor.id} className="max-w-sm rounded overflow-hidden shadow-lg m-4">
        <img src={instructor.instructorImage} alt={instructor.instructorName} className="w-full" />
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">{instructor.instructorName}</div>
          <div className="mb-2">Email: {instructor.instructorEmail}</div>
        </div>
      </div>
      ))}
    </div>
    </div>
  );
};

export default Instructors;