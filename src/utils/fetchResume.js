import { useState, useEffect } from 'react';
import { createClient } from 'contentful';

const client = createClient({
  space: 'wqwz0wb7zuin',
  environment: 'master',
  accessToken: 'E51PDzhvkvSwEvchteVTDPOxDnSqU2K6EZuX5ouJGlA',
});

export const useFetchResume = () => {
  const [resume, setResume] = useState({});

  const getData = async () => {
    try {
      const response = await client.getEntries({
        content_type: 'resumedoc',
      });

      setResume(
        `https:${response?.items[0]?.fields?.resume?.fields?.file?.url}`
      );
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getData();
  }, [resume]);

  return { resume };
};
