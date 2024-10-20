import Navbar from './pageProfile';
import Corps from './PageProfileBody';
import Footer from './PageProfilFooter';
import Panier from './panier/panier';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './headEtudiant';
import Reclamation from './Reclamation/reclamation';
import Clients from './meilleurClients/client';


function App() {
  return (
    <div>
      <Navbar />
      <Header />
      <Panier />
      <Footer />
    </div>
  );
}

export default App;
