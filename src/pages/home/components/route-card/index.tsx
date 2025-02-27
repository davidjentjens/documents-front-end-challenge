import React from 'react';

import { useHistory } from 'react-router-dom';
import { Card, CardTitle, CardText, Button } from 'reactstrap';

interface RouteCard {
  title: string;
  caption: string;
  actionText: string;
  route?: string;
  disabled?: boolean;
}

const RouteCard: React.FC<RouteCard> = ({
  title,
  caption,
  actionText,
  route,
  disabled,
}) => {
  const history = useHistory();

  return (
    <Card body>
      <CardTitle tag="h4">{title}</CardTitle>
      <CardText>{caption}</CardText>
      <Button disabled={disabled} onClick={() => history.push(route || '/')}>
        {actionText}
      </Button>
    </Card>
  );
};

RouteCard.defaultProps = {
  disabled: false,
  route: '/',
};

export default RouteCard;
