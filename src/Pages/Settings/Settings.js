const Settings = () => {
  return (
    <>
      <h1>Settings</h1>
      <nav style={{fontSize:"xx-large", float: "left"}}>
        <ul>
          <li>
            1 <button onClick={(e)=>{e.preventDefault(); alert("You clicked 1!")}}>-- 1 --</button>
          </li>
          <li>
            2 <button onClick={(e)=>{e.preventDefault(); alert("You clicked 2!")}}>-- 2 --</button>
          </li>
          <li>
            3 <button onClick={(e)=>{e.preventDefault(); alert("You clicked 3!")}}>-- 3 --</button>
          </li>
          <li>
            4 <button onClick={(e)=>{e.preventDefault(); alert("You clicked 4!")}}>-- 4 --</button>
          </li>
          <li>
            5 <button onClick={(e)=>{e.preventDefault(); alert("You clicked 5!")}}>-- 5 --</button>
          </li>
          <li>
            6 <button onClick={(e)=>{e.preventDefault(); alert("You clicked 6!")}}>-- 6 --</button>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Settings;