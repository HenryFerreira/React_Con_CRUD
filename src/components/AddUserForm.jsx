import React, { Fragment } from 'react'
import { useForm } from 'react-hook-form';

const AddUserForm = (props) => {

    const {register, handleSubmit, formState: {errors}} = useForm()

    const onSubmit = (data, e) => {

        props.addUser(data)

        e.target.reset();
    }

    return (
        <Fragment>
            <form onSubmit={handleSubmit(onSubmit)}>
                <label>Name</label>
                <input 
                    type="text" 
                    //Nueva forma de hacer los registers desde la v7
                    {...register("name", {
                        required: {
                            value: true,
                            message: 'Campo obligatorio'
                        }
                    }) 
                    }
                />
                <div>
                    {errors?.name?.message}
                </div>

                <label>Username</label>
                <input 
                    type="text" 
                    //Nueva forma de hacer los registers desde la v7
                    {...register("username", {
                        required: {
                            value: true,
                            message: 'Campo obligatorio'
                        },
                        minLength: {
                            value:2,
                            message: 'Minimo 2 letras'
                        }
                    }) 
                    }
                />
                <div>
                    {errors?.username?.message}
                </div>



                <button>Add new user</button>
            </form> 
        </Fragment>
    );
}
 
export default AddUserForm;