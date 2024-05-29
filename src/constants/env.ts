const productionEnv = import.meta.env.VITE_PRODUCTION;
export const isProduction =
  typeof productionEnv === "string" ? productionEnv === "true" : false;
export const githubUrl = import.meta.env.VITE_GITHUB_URL;
export const instragamUrl = import.meta.env.VITE_INSTAGRAM_URL;
export const discordUrl = import.meta.env.VITE_DISCORD_URL;
export const steamUrl = import.meta.env.VITE_STEAM_URL;
