import React from 'react'

const hoc = (Component) => ({...props}) => (
    <div>
      <div>
        <Component {...props}/>
        <p>{props.name}</p>
      </div>
    </div>
  );

export default hoc