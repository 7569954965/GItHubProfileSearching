import { useEffect, useState } from "react";
import Newcom from "./Newcom";

function Comp3() {
  const [userName, setUserName] = useState(`7569954965`);
  const[userData,setUserData]=useState(null);
//   const[loading,setLoading]=useState(true);

  async function fetchGithubUserData() {
    // setLoading(true)
    const res = await fetch(`https://api.github.com/users/${userName}`);

    const data = await res.json();
    if(data){
        setUserData(data)
        // setLoading(false)
        setUserName("");

    }
    console.log(data);
  }

  function handleSubmit() {
    fetchGithubUserData();
  }

  useEffect(() => {
    fetchGithubUserData();
  }, []);

//   if(loading){
//     return <h1>Loading data Please wait</h1>
//   }


  return (
    <div className="bg-slate-300 max-w-full h-screen flex justify-center items-center p-40">
      <div className="bg-slate-500 p-10 text-center rounded-md m-20 w-auto">
        <h1 className="font-bold text-3xl p-2">Git-Hub Profile</h1>
        <div className="p-4 font-serif">
          <input
            type="text"
            name="Search-by-username"
            placeholder=" Enter any github username"
            className="w-52 text-sm p-2 rounded-lg border hover:border-yellow-400 hover:scale-110 duration-200"
            onChange={(e) => setUserName(e.target.value)}
          />
          <button  className="bg-black p-2 rounded-lg m-2 text-sm text-white hover:bg-indigo-800 hover:scale-110 duration-200" onClick={handleSubmit}>Search</button>
        </div>
        {
            userData !==null ? <Newcom user={userData}/> :null
        }
      </div>
    </div>
  );
}

export default Comp3;
