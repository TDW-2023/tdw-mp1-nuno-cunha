import { createClient } from 'contentful';
import getConfig from 'next/config';

const { publicRuntimeConfig } = getConfig();

const client = createClient({
  space: publicRuntimeConfig.SPACE,
  accessToken: publicRuntimeConfig.ACCESSTOKEN,
});

// Retrieve the list of blog posts from Contentful
const getContentful = async () => {
  const response = await client.getEntry('nylGAjgCl07NIusmedYlD')
    .then((entry) => {return entry.fields})
    .catch(console.error)
    
  return response;
};

export default getContentful;