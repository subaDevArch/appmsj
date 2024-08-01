import {z} from 'zod'


export const loginSchema = z.object({
    email:z.string({
        required_error:'Email is required',
    }).email({
        message:'Invalid email',
    }),
    password: z.string({
        required_error: 'Password is required',
    }).min(6,{
        message:'Username or password is wrong!',
    })
})