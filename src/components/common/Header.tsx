import { Layout } from 'antd';
import React, { useState } from 'react';
import type { MenuProps } from 'antd';
import { Menu } from 'antd';
import { useNavigate } from 'react-router-dom'
import homeRoutes from '@/router/modules/Home'

const { Header } = Layout;
const headerStyle: React.CSSProperties = {
  textAlign: 'center',
  color: '#fff',
  height: 64,
  paddingInline: 50,
  lineHeight: '64px',
  backgroundColor: '#fff',
  boxSizing: 'border-box',
  border: 'none'
};
const items: MenuProps['items'] = [
  {
    label: 'Home',
    key: '/home'
  },
  ...homeRoutes.map(route => ({
    label: route.meta.label,
    key: route.path
  }))
]

export default function CommonHeader() {
  const navigate = useNavigate()
  const [current, setCurrent] = useState('/home');
  const onClick: MenuProps['onClick'] = (e) => {
    setCurrent(e.key);
    navigate(e.key)
  };

  return (
    <Header style={headerStyle}>
      <Menu onClick={onClick} selectedKeys={[current]} mode="horizontal" items={items} />
    </Header>
  )
}
