import "./App.css";


import React, {useEffect, useState} from 'react';

import UserList from './components/userList';
import BasicModal from './components/modalForm';


import getAllUsers from './services/getAllUsers';
import postNewUser from './services/postNewUser';
import deleteUsers from './services/deleteUsers';
import editUser from './services/editUsers';





function App() {


  const [users, setUsers] = useState([]);
  const [newUser, setNewUser] = useState({})
  const [deleteId, setDeleteId] = useState('')
  const [editDefValues, setEditDefValues] = useState({})
  const [editFormRes, setEditFormRes] = useState({})

  const [modalState, setModalState] = useState(false);
  
  const toggleModalState = () => {
    setModalState(!modalState);
  };

  // Use Effect Para la traer la información de la api e imprimirla en la tabla
    useEffect(() => {
      getAllUsers()
        .then(res => setUsers(res.data));
    }, [])

  // Use Effect para hacer un post a la api y imprimir la nueva tabla actualizada junto con el nuevo Item. 

    useEffect(() => {
      if(newUser.first_name){
        postNewUser(newUser)
          .then((res) => {
            setUsers([...users, res.data])
            setNewUser({})
          })
      } else {
        console.log('no hay valores para hacer un post')
      }
    }, [newUser, users])




    useEffect(() => {

      const filterUser = (id) => {
        const newArr = users.filter((user) => id !== user.id)
        return newArr
      }
      if(deleteId){
        deleteUsers(deleteId)
          .then(() => {
            setUsers(filterUser(deleteId))
          })
      } 
    }, [deleteId, users])
  
    useEffect(() => {

      const filterUser = (id) => {
        const newArr = users.filter((user) => id !== user.id)
        return newArr
      }
      if(editFormRes.id){
        editUser(editFormRes.id, editFormRes)
          .then((res) => {
            console.log(res.data)
            setUsers([res.data, ...filterUser(editFormRes.id)])
            setEditFormRes({})
          })
      }
    }, [editFormRes, users])
  


    const handlerPostNewUser = (event) => {
      console.log("se agrega un nuevo usario");
      setNewUser(event)

    }
    const handlerOnDelete = (id) => {
      setDeleteId(id)
      console.log('este es mi id desde la app',id)
    }
    const handlerOnEdit = (obj) => {
      setEditDefValues(obj)
    }

    const handlerOnEditUser = (data) => {
      setEditFormRes(data)
    }



  return (

<>


<div className="App">
      <div className={`modalBackground modalShowing-${modalState}`}>
        <div className="modalInner gradient-border">
          <div className="modalImage">
            <img
              src="https://images.unsplash.com/photo-1611095562057-2e70d5bf9dee?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
              alt="modal pic"
            />
          </div>
          <div className="modalText">
            <h2>Register a New User</h2>
            <BasicModal onCreate = {handlerPostNewUser} defValues={editDefValues} onEdit={handlerOnEditUser}/>

              <button className="exitButton" onClick={() => toggleModalState()}>exit</button>

          </div>
        </div>
      </div>
      <button onClick={() => toggleModalState()}>Register new User</button>
</div>


    

      <UserList users={users} onDelete={handlerOnDelete} onEdit={handlerOnEdit} toggleModalState key={users.id}  />

</>
  );
}

export default App;
