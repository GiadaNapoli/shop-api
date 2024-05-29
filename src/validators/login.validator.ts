import { z } from "zod";

export const ZLoginSchema = z.object({
	email: z.string().email(),
	password: z.string().min(5),
	loggedIn: z.boolean().optional(),
});
export type ZLoginSchema = z.infer<typeof ZLoginSchema>;
