import { useEffect, useState } from "react";
import axios from "axios";

const FetchData = (api_url, token, postData) => {
  const [data, setData] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      const { data: response } = await axios.post(`http://127.0.0.1:3333/${api_url}`, postData,
        {headers: {Authorization: `Bearer ${token}`}});
      setData(response);
    };

    fetchData();
  }, []);

  return {data};
};

export default FetchData;
