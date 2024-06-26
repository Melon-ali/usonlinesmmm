import { useContext } from "react";
import { useForm } from "react-hook-form"
import { AuthContext } from "../../providers/AuthProvider";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import SocialLogin from "../Shared/SocialLogin/SocialLogin";

const SignUp = () => {
    const { register, formState: { errors }, handleSubmit, reset } = useForm();
    const {createUser, updateUserProfile} = useContext(AuthContext);
    const navigate = useNavigate();

    const onSubmit = data => {
        createUser(data.email, data.password)
        .then(result => {
            const loggedUser = result.user;
            console.log(loggedUser);
            updateUserProfile(data.name, data.photoURL)
            .then(() => {
                const saveUser = {name: data.name, email:data.email}
                fetch('https://school-spsg.onrender.com/users', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(saveUser)
                })
                .then(res => res.json())
                .then(data => {
                    if(data.insertedId){
                        reset();
                        Swal.fire({
                            position: 'top-end',
                            icon: 'success',
                            title: 'User Created Succesfully',
                            showConfirmButton: false,
                            timer: 1500
                        });
                        navigate('/');
                    }
                })

                
            })
            .catch(error => console.log(error))
        })
    }


  return (
    <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
            <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Sign Up now!</h1>
            <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
            </div>
            <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Name</span>
                    </label>
                    <input type="text" {...register("name", {required: true})} name="name" placeholder="name" className="input input-bordered" />
                    {errors.name && <span className="text-red-600">Name is Required</span>}
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Photo URL</span>
                    </label>
                    <input type="text" {...register("photo URL", {required: true})} placeholder="photo URL" className="input input-bordered" />
                    {errors.photoURL && <span className="text-red-600">Name is Required</span>}
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Email</span>
                    </label>
                    <input type="email" {...register("email", {required: true})} name="email" placeholder="email" className="input input-bordered" />
                    {errors.name && <span className="text-red-600">Email is Required</span>}
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Password</span>
                    </label>
                    <input type="password" {...register("password", {
                        required: true, 
                        minLength: 6, 
                        maxLength: 20, 
                        pattern: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/
                        })} name="password" placeholder="password" className="input input-bordered" />
                    {errors.password?.type === 'required' && <p className="text-red-600">Password is Required</p>}
                    {errors.password?.type === 'minLength' && <p className="text-red-600">Password Must be 6 characters</p>}
                    {errors.password?.type === 'maxLength' && <p className="text-red-600">Password Must be less than 20 characters</p>}
                    {errors.password?.type === 'pattern' && <p className="text-red-600">Password Must one upper case, one lower case, one number, one special characters</p>}
                <label className="label">
                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                </label>
                </div>
                <div className="form-control mt-6">
                    <input className="btn btn-primary" type="submit" value="Sign Up" />
                </div>
            </form>
            <small><p className='text-center'>Already have an account? <Link className='text-primary' to="/login">Please Login</Link></p></small>
            <SocialLogin></SocialLogin>
            </div>
        </div>
    </div>
  )
}

export default SignUp