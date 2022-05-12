import {Table, TableContainer, TableHead, TableCell, TableBody, TableRow } from '@mui/material'
import {Edit, Delete} from '@mui/icons-material'


const UserList = ({users, onDelete, onEdit}) => {
  return(
    <TableContainer>
      <Table>
        <TableHead>
          <TableRow>
          <TableCell>Id</TableCell>          
          <TableCell>NAME</TableCell>
          <TableCell>LAST NAME</TableCell>
          <TableCell>BIRTH DATE</TableCell>
          <TableCell>EMAIL</TableCell>
          <TableCell>PASSWORD</TableCell>
          <TableCell>ACTION</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
        {users.map((user) => (
        <TableRow key={user.id}>
          <TableCell>
          {user.id}
          </TableCell>          
          <TableCell>
            {user.first_name}
          </TableCell>
          <TableCell>
            {user.last_name}
          </TableCell>
          <TableCell>
            {user.birthday}
          </TableCell>
          <TableCell>
            {user.email}
          </TableCell>
          <TableCell>
            {user.password}
          </TableCell>
          <TableCell>
            <Edit className="actionButton" onClick={() => onEdit(user)}/>
            &nbsp;&nbsp;&nbsp;
            <Delete className="actionButton" onClick={() => onDelete(user.id)} />
          </TableCell>
        </TableRow>
      ))}
            </TableBody>
      </Table>
    </TableContainer>
    )
}

export default UserList





