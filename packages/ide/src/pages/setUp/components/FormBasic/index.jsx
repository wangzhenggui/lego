import React from 'react';
import { keys } from 'lodash';
import { connect } from 'dva';
import Drag from '@/components/Drag';
import styles from './index.less';

const FormBasic = ({ resourceList }) => {
  return (
    <div className={styles.leftWrap}>
      <h3>基础组件</h3>
      <div className={styles.templatesLayout}>
        {
          resourceList.map(resource => {
            return keys(window[resource.name]).map((item) => {
              return <Drag item={window[resource.name][item]} key={item.type} />;
            })
          })
        }
      </div>
    </div>
  );
};

export default connect((state) => ({
  resourceList: state?.globalSetting?.resourceList,
}))(FormBasic);
