import './App.css';
import { Container, Table, Button, Form, Modal, Navbar, Nav } from 'react-bootstrap';
import {useState} from "react";

function App() {
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
    <>
      <div

      >
          <div className="body">
              <Navbar bg="light" className="navbar-container" expand="lg">
                  <div
                    
                  >
                     <img className='logo-header' src="/logo.png" alt="" />
                  </div>
                  <Nav className="mr-auto navbar">
                      <Nav.Link href="#home">Gestion des employés</Nav.Link>
                      <Nav.Link href="#menu">Gestion du menu</Nav.Link>
                      <Nav.Link href="#stats">Statistiques</Nav.Link>
                      <Nav.Link href="#promotions">Promotions</Nav.Link>
                      <Nav.Link href="#reclamations">Réclamation</Nav.Link>
                  </Nav>
                  <div
                      className="profile-container"
                  >
                      <img className='logo-header' src="/Male User.png" alt="" />
                  </div>
              </Navbar>

              <Container className="mt-5 main">
                  <div
                      className="main-header"
                  >
                      <div
                          className="header-img"
                      >
                        <img className='logo-header' src="/pouletpanee1.png" alt="" />
                      </div>
                      <div>
                          <span className="title">ZeDuc Sp@ce</span>
                          <span className="title2">Gestion des employés</span>
                      </div>
                      <div
                          className="header-img"
                      >
                        <img className='logo-header' src="/dg.png" alt="" />
                      </div>
                  </div>
                  <div
                      className="table-container"
                  >
                      <div
                          className="employe-list"
                      >
                          Liste des employés

                          <div
                            className='modal-btn' onClick={handleShow}
                          >
                              <img className='logo2' src="/Add User Male.png" alt="" />
                          </div>
                      </div>

                      <div
                          className="table-wrapper"
                      >
                          <Table className="styled-table" striped bordered hover>
                              <thead>
                              <tr>
                                  <th
                                      className="th-top-left"
                                  >ID</th>
                                  <th>Nom</th>
                                  <th>Email</th>
                                  <th>Numéro de Téléphone</th>
                                  <th
                                      className="th-top-right"
                                  >Rôle</th>
                              </tr>
                              </thead>
                              <tbody>
                              {employees.map((employee) => (
                                  <tr key={employee.id}

                                  >
                                      <td>{employee.id}</td>
                                      <td>{employee.name}</td>
                                      <td>{employee.email}</td>
                                      <td>{employee.phone}</td>
                                      <td>{employee.role}</td>
                                  </tr>
                              ))}
                              </tbody>
                          </Table>
                      </div>

                  </div>



                  <Modal
                      className="modal-wrapper"
                      show={show} onHide={handleClose}>
                      <Modal.Header closeButton

                      >
                          <Modal.Title
                            className='modal-title'
                          >Ajouter un employé</Modal.Title>

                      </Modal.Header>
                      <Modal.Body>
                          <Form
                              className="modal-form"
                          >
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
                      <Modal.Footer
                        className='modal-footer'
                      >
                          <Button variant="secondary" onClick={handleClose}>
                              Annuler
                          </Button>
                          <Button variant="primary" onClick={handleAddEmployee}>
                              Ajouter
                          </Button>
                      </Modal.Footer>
                  </Modal>
              </Container>

              <footer className="mt-5 p-4 bg-light text-center footer">
                  <div
                  
                  >
                    <img className='logo-header' src="/logo.png" alt="" />
                  </div>
                  <div
                      className="footer-element"
                  >
                      <p>Informations</p>
                      <span>Aide</span>
                      <span>À propos</span>
                  </div>
                  <div
                      className="footer-element"
                  >
                      <p>Accès utilisateur</p>
                      <span>Se connecter</span>
                      <span>S'inscrire</span>
                  </div>
                  <div
                      className="footer-element"
                  >
                      <p>Localisation</p>
                      <span>Cité la Terrasse</span>
                      <span>Yansoki, Douala</span>
                  </div>
                  <div>
                  <img className='' src="/WhatsApp.png" alt="" />
                  </div>
              </footer>

          </div>
      </div>
    </>
    )
}

export default App
