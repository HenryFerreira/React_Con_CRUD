import React, { Fragment } from 'react'
import { useForm } from 'react-hook-form';

const EditUserForm = (props) => {

    console.log(props.currentUser)

    //--------------------------------------------------------------------//
    //Nueva forma de implementar el useForm desde la v7s
    const {register, handleSubmit, formState: {errors}, setValue} = useForm(
        {defaultValues: props.currentUser}
    )
    //--------------------------------------------------------------------//

    setValue('name', props.currentUser.name);
    setValue('username', props.currentUser.username);

    const onSubmit = (data, e) => {
        console.log(data);
        data.id = props.currentUser.id;
        props.updateUser(props.currentUser.id, data);
        e.target.reset();
    }

    return (
        <Fragment>
            <form onSubmit={handleSubmit(onSubmit)}>
                <label>Name</label>
                <input 
                    type="text" 
                    //---------------------------------------------//
                    //Nueva forma de hacer los registers desde la v7
                    {...register("name", {
                        required: {
                            value: true,
                            message: 'Campo obligatorio'
                        }
                    }) 
                    }
                    //---------------------------------------------//
                />
                <div>
                    {errors?.name?.message}
                </div>

                <label>Username</label>
                <input 
                    type="text" 
                    //---------------------------------------------//
                    //Nueva forma de hacer los registers desde la v7
                    {...register("username", {
                        required: {
                            value: true,
                            message: 'Campo obligatorio'
                        }
                    }) 
                    }
                    //---------------------------------------------//
                />
                <div>
                    {errors?.username?.message}
                </div>



                <button>Edit user</button>
            </form> 
        </Fragment>
    );
}
 
export default EditUserForm;