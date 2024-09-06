import Link from "next/link"
import ThemeSelector from "./ui/ThemeSelector"
import { Button } from "@/components/ui/button"

function Navbar() {
  
  let isAuthenticated = false;
    
  return (
    <div className="flex justify-between items-center lg:px-44 md:px-20 py-8 font-bold">

        {/*Logo*/}
        <Link className="text-2xl" href="/">VoidSignals</Link> 

        {/*Navigation Links*/}
        <div className="flex gap-10">
            <Link href={"/about"}>About</Link>
            <Link href={"/features"}>Features</Link>
            <Link href={"/pricing"}>Pricing</Link>
            <Link href={"/faq"}>FAQ</Link>
        </div>

        {/*Theme select + Login button or Foto Profile*/}
        <div className="flex gap-4">
              <ThemeSelector/>
              {isAuthenticated ? <h1>OK</h1> : <Button>Join Us</Button>}
        </div>
        
    </div>
  )
}

export default Navbar
