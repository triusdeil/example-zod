import {z} from 'zod'

// const userSchema = z.object({
//     name: z.string(),
//     age: z.number()
// })

// const usersSchemas = z.string().array().optional()
// const numbersArraySchema = z.array(z.number())

// type userType = z.infer<typeof usersSchemas>

// type NumberArrayTypes = z.infer <typeof numbersArraySchema>

// numbersArraySchema.parse([1,2,3])

// const stringSchema = z.string()

// const result = stringSchema.safeParse('hola mundo')

// console.log(result)

// const UserSchema = z.object({
//     email: z.string().email(),
//     fullname: z.string(),
//     age: z.number()
// })

// const addresSchema = z.object({
//     street: z.string(),
//     city: z.string()
// })

// const cityzenSchema = UserSchema.merge(addresSchema)

// // const result = UserSchema.parse({
// //     email: 'ryan@gmail.com',
// //     fullname: 'ryan',
// //     age: 123
// // })

// type UserType = z.infer<typeof UserSchema>

// type CityZenType = z.infer<typeof cityzenSchema>

// const cityzen: CityZenType = {
//     fullname: 'luis eduardo',
//     city: 'london',
//     email: 'email@email.com',
//     age: 12,
//     street: 'san juan de los morros'
// }

// const UserInput: UserType = {
//     email: 'email@email.com',
//     fullname: 'luis',
//     age: 30 
// }

// const result = UserSchema.parse(UserInput)

// addresSchema.parse({
//     street: 'some street 123',
//     city: 'london'
// })

// const result2 = cityzenSchema.parse(cityzen) 

// console.log(result2);

// const nameSchema = z.string()
// const numberSchema = z.number()
// const booleanSchema = z.boolean()
// const undefinedSchema = z.undefined()
// const nullSchema = z.null()

// const result = numberSchema.parse(30)

// console.log(result)
