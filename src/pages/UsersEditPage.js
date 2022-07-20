import React from "react";
import { Link } from "react-router-dom";

const UsersEditPage = () => {
  return (
    <div>
      <form>
        <h1>Creer / Modifier un utilisateur</h1>
        <div>
          <label>Nom</label>
          <input type="text" placeholder="Nom" />
        </div>
        <div>
          <label>Prenoms</label>
          <input type="text" placeholder="Prenoms" />
        </div>
        <div>
          <label>Email</label>
          <input type="email" placeholder="Email" />
        </div>
        <div>
          <label>Mot de passe</label>
          <input type="password" placeholder="Mot de passe" />
        </div>
        <div>
          <label>Confirmer le mot de passe</label>
          <input type="password" placeholder="Confirmer le mot de passe" />
        </div>
        <div>
          <button>Enregistrer</button>
          <Link to="/users">Annuler</Link>
        </div>
      </form>
    </div>
  );
};

export default UsersEditPage;
