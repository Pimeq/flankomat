module.exports = {
  apps: [
    {
      name: 'Nuxt',
      port: '3000',
      exec_mode: 'cluster',
      instances: 'max',
      script: 'DATABASE_URL=$DATABASE_URL SUPABASE_KEY=$SUPABASE_KEY SUPABASE_URL=$SUPABASE_URL ./.output/server/index.mjs',
    }
  ]
}
