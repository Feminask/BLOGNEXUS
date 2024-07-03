import { Alert, Button, Label, Spinner, TextInput } from "flowbite-react";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { signInFailure, signInstart, signInsuccess } from "../redux/user/userSlice";
import { useDispatch, useSelector } from "react-redux";
import OAuth from "../components/OAuth";

function SignIn() {
  const [formData, setFormData] = useState({});
  const {loading,error:errorMessage}=useSelector(state=>state.user)
const dispatch = useDispatch()
const navigate=useNavigate()
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value.trim() });
  };
  // console.log(formData);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if( !formData.email || !formData.password ){
      return dispatch(signInFailure('Please fill out all fields.'))
    }
    try {
     dispatch(signInstart())
      const res = await fetch("/api/auth/signin", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      if(data.success ===false){
dispatch(signInFailure(data.message))      }

      if(res.ok){
        dispatch(signInsuccess(data))
        navigate('/')
      }
    } catch (error) {
dispatch(signInFailure(error.message))    }
  };

  return (
    <div className="min-h-screen mt-20 p-5">
      <div className="flex p-3 max-width-3xl mx-auto flex-col md:flex-row md:items-center gap-5">
        {/* left */}
        <div className="flex-1">
        <Link
  to="/"
  className="self-center whitespace-nowrap text-sm sm:text-xl font-semibold dark:text-white"
>
  <span style={{fontFamily:"Playwrite GB S, cursive"}} className="px-2 py-1 bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 rounded-lg text-white ">
    BlogNexus
  </span>
</Link>
          <p className="text-sm mt-5">
       <span>   Welcome back to BlogNexus! 🌐</span>

    your platform for creativity and connection. Sign in to unlock a world of inspiration, where you can share your thoughts, engage with others, and explore diverse perspectives. Join our vibrant community of bloggers and enthusiasts today. Let your voice be heard and your ideas shine on BlogNexus.          </p>
        </div>
        {/* //right */}
        <div className="flex-1">
          <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
            
            <div className="">
              <Label value="Your email"></Label>
              <TextInput
                type="email"
                placeholder="name@company.com"
                id="email"
                onChange={handleChange}
              ></TextInput>
            </div>
            <div className="">
              <Label value="Your password"></Label>
              <TextInput
                type="password"
                placeholder="Password"
                id="password"
                onChange={handleChange}
              ></TextInput>
            </div>
            <Button gradientDuoTone="purpleToPink" type="submit"disabled={loading}>
{loading? (
<>
    <Spinner size='sm'></Spinner>
  <span className="pl-3">Signing In...</span>
  
</>) : 'Sign In'}            </Button>
<OAuth></OAuth>
          </form>
          <div className="flex gap-2 tex-sm mt-5">
            <span>Dont Have an account?</span>
            <Link to="/sign-up" className="text-blue-500">
              Sign Up
            </Link>
          </div>
          {
            errorMessage && (
<Alert className="mt-5 "color='failure'>
              {errorMessage}
  
</Alert>            )
          }
        </div>
      </div>
    </div>
  );
}

export default SignIn;
