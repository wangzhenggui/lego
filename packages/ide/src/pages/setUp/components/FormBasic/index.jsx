import React from 'react';
import { get } from 'lodash';
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
            return get(window, `${resource.name}.showComponentList`).map((item) => {
              return <Drag item={item} key={item.type} />;
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
