import { useForm } from 'react-hook-form';
import { useEffect, useState } from "react";

const BasicModal = ({ onCreate, defValues, onEdit }) => {

  const { register, handleSubmit, reset } = useForm()
  const [buttonMode, setButtonMode] = useState(false)
  const emptyValues = {
    first_name: "",
    last_name: "",
    email: "",
    password: "",
    birthday: ""

  }
  const [modalState, setModalState] = useState(false);
  
  const toggleModalState = () => {
    setModalState(!modalState);
  };

  useEffect(() => {
    if(defValues){
      reset(defValues)
      setButtonMode(!buttonMode)
    }
  }, [reset, defValues])

    const onSubmit = (res) => {
      onCreate(res)
      onEdit(res)
      reset(emptyValues)
      setButtonMode(!buttonMode)

  }
    return(     


            <div>
 <form onSubmit={handleSubmit(onSubmit)}>
 <label htmlFor="first_name">First Name     </label>
 <input type="text" {...register("first_name")} placeholder='first name' id='first_name' />
 <label htmlFor="last_name">Last Name      </label>
 <input type="text" {...register("last_name")} placeholder='last name' id='last_name'/>
 <label htmlFor="email">Email     </label>
<input type="email" placeholder='email' id='email' {...register("email")}/>
<label htmlFor="password">Password     </label>
<input type="password" placeholder='password' id='password' {...register("password")} />
<label htmlFor="birthday">Birthday      </label>
<input type="date" placeholder='birthday' id='birthday' {...register("birthday")} />
<button className='button-upload'>{buttonMode ? "Register" : "Edit"}</button>
</form>
</div>






            )
  
    } 
export default BasicModal