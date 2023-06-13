import { useEffect, useState } from "react";


const Populerinstructor = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/data')
      .then(res => res.json())
      .then(data => {
        const sortedData = data.sort((a, b) => a.availableSeats - b.availableSeats);
        const topClasses = sortedData.slice(0, 6);
        setData(topClasses);
      });
  }, []);

  return (
    <div>
      <h2>Popular Instructors</h2>
      <div className="flex justify-between">
        {data.map(item => (
          <div key={item.id} className="flex items-center">
            <img src={item.instructorImage} alt={item.instructorName} className="w-40 h-40 object-cover rounded" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Populerinstructor;
