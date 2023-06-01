import React from 'react';
import { Layout } from 'antd';
import { Outlet } from 'react-router-dom'
import Header from '@/components/common/Header'

const { Content } = Layout;
const contentStyle: React.CSSProperties = {
  textAlign: 'center',
  minHeight: 120,
  lineHeight: '120px',
};

export default function Home() {
  return (
    <Layout>
      <Header />
      <Content style={contentStyle}>
        <Outlet />
      </Content>
    </Layout>
  )
}
