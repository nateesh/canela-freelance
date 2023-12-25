import { fail, type RequestEvent } from "@sveltejs/kit"
import { z } from "zod"
import { superValidate } from "sveltekit-superforms/server"

const resendAPI = "re_6eyE5YbV_4sD1w1pEGPShCbKVpePvr6c6"

const newContactSchema = z.object({
	name: z.string().min(1),
	phone: z.string().trim(),
	email: z.string().email(),
	company: z.string(),
	message: z.string().min(1),
})

export const load = async (event: RequestEvent<Partial<Record<string, string>>,
     string | null> | Request | FormData | URLSearchParams | URL | Partial<{ name: string; phone: string; email: string; company: string; message: string; }> | null | undefined) => {
	const form = await superValidate(event, newContactSchema)
	return {
		form
	}
}

export const actions = {
	default: async (event: RequestEvent<Partial<Record<string, string>>,
         string | null> | Request | FormData | URLSearchParams | URL | Partial<{ name: string; phone: string; email: string; company: string; message: string; }> | null | undefined) => {
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