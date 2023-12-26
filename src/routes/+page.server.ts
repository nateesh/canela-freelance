import { fail, type RequestEvent } from "@sveltejs/kit"
import { z } from "zod"
import { superValidate } from "sveltekit-superforms/server"
import nodemailer from 'nodemailer';
// add vercel env variables
import * as dotenv from 'dotenv';
dotenv.config({ path: '.env.local' });
const ventraPass = process.env.VENTRA_PASS;


let transporter = nodemailer.createTransport({
	host: 'ventraip.email',
	port: 465,
	secure: true,
	auth: {
	  user: 'nathan@canelaspatial.au',
	  pass: `${ventraPass}`
	}
  });

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
  
      let mailOptions = {
        from: 'nathan@canelaspatial.au',
        to: 'nathan@canelaspatial.au',
        subject: `Contact Form Submission from ${form.data.name}`,
        text: `Name: ${form.data.name}\n
        Email: ${form.data.email}\n
        Phone: ${form.data.phone}\n
        Company: ${form.data.company}\n
        Message: ${form.data.message}`,
      };
  
      transporter.sendMail(mailOptions, function(error, info){
        if (error) {
          console.log(error);
        } else {
          console.log('Email sent: ' + info.response);
        }
      });
  
      return { form }
    }
  }