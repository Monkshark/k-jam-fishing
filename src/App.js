import React, { useState, useEffect } from 'react';
import { getIpAndCity } from "./js/getIpAndCity";

function App() {
    const [ipAndCity, setIpAndCity] = useState(null);

    useEffect(() => {
        getIpAndCity().then(result => setIpAndCity(result));
    }, []);

    return (
        <div className="App">
            <p>
                {ipAndCity ? `IP: ${ipAndCity.ip}, Location: ${ipAndCity.location}` : 'Loading...'}
            </p>
        </div>
    );
}

export default App;