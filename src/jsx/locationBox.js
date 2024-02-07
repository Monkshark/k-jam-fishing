import React, {useEffect, useState} from "react";
import {getIpAndCity} from "../js/getIpAndCity";

function locationBox() {
    return (
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
    );
}

export default locationBox;