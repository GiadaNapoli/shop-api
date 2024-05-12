import { z } from "zod";

export const ZUserSchema = z.object({
	name: z.string().min(2),
	surname: z.string().min(2),
	email: z.string().email(),
	password: z.string().min(5),
});

export type ZUserSchema = z.infer<typeof ZUserSchema>;
