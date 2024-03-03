import Moralis from 'moralis';

// Replace these with your Moralis Application ID and Server URL
const appId = import.meta.env.VITE_MORALIS_APPLICATION_ID;
const serverUrl = import.meta.env.VITE_MORALIS_SERVER_URL;

Moralis.start({ serverUrl, appId });

export default Moralis;