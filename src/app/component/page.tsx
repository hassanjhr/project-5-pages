
import Link from "next/link"
import Image from "next/image";
import logo from "../images/logo.png"


export default function Navbar(){
    return (
    <div style={{ 
        }}>
    <div style={{justifyContent: "center", display: "flex", alignItems: "center",  backgroundColor: "#162F33"}}><br />
            <Image src={logo} alt="logo" width={"100"} height={"50"}/>
    
    <Link className="mr-5 hover:text-blue-900 " href="/" style={{ fontWeight: "bold", fontSize: "medium", margin: "0 20px"}}>Home</Link> 
        <Link className="mr-5 hover:text-blue-900 " href="/about" style={{ fontWeight: "bold", fontSize: "medium", margin: "0 20px"}}>About</Link> 
        <Link className="mr-5 hover:text-blue-900" href="/contact" style={{ fontWeight: "bold", fontSize: "medium",margin: "0 20px"}}>Contact</Link> 
        <Link className="mr-5 hover:text-blue-900" href={"/blogs"} style={{ fontWeight: "bold", fontSize: "medium",margin: "0 20px"}}>Blogs</Link> 
        <Link className="mr-5 hover:text-blue-900" href="/policy" style={{ fontWeight: "bold", fontSize: "medium",margin: "0 20px"}}>Privcy Policy</Link> 
        <button className="mr-5 hover:text-blue-900 " style={{
                     backgroundColor: "green", 
                    border: "none",
                    borderRadius: "10px",
                     
                    padding: "10px 20px", 
                    fontSize: "small", 
                    cursor: "pointer", 
                    
                }}>Login</button>
    
    <button className="mr-5 hover:text-blue-900 " style={{
                     backgroundColor: "green",
                      
                    border: "none",
                    borderRadius: "10px",
                     
                    padding: "10px 20px", 
                    fontSize: "small", 
                    cursor: "pointer", 
                   
                }}>Sign Up</button>


    </div>
    
    
    <div>
    </div>


    </div>


    
    )
} 