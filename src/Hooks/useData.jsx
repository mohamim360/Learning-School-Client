import { useEffect, useState } from "react";

const useData = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        fetch('https://learning-school-server-mohamim360.vercel.app/data')
            .then(res => res.json())
            .then(data => {
                setData(data);
                setLoading(false);
            });
    }, [])
    return [data, loading]
}

export default useData;