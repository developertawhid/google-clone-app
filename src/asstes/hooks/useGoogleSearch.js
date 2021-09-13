import { useEffect, useState } from 'react';


const API_KEY = process.env.REACT_APP_API_DEY
const CONTEXT_KEY = process.env.REACT_APP_CONTEXT_KEY;
function useGoogleSearch(term) {
    const [data, setData] = useState(null);

    useEffect(() => {
        const fatchData = async() => {
            fetch(`https://www.googleapis.com/customsearch/v1?key=${API_KEY}&cx=${CONTEXT_KEY}&q=${term}`)
            .then(response => response.json())
            .then(result => {
                setData(result);
            })

        }

        fatchData();
    }, [term])

    return {data}
}

export default useGoogleSearch;
