import React from 'react';

import './index.css';

interface PageHeaderProps {
  title: string;
  caption?: string;
}

const PageHeader: React.FC<PageHeaderProps> = ({ title, caption }) => {
  return (
    <div className="page-header">
      <h1 className="page-header__title">{title}</h1>
      {caption && <h6 className="page-header__caption">{caption}</h6>}
    </div>
  );
};

PageHeader.propTypes = {};

PageHeader.defaultProps = {
  caption: '',
};

export default PageHeader;
