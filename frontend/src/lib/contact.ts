'use server'

import { z } from 'zod'

const schema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Invalid email address"),
  subject: z.string().min(1, "Subject is required"),
  message: z.string().min(20, "Message must be at least 20 characters long"),
})

export async function submitContactForm(formData: FormData) {
  const validatedFields = schema.safeParse({
    name: formData.get('name'),
    email: formData.get('email'),
    subject: formData.get('subject'),
    message: formData.get('message'),
  })

  if (!validatedFields.success) {
    return { success: false, errors: validatedFields.error.flatten().fieldErrors }
  }

  // Here you would typically send an email or save to a database
  // For demonstration, we'll just simulate a delay and return success
  await new Promise(resolve => setTimeout(resolve, 2000))

  return { success: true }
}

