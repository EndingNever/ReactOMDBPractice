import { useEffect, useState } from 'react';

function useFetch(url) {

    const [loading, setLoading] = useState(true);
    const [data, setData] = useState(null);

    useEffect(() => {
        fetch(url)
            .then((response) => response.json())
            .then((json) => setData(json))
            .finally(() => {
                // console.log(data);
                setLoading(false)
            })
    }, []);


    return [loading, data];
}

export default useFetch;