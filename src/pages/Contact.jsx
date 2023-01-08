import React, {useState} from 'react'

export const Contact = () => {
    const [inputData, setInputData] = useState({username:'',email:'',password:''});
    // const handleInput = (event)=>{
    //     input.username.
    // }
    return (
        <div className='flex justify-center items-center w-full'>
            <form
                action=""
                className='p-4 flex justify-center flex-col'
            >
                <h1 className='text-xl text-center font-bold'>Enter Details</h1>
                <label htmlFor="" className='p-2'>
                    Username
                    <input
                        className='my-2 p-2 w-96 block border-2'
                        type="text"
                        name="username"
                        value={inputData.username}
                        onChange={e => setInputData({ ...inputData, username: e.target.value })}
                    />
                </label>
                <label htmlFor="" className='p-2'>
                    Email
                    <input
                        className='my-2 p-2 w-96 block border-2'
                        type="text"
                        name="email"
                        value={inputData.email}
                        onChange={e => setInputData({ ...inputData, email: e.target.value })}
                    />
                </label>
                <label htmlFor="" className='p-2'>
                    Password
                    <input
                        className='my-2 p-2 w-96 block border-2'
                        type="text"
                        name="password"
                        value={inputData.password}
                        onChange={e => setInputData({ ...inputData, password: e.target.value })}
                    />
                </label>
                <button type='submit' className='p-2  m-2 border-2 bg-blue-400 '>Get Detail</button>
                {console.log(inputData.username)}
            </form>
        </div>
    )
}
