import { defineConfig } from 'drizzle-kit'

export default defineConfig({
schema: "./config/schema.tsx",
dialect: 'postgresql',
dbCredentials: {
url: 'postgresql://kidstories-db_owner:fm8gEkQPj0Fq@ep-lingering-flower-a5edb9e2.us-east-2.aws.neon.tech/kidstories-db?sslmode=require',
},
verbose: true,
strict: true,
})