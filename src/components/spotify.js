import axios from 'axios';

const CLIENT_ID = 'b3e5526d2dd845ef8b41ddaac571429f';
const CLIENT_SECRET = '02f6f6c660424911ad5d26bb0ed70241';

const getAccessToken = async () => {
  try {
    const authHeader = `Basic ${btoa(`${CLIENT_ID}:${CLIENT_SECRET}`)}`;

    const response = await axios.post(
      'https://accounts.spotify.com/api/token',
      new URLSearchParams({
        grant_type: 'client_credentials',
      }).toString(),
      {
        headers: {
          Authorization: authHeader,
          'Content-Type': 'application/x-www-form-urlencoded',
        },
      }
    );

    return response.data.access_token;
  } catch (error) {
    console.error('Error fetching access token:', error);
    throw error; // Propagate the error for handling in the component
  }
};

const searchTracks = async (query) => {
  try {
    const accessToken = await getAccessToken();

    const response = await axios.get('https://api.spotify.com/v1/search', {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
      params: {
        q: query,
        type: 'track',
        limit: 10,
      },
    });

    return response.data.tracks.items;
  } catch (error) {
    console.error(`Error searching tracks for query '${query}':`, error);
    throw error; // Propagate the error for handling in the component
  }
};

const getNewReleases = async () => {
  try {
    const accessToken = await getAccessToken();

    const response = await axios.get('https://api.spotify.com/v1/browse/new-releases', {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
      params: {
        limit: 10,
      },
    });

    return response.data.albums.items;
  } catch (error) {
    console.error('Error fetching new releases:', error);
    throw error; // Propagate the error for handling in the component
  }
};

export { searchTracks, getNewReleases };
