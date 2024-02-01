import React from 'react';
import './Title.scss';
import withHelloMessage from '../../../hoc/withHelloMessage';

interface TitleProps {
  text: string;
}

const Title: React.FC<TitleProps> = ({ text }) => {
  return (
    <div className="title-background">
      <h1 className="medieval-title">{text}</h1>
    </div>
  );
};

export default withHelloMessage<TitleProps>(Title);
