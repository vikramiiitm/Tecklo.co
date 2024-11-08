
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import Image from 'next/image'
import { Fade } from "react-awesome-reveal"


const img = [
    {
        src: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8dGVjaCUyMGNvbXBhbnklMjBoZXJvJTIwc2VjdGlvbnxlbnwwfHwwfHx8Mg%3D%3D",
        delay: 500
    },
    {
        src: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dGVjaCUyMGNvbXBhbnklMjBoZXJvJTIwc2VjdGlvbnxlbnwwfHwwfHx8Mg%3D%3D",
        delay: 1000
    },
    {
        src:
            "https://images.unsplash.com/photo-1508780709619-79562169bc64?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fHRlY2glMjBjb21wYW55JTIwaGVybyUyMHNlY3Rpb258ZW58MHx8MHx8fDI%3D",
        delay: 1500
    },
    
]



function Hero() {
  return (
      <div className="flex justify-around mt-6  px-5 gap-2">
        <Fade direction="right">
         {img.map((props, index) => (
             <Fade key={index} delay={props.delay} direction="left">

                 <Image  src={props.src} width={1000} height={1000} alt="hero image" className="w-[30vw] object-cover h-40 md:h-64" />
                     </Fade>
            
        ))}
        </Fade>
          

    </div>
  )
}

export default Hero