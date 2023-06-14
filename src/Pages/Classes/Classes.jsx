
import useData from '../../Hooks/useData';
import ClassCard from './ClassCard';


const Classes = () => {
  const [data, loading] = useData();

  if (loading) {
    return <div>Loading...</div>;
  }
 
  return (
    <div>
      {data.map((classData) => (
        <ClassCard key={classData.id} classData={classData} />
      ))}
    </div>
  );
};



export default Classes;
