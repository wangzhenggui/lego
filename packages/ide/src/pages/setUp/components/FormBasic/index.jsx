import React from 'react';
import { keys } from 'lodash';
import Drag from '@/components/Drag';
import apaasBasicComponent from 'apaas-basic-widgets';
import styles from './index.less';

const FormBasic = () => {
  return (
    <div className={styles.leftWrap}>
      <h3>基础组件</h3>
      <div className={styles.templatesLayout}>
        {keys(apaasBasicComponent).map((item) => {
          return <Drag item={apaasBasicComponent[item]} key={item.type} />;
        })}
      </div>
    </div>
  );
};

export default FormBasic;
