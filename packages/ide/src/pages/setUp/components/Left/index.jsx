import React from 'react';
import { Tabs } from 'antd';
import { connect } from 'dva';
import {
  FormOutlined,
  PieChartOutlined,
  LayoutOutlined,
  GlobalOutlined,
} from '@ant-design/icons';
import FormBasic from '../FormBasic';
import ChartBasic from '../ChartBasic';
import PageConfig from '../PageConfig';
import LayoutBasic from '../LayoutBasic';
import styles from './index.less';

const tabs = [
  {
    icon: <FormOutlined />,
    content: <FormBasic />,
    key: 'components'
  },
  {
    icon: <GlobalOutlined />,
    content: null,
    key: 'jsExpression'
  },
];

const { TabPane } = Tabs;
const Left = ({ dispatch }) => {
  const handleChange = (key) => {
    if (key === 'jsExpression') {
      dispatch({
        type: 'globalSetting/setFunctionExpressionModal',
        payload: true,
      })
    }
  }
  return (
    <>
      <Tabs defaultActiveKey="0" tabPosition="left" onChange={handleChange}>
        {tabs.map((item, index) => (
          <TabPane tab={item.icon} key={item.key}>
            {item.content}
          </TabPane>
        ))}
      </Tabs>
    </>
  );
};

export default connect()(Left);
