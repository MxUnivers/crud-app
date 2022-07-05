import React from 'react'

const UserList = () => {

   const username = "Aymar";

  return (
    <body>
    <div>
        <h1>Liste des utilisateurs</h1>
        <div>
            <a href="">Créer un utilisateur</a>
        </div>
    </div>
    

    <div>
        <div>
            <button>Actualiser</button>
            <button>Supprimer</button>
        </div>    
        <div>
            <input type="text"/>
            <button>rechercher</button>
        </div>
    </div>


    <div>
        <table>
            <thead>
                <tr>
                    <th><input type="checkbox" name="" id=""/></th>
                    <th>Nom</th>
                    <th>Actions</th>
                </tr>
                
            </thead>


            <tbody>
                <tr>
                    <td><input type="checkbox" name="" id=""/></td>
                    <td>  {username}  </td>
                    <td>
                        <button>Modifier</button>
                        <button>Supprimer</button>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>

    <div>
        <div>
            <a href="#">Premier</a>
            <a href="#">Précedent</a>
            <a href="#">1</a>
            <a href="#">Suivant</a>
            <a href="#">Dernier</a>
        </div>
    </div>
    
</body>
  )
}

export default UserList