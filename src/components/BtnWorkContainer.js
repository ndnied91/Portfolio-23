import React from 'react';

export const BtnWorkContainer = ({
  jobs,
  setCurrentItem,
  currentItem,
  resume,
}) => {
  jobs.sort((a, b) => b.id - a.id);

  return (
    <section>
      {resume !== undefined ? (
        <div className="resume font-bold text-secondary">
          {' '}
          <a href={resume} target="_blank" rel="noreferrer noopener">
            {' '}
            Full resume
          </a>
        </div>
      ) : null}

      <div className="btn-container">
        {jobs.map((i, index) => {
          return (
            <button
              key={i.id}
              className={
                index === currentItem
                  ? ' font-bold text-primary hover:text-primary'
                  : ''
              }
              id="item"
              style={{ paddingTop: '1rem' }}
              onMouseOver={() => setCurrentItem(index)}
            >
              {i.company}
              <span
                style={{
                  fontSize: '12px',
                  color: 'gray',
                }}
              >
                {' '}
                {i.dates}
              </span>
            </button>
          );
        })}
      </div>
    </section>
  );
};

export default BtnWorkContainer;
