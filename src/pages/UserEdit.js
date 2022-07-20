import React from 'react'

const UserEdit = () => {
  return (
    <div>
      <h2>Edit User</h2>
      <form>
        <div>
          <label>nom</label>
          <input type="text" />
        </div>
        <div>
          <label>email</label>
          <input type="email" />
        </div>
        <div>
          <label>password</label>
          <input type="password" />
        </div>
        <div>
          <button type="submit"> modifier</button>
        </div>
      </form>
      
    </div>
  )
}

export default UserEdit
