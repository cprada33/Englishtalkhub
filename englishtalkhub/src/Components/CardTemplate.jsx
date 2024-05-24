import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useNavigate } from 'react-router-dom';

const CardTemplate = ({ CardInfo }) => {
  const navigate = useNavigate();
  return (
    <>
      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={CardInfo.img} />
        <Card.Body>
          <Card.Title className="justify-center">{CardInfo.title}</Card.Title>
          <Card.Text>{CardInfo.text}</Card.Text>
          {CardInfo.link != null ? (
            <Button
              onClick={() => {
                navigate(CardInfo.link);
              }}
              variant="primary"
            >
              {CardInfo.textButton}
            </Button>
          ) : null}
        </Card.Body>
      </Card>
    </>
  );
};

export default CardTemplate;
