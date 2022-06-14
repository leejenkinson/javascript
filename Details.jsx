import { useState } from "react";

const Details = () => {

const [username, setUsername] = useState("");
const [password, setPassword] = useState("");

//const printDetails = e => {
 //   e.preventDefault();
  //  console.log(username, password);
//};

return (
    <>
        <div className = "Details">
            <form>
                <label>Username</label>
                <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />

                <label>Password</label>
                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />

                <button type="submit">Submit</button>
            </form>
        </div>
    </>
);
}

export default Details;