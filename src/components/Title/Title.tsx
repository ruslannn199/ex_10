import { BookOutlined } from '@ant-design/icons';
import type { NextComponentType, NextPageContext } from 'next';

export const Title: NextComponentType<NextPageContext, Record<string, never>> = () => {

  return (
    <h1 style={{ color: 'white' }}><BookOutlined /> Библиотека</h1>
  );
};
