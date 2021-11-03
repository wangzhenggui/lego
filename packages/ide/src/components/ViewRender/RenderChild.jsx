import React from 'react';
import FR from './Fr';

const RenderChildren = ({ child = [] }) => {
  return (
    <>
      {child.map((node) => {
        return <FR key={node.id} id={node.id} />;
      })}
    </>
  );
};

export default RenderChildren;
