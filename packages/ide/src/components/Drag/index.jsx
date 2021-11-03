import React, { useMemo, memo } from 'react';
import { useDrag } from 'react-dnd';
import { DRAG_TYPE } from '../../common/constant';
import Template from '../Tpl';

const Drag = memo((props) => {
  const { item = {} } = props;
  const [{ isDragging }, drag] = useDrag({
    type: DRAG_TYPE,
    item: {
      componentName: item?.schema?.type,
      schemas: item?.schema,
      props: {},
    },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });

  const containerStyle = useMemo(
    () => ({
      cursor: 'move',
    }),
    [isDragging],
  );
  return (
    <div ref={drag}>
      <Template name={item?.schema?.name} style={{ ...containerStyle }} />
    </div>
  );
});

export default Drag;
