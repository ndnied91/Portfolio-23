import React from 'react';

export const BtnContainer = ({
  school,
  setCurrentItem,
  currentItem,
  resume,
}) => {
  console.log(resume);
  school.sort((a, b) => b.id - a.id);

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
        {school.map((i, index) => {
          return (
            <button
              key={i.id}
              className={
                index === currentItem
                  ? ' font-bold text-primary hover:text-primary'
                  : ''
              }
              style={{ paddingTop: '1rem' }}
              onClick={() => setCurrentItem(index)}
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
