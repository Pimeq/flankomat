module.exports = {
  apps: [
    {
      name: 'Nuxt',
      port: '3000',
      exec_mode: 'cluster',
      instances: 'max',
      script: './.output/server/index.mjs',
      env: {
        DATABASE_URL: process.env.DATABASE_URL,
        SUPABASE_KEY: process.env.SUPABASE_KEY,
        SUPABASE_URL: process.env.SUPABASE_URL,
      },
    }
  ]
}
