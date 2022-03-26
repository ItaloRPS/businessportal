import React from 'react'
import { Layout } from 'antd';
const { Content} = Layout;
export default props => (
    <Content
    className="site-layout-background"
    style={{
      margin: 0,
      minHeight: 280,
    }}
  >
    {props.children}
  </Content>)
