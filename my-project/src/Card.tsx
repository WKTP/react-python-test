
import React from 'react';
import { Card } from 'antd';
import 'antd/dist/reset.css';

interface MyCardProps {
  title: string;
  description?: string;
}

const MyCard: React.FC<MyCardProps> = ({ title, description }) => {
  return (
    <Card
      title={title}
      style={{ width: 300 }}
    >
      {description && <p>{description}</p>}
    </Card>
  );
};

export default MyCard;
