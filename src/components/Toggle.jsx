import { IoMoonOutline } from "react-icons/io5";
import { IoSunnyOutline } from "react-icons/io5";


function Toggle({ darkMode, setDarkMode }) {
     
   
      return (
        <div className="flex col-span-1 justify-center  text-center gap-3 bg-primary dark:bg-black dark:text-white">
             <span className="animate-bounce mt-9" > → </span> 
          <button  className={`bg-gray-800 hover:bg-gray-600 text-white  m-5  py-4 px-5 rounded-md ${darkMode ? 'active' : ''}`}
         onClick={() => setDarkMode(!darkMode)}
         >
            {darkMode ? <IoSunnyOutline />: <IoMoonOutline />  }
</button>
<span className="animate-bounce mt-9" > ← </span> 
</div>
);
};
export default Toggle