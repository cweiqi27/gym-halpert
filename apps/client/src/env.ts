import z from "zod";

const schema = z
  .object({
    VITE_CLERK_PUBLISHABLE_KEY: z.string().min(1),
  })
  .safeParse(import.meta.env);

if (!schema.success) {
  console.error(
    "❌ Invalid environment variables:\n",
    Object.entries(schema.error.format())
      .map(([name, value]) => {
        if (value && "_errors" in value)
          return `${name}: ${value._errors.join(", ")}\n`;
      })
      .filter(Boolean)
  );
  throw new Error("Invalid environment variables");
}

export const env = { ...schema.data };
