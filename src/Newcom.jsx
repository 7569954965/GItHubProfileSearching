import React from 'react'

function Newcom({user}) {

    const{avatar_url,followers,following,public_repos,name,login,created_at}=user;

    const createdDate =new Date(created_at);
    return(
        < div className='bg-slate-100 shadow-lg shadow-red-800 md:shadow-black rounded-md'>

               <div className='p-3'>
                     <div className='mx-10 md:mx-16'>
                        <img  src={avatar_url} className=" h-40 w-40 rounded-xl shadow-gray-500" alt="image" />
                    </div>
                    <div className='p-1'>
                        <a className='text-gray-400' href={`https://github.com/${login}`}>{name || login}</a>
                        <p className='text-sm font-mono'><b>User joined on {`${createdDate.getDate()} ${createdDate.toLocaleDateString('en-us',{month:`short`} )} ${createdDate.getFullYear()}` } </b> </p>
                    </div>
                    <div className="text-sm p-1">
                        <span className='pr-2 text-gray-600'>Public Repos :</span>
                        <span>{public_repos}</span>
                    </div>
                    <div className='text-sm p-1'>
                        <span className='pr-2 text-gray-600'>Followers :</span>
                        <span>{followers}</span>
                    </div>
                    <div className='text-sm p-1'>
                        <span className='pr-2 text-gray-600'>Following :</span>
                        <span>{following}</span>
                    </div>
               </div>
        
        </div>
    )
    
}

export default Newcom;