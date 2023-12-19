import { fail, type RequestEvent } from "@sveltejs/kit"
import { z } from "zod"
import { superValidate } from "sveltekit-superforms/server"

const newContactSchema = z.object({
	firstName: z.string().min(1),
	lastName: z.string().min(1),
	email: z.string().email(),
	company: z.string().min(1),
	message: z.string().min(1),
})

export const load = async (event: RequestEvent<Partial<Record<string, string>>,
     string | null> | Request | FormData | URLSearchParams | URL | Partial<{ firstName: string; lastName: string; email: string; company: string; message: string; }> | null | undefined) => {
	const form = await superValidate(event, newContactSchema)
	return {
		form
	}
}

export const actions = {
	default: async (event: RequestEvent<Partial<Record<string, string>>,
         string | null> | Request | FormData | URLSearchParams | URL | Partial<{ firstName: string; lastName: string; email: string; company: string; message: string; }> | null | undefined) => {
		const form = await superValidate(event, newContactSchema)
		console.log(form)

		if (!form.valid) {
			return fail(400, {
				form
			})
		}

		return { form }
	}
}