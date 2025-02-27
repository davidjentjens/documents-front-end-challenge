import React from 'react';

import { Container } from 'reactstrap';
import './index.css';

const PageContent: React.FC = ({ children }) => {
  return (
    <div className="page-content">
      <Container fluid="lg">{children}</Container>
    </div>
  );
};

export default PageContent;
