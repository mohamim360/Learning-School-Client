import { useEffect, useState } from "react";

const PopularClasses = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('https://learning-school-server-mohamim360.vercel.app/data')
      .then((res) => res.json())
      .then((data) => {
        const sortedData = data.sort((a, b) => a.availableSeats - b.availableSeats);
        const topClasses = sortedData.slice(0, 6);
        setData(topClasses);
      });
  }, []);

  return (
    <div className="mt-5">
      <h2>Popular Classes</h2>
      <div className="flex justify-between">
        {data.map((item) => (
          <div key={item.id} className="flex items-center">
            <img src={item.classImage} alt={item.name} className="w-40 h-40 object-cover rounded" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default PopularClasses;
