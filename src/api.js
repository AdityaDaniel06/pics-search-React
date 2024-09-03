import axios from 'axios';

//JhPBEOyxtF2MPLtwcwTotFug1OdkbSKA7P_XHC3nT-w
const searchImages = async (term) => {
  const response = await axios.get('https://api.unsplash.com/search/photos', {
    headers: {
      Authorization: 'Client-ID PglPHSxkIQh8N-NSRhB2Lt5gb2oIKzx-KEPjRjdmiX8',
    },
    params: {
      query: term,
    },
  });
  console.log(response.data.results);
  return response.data.results;
};

export default searchImages;
