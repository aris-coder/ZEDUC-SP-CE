import React, { useState } from 'react';
import { Container, Table, Button, Form, Modal, Navbar, Nav } from 'react-bootstrap';
import Style from  './style';

const GestionEmployee = () => {
  const [employees, setEmployees] = useState([
    { id: 1, name: 'Tchakokam Reine', email: 'tchakokamreine@gmail.com', phone: 'xxxxxxxxxx', role: 'Manager' },
    { id: 2, name: 'xxxxxxxxx', email: 'xxxxxxxxx', phone: 'xxxxxxxxxx', role: 'Employee' }
  ]);
  
  const [show, setShow] = useState(false);
  const [newEmployee, setNewEmployee] = useState({
    name: '', prenom: '', email: '', phone: '', role: ''
  });

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleChange = (e) => {
    setNewEmployee({
      ...newEmployee,
      [e.target.name]: e.target.value
    });
  };

  const handleAddEmployee = () => {
    setEmployees([...employees, { id: employees.length + 1, ...newEmployee }]);
    setNewEmployee({ name: '', prenom: '', email: '', phone: '', role: '' });
    setShow(false);
  };

  return (
    <div>
        <Style/>
        <div className="App">
        <Navbar bg="light" expand="lg">
            <Navbar.Brand href="#home">ZeDuc Sp@ce</Navbar.Brand>
            <Nav className="mr-auto">
            <Nav.Link href="#home">Gestion des employés</Nav.Link>
            <Nav.Link href="#menu">Gestion du menu</Nav.Link>
            <Nav.Link href="#stats">Statistiques</Nav.Link>
            <Nav.Link href="#promotions">Promotions</Nav.Link>
            <Nav.Link href="#reclamations">Réclamation</Nav.Link>
            </Nav>
        </Navbar>

        <Container className="mt-5">
            <h2 className="mb-4">Gestion des employés</h2>
            <Table striped bordered hover>
            <thead>
                <tr>
                <th>ID</th>
                <th>Nom</th>
                <th>Email</th>
                <th>Numéro de Téléphone</th>
                <th>Rôle</th>
                </tr>
            </thead>
            <tbody>
                {employees.map((employee) => (
                <tr key={employee.id}>
                    <td>{employee.id}</td>
                    <td>{employee.name}</td>
                    <td>{employee.email}</td>
                    <td>{employee.phone}</td>
                    <td>{employee.role}</td>
                </tr>
                ))}
            </tbody>
            </Table>

            <Button variant="primary" onClick={handleShow}>
            Ajouter un employé
            </Button>

            <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Ajouter un employé</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                <Form.Group controlId="formName">
                    <Form.Label>Nom</Form.Label>
                    <Form.Control
                    type="text"
                    name="name"
                    placeholder="Nom"
                    value= {newEmployee.name}
                    onChange={handleChange}
                    />
                </Form.Group>

                <Form.Group controlId="formPrenom">
                    <Form.Label>Prénom</Form.Label>
                    <Form.Control
                    type="text"
                    name="prenom"
                    placeholder="Prénom"
                    value= {newEmployee.prenom}
                    onChange={handleChange}
                    />
                </Form.Group>

                <Form.Group controlId="formEmail">
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                    type="email"
                    name="email"
                    placeholder="Adresse mail"
                    value= {newEmployee.email}
                    onChange={handleChange}
                    />
                </Form.Group>

                <Form.Group controlId="formPhone">
                    <Form.Label>Contact</Form.Label>
                    <Form.Control
                    type="text"
                    name="phone"
                    placeholder="Numéro de téléphone"
                    value= {newEmployee.phone}
                    onChange={handleChange}
                    />
                </Form.Group>

                <Form.Group controlId="formRole">
                    <Form.Label>Rôle</Form.Label>
                    <Form.Control
                    as="select"
                    name="role"
                    value= {newEmployee.role}
                    onChange={handleChange}
                    >
                    <option value="">Choisir un rôle</option>
                    <option>Manager</option>
                    <option>Employee</option>
                    </Form.Control>
                </Form.Group>
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                Annuler
                </Button>
                <Button variant="primary" onClick={handleAddEmployee}>
                Ajouter
                </Button>
            </Modal.Footer>
            </Modal>
        </Container>

        <footer className="mt-5 p-4 bg-light text-center">
            <p>Informations | Aide | À propos</p>
            <p>Accès utilisateur: se connecter | s'inscrire</p>
            <p>Localisation: Cité la Terrasse, Yansoki, Douala</p>
        </footer>
        </div>
    </div>
  );
}

export default GestionEmployee;