import { useForm,SubmitHandler} from "react-hook-form";
import {zodResolver}from '@hookform/resolvers/zod'
import { z } from "zod"

const signupSchema=z.object({
    email:z.string().email("valid email required"),
});
type TSignup=z.infer<typeof signupSchema>
export const useSignup=()=>{
    const {register,handleSubmit,formState:{errors}}=useForm<TSignup>({resolver:zodResolver(signupSchema)})
    const onSubmit:SubmitHandler<TSignup>=(data)=>{}
    return{register,handleSubmit,onSubmit,errors}
}