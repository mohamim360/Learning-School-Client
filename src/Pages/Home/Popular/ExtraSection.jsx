

const ExtraSection = () => {
  const upcomingClasses = [
    {
      id: '10',
      classImage: 'https://example.com/class_image10.jpg',
      name: 'Pilates Reformer Class',
      
    },
    {
      id: '11',
      classImage: 'https://example.com/class_image11.jpg',
      name: 'HIIT Workout Class',
      
    },
    {
      id: '12',
      classImage: 'https://example.com/class_image12.jpg',
      name: 'Barre Fitness Class',
     
    },
  ];

  return (
    <div>
      <h2>Upcoming Classes</h2>
      <div className="flex justify-between">
        {upcomingClasses.map((item) => (
          <div key={item.id} className="flex items-center">
            <img src={item.classImage} alt={item.name} className="w-40 h-40 object-cover rounded" />
            <div className="ml-4">
              <h3 className="text-lg font-bold">{item.name}</h3>
             
              
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExtraSection;
