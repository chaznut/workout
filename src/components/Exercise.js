import React from 'react';
import { withRouter, Link } from 'react-router-dom';

const Exercise = ({ name, exerciseUrl, videoUrl }) => {
  return (
    <React.Fragment>
      <Link
        to={{
          pathname: `/exercises${exerciseUrl}`,
          state: {
            videoInfo: { videoUrl, name }
          }
        }}
      >
        {name}
      </Link>
    </React.Fragment>
  );
};

export default withRouter(Exercise);
