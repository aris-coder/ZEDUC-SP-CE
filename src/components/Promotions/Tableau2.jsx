import React from 'react';

function PromotionTable({ promotions, onDelete, onModify }) {
  return (
      <div className="table-responsive">
       < table className="table table-bordered text-center" style={{ backgroundColor: '#f8f8f8', borderColor: '#685F4C', borderRadius: '10px',
        marginTop: '10px' }} >
      <thead style={{ backgroundColor: '#4b4539', color: 'white',fontWeight: 'bold' }} >
          <tr>
            <th>ID</th>
            <th>Nom</th>
            <th>Commande</th>
            <th>Date</th>
            <th>Promotion</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {promotions.length > 0 ? (
            promotions.map((promotion) => (
              <tr key={promotion.id}>
                <td>{promotion.id}</td>
                <td>{promotion.nom}</td>
                <td>{promotion.Commande}</td>
                <td>{promotion.Date}</td>
                <td>{promotion.Promotion}</td>
                <td>
                  <button
                    className="btn btn-sm btn-primary mx-1"
                    onClick={() => onModify(promotion)}
                  >
                    Modifier
                  </button>
                  <button
                    className="btn btn-sm btn-danger mx-1"
                    onClick={() => onDelete(promotion.id)}
                  >
                    Supprimer
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="7">Aucune promotion trouvée.</td>
            </tr>
          )}
        </tbody>
      </table>
      </div>
  );
}


export default PromotionTable;
