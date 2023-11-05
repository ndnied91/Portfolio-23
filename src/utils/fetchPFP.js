import { useState, useEffect } from 'react';
import { createClient } from 'contentful';

const client = createClient({
  space: 'wqwz0wb7zuin',
  environment: 'master',
  accessToken: 'E51PDzhvkvSwEvchteVTDPOxDnSqU2K6EZuX5ouJGlA',
});

export const useFetchProfilePicture = () => {
  const [image, setImage] = useState('');

  const getData = async () => {
    try {
      const response = await client.getEntries({
        content_type: 'profilepic',
      });

      setImage(
        `https:${response?.items[0]?.fields?.profilepic?.fields.file?.url}`
      );
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getData();
  }, [image]);

  return { image };
};

// https://assets.ctfassets.net/wqwz0wb7zuin/3U3bt3BQJBNPEsBCRt3A3z/c21d2c802a88058462217b6d2e88f357/Daniel_Niedzwiedzki.pdf
