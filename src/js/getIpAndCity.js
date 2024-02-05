import { PrivateInformation } from './PrivateInformation.js'

export async function getIpAndCity() {
    try {
        const IP_API_KEY = '0974753c85db4cedab488bcf0a27d517';
        const dataResponse = await fetch(`https://api.ipgeolocation.io/ipgeo?apiKey=${IP_API_KEY}`);
        if (!dataResponse.ok) {
            throw new Error(`HTTP error! status: ${dataResponse.status}`);
        }
        const data = await dataResponse.json();

        return new PrivateInformation(
            `${data.ip}`,
            `${data.city}, ${data.country_name}`
        );
    } catch (error) {
        console.error('Failed to fetch IP and city:', error);
        return null;
    }
}