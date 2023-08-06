import CardReg from "@/components/AuthComponent/CardReg"
import { Metadata } from "next"

export const metadata : Metadata = {
  title : "Register"
}

const Register = () => {
    return (
      <section>
          <CardReg />
      </section>
    )
  }
  
  export default Register