import { z } from 'zod';

export const EmailSchema = z.object({
    email: z.string().email()
})

export const ContactSchema = z.object({
    name: z.string().min(1).max(255), 
    age: z.string().optional(), 
    gender: z.string().optional(), 
    mobile: z.string().length(10).regex(/^\d+$/).optional(), 
    address: z.string().optional(), 
    email: z.string().email()
  });

const schema = z.object({
    sport: z.string().nonempty("Select Sport is required"),
    date: z.date().nullable().optional(),
    time: z.string().nonempty("Time is required"),
    gender: z.string().nonempty("Select Gender is required"),
    category: z.string().nonempty("Category is required"),
    price: z.number().positive("Price must be a positive number").min(0.01, "Price cannot be zero"),
    address: z.string().nonempty("Address is required"),
    phone: z.string().min(10, "Phone number must be at least 10 characters").nonempty("Phone is required"),
    url: z.string().url({ message: "Picture must be a valid URL" }).nonempty("Picture is required"),
    password: z.string().min(4, "PIN must be at least 4 characters").nonempty("PIN is required"),
});