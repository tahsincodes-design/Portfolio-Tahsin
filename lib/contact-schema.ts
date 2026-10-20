import { z } from "zod"

export const contactSchema = z.object({
  name: z
    .string()
    .trim()
    .min(2, "Please enter your name.")
    .max(80, "That name is a little too long."),
  email: z
    .email("Enter a valid email address.")
    .max(200, "That email address is too long."),
  message: z
    .string()
    .trim()
    .min(20, "Tell me a little more — at least 20 characters.")
    .max(2000, "Keep the message under 2,000 characters."),
  website: z.string().max(0).optional().default(""),
  startedAt: z.coerce.number().optional(),
})

export type ContactInput = z.infer<typeof contactSchema>
export type ContactField = "name" | "email" | "message"
export type ContactFieldErrors = Partial<Record<ContactField, string>>
