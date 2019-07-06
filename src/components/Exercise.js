import React from 'react';
import { withRouter, Link } from 'react-router-dom';

const Exercise = ({ name, exerciseUrl, videoUrl, history, match }) => {
  return (
    <React.Fragment>
      <h3>{name}</h3>
      <iframe
        src={videoUrl}
        frameBorder="0"
        allowFullScreen={true}
        title={name}
      />
    </React.Fragment>
  );
};

export default withRouter(Exercise);

//  <p onClick={() => history.push(`exercises${exerciseUrl}`)}>{name}</p> this is how we can do a detail component if we want, couldn't get htis to work however, hints the useless route to the component exercisedetail
