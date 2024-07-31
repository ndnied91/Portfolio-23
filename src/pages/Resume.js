import React, { useState } from 'react';
import BtnWorkContainer from '../components/BtnWorkContainer';
import JobInfo from '../components/JobInfo';
import Wrapper from '../assets/wrappers/Resume';
import { useLoaderData } from 'react-router-dom';

import { createClient } from 'contentful';

import { useFetchResume } from '../utils/fetchResume';

export const loader = async () => {
  const client = createClient({
    space: 'wqwz0wb7zuin',
    environment: 'master',
    accessToken: 'E51PDzhvkvSwEvchteVTDPOxDnSqU2K6EZuX5ouJGlA',
    // accessToken: 'E51PDzhvkvSwEvchteVTDPOxDnSqU2K6EZuX5ouJGlAA',
  });

  try {
    const response = await client.getEntries({
      content_type: 'portfolio',
    });

    const jobs = response.items.map((item) => {
      const { company, title, dates, duties, order } = item.fields;
      return {
        company,
        title,
        dates,
        duties,
        order,
        id: order,
        isLoadingLoader: false,
      };
    });

    return { jobs };
  } catch (error) {
    console.log(error);

    return { error: 'unable to retrieve jobs', isLoadingLoader: false };
  }
};
const Resume = () => {
  const { jobs, error } = useLoaderData();
  const [currentItem, setCurrentItem] = useState(0);
  const { resume } = useFetchResume();

  if (error) {
    return (
      <section className="jobs-center">
        Unable to retieve jobs at the moment :( See full resume here
        <a href={resume} target="_blank" rel="noreferrer noopener">
          {' '}
          Resume{' '}
        </a>
      </section>
    );
  }

  return (
    <Wrapper>
      <section className="jobs-center">
        <BtnWorkContainer
          resume={resume}
          jobs={jobs}
          currentItem={currentItem}
          setCurrentItem={setCurrentItem}
        />
        <JobInfo jobs={jobs} currentItem={currentItem} />
      </section>
    </Wrapper>
  );
};
export default Resume;
