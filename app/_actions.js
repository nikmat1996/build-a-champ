"use server"

import { EmailSchema } from "@/lib/schema"

export async function subscribe(state, formData){
    const result = EmailSchema.safeParse({
        email: formData.get("email")
    })

    if(result.success){
        await new Promise((res) => {

            setTimeout(() => {
                res()
            }, 2000)
        })
        return {
            data: result.data
        }
    }

    if(result.error){
        return {
            // error: result.error.format()
            error: result.error.flatten().fieldErrors
        }
    }
}

export async function saveContact(state, formData){
    // const result = EmailSchema.safeParse({
    //     email: formData.get("email")
    // })

    // if(result.success){
    //     await new Promise((res) => {

    //         setTimeout(() => {
    //             res()
    //         }, 2000)
    //     })
    //     return {
    //         data: result.data
    //     }
    // }

    // if(result.error){
    //     return {
    //         // error: result.error.format()
    //         error: result.error.flatten().fieldErrors
    //     }
    // }

    return {
        data: "Success"
    }

}

export async function getData(sports, ageRange, gender, dateStr){
    return {
        data: {
            sports, ageRange, gender, dateStr
        }
    }
}