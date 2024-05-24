import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const Inscripcion = () => {
  return (
    <>
      <div className="Inscripcion_div">
        <h1>INSCRIBETE</h1>
        <Form>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Nombre</Form.Label>
            <Form.Control type="text" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Número de celular</Form.Label>
            <Form.Control type="number" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Correo electronico</Form.Label>
            <Form.Control type="email" />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Estoy interesado en</Form.Label>
            <Form.Select>
              <option>Presencial</option>
              <option>Virtual</option>
            </Form.Select>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Text className="text-muted">
              ¿Por qué medio prefieres ser contactado?
            </Form.Text>
            <Form.Check type="checkbox" label="Whatsapp" />
            <Form.Check type="checkbox" label="llamada" />
          </Form.Group>
          <Button variant="primary" type="submit">
            Inscribirme
          </Button>
        </Form>
      </div>
    </>
  );
};

export default Inscripcion;
