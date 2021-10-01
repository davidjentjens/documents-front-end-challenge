import React, { useState, useEffect } from 'react';

import api from '../../api';
import PageContent from '../../components/page-content';
import PageHeader from '../../components/page-header';

// document['release-date'];

interface DocumentDetailsProps {
  code: string;
  title: string;
  published: string;
  active: string;
  processes: string;
  'release-date': string;
}

export const DocumentDetails: React.FC = ({ props }: any) => {
  const [document, setDocument] = useState<DocumentDetailsProps>();

  useEffect(() => {
    api
      .get(`/documents/${props.match.params.id}`)
      .then((response) => setDocument(response.data))
      .catch((error) => console.log(error));
  }, [props.match.params.id]);

  return (
    <div>
      <PageHeader title="Document Details" />
      <PageContent>
        <div>{document?.code}</div>
        <div>{document?.title}</div>
        <div>{document && document['release-date']}</div>
        <div>{document?.published}</div>
        <div>{document?.active}</div>
        <div>{document?.processes}</div>
      </PageContent>
    </div>
  );
};
