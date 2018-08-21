import jwt from 'jsonwebtoken';

require('dotenv').config()

const userHelper = {
    
    permittedAttributes(user) {
        const attributes = {
          id: user.id,
          firstname: user.firstname,
          lastname: user.lastname,
          email: user.email,
          roleId: user.roleId,
          department: user.department,
          staffId: user.staffId,
          createdAt: user.createdAt,
          updatedAt: user.updatedAt
        };
        return attributes;
      },
      getUserAttribute() {
        return [
          'id',
          'firstname',
          'lastname',
          'email',
          'roleId',
          'department',
          'staffId',
          'createdAt',
          'updatedAt'
        ];
      },
      getToken(user) {
        return jwt.sign({
          id: user.id,
          roleId: user.roleId
        }, process.env.MY_SECRET, { expiresIn: 172800 });
      }
}

export default userHelper;