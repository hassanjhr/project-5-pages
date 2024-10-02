import _default from "next/dist/client/router"
import Navbar from "./component/page"
import Link from "next/link";
import Image from "next/image";


 function home() {
  return (
    <div>
      
      
      <Navbar/> <br />
       
      {/* <Link href="https://www.facebook.com" target="_black">facebook</Link>  */}
     
      <span style={{fontSize:"xx-large"}}>Home</span>
    </div>
  )
}

export default home;