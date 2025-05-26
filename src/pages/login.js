import React from 'react'
function NotYet(userName, password) {
    if(!userName|| !password)alert('please fill the input fields')
 else alert("This feature is not yet implemented. Stay tuned for updates!");    
}
 export default function Login() {
    const [userName, setUserName] = React.useState('');
    const [password, setPassword] = React.useState('');
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
    <input onChange={(e)=>setUserName(e.target.value)} type="text" placeholder="Username" className=" text-sm border-2 md:text-md border-blue-600 rounded-lg md:p-2 md:m-2 md:w-full md:max-w-md" />
    <br/>
    <input onChange={(e)=>setPassword(e.target.value)} type="password" placeholder="Password" className=" text-sm md:text-md border-2 border-blue-600 rounded-lg md:p-2 md:m-2 md:w-full md:max-w-md" />
    <br/>
    <button onClick={() => NotYet(userName,password)} className="bg-blue-600 text-sm md:text-md  text-white rounded-lg p-2  md:p-2 md:m-2 md:w-40 md:max-w-md hover:bg-blue-700 transition duration-200">
      Login
    </button>
    </div>
  )
}

// export default Login
