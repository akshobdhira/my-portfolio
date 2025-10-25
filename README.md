# Kinetic Coding Canvas

This project is a portfolio website built with:

- Vite
- TypeScript
- React
- shadcn-ui
- Tailwind CSS

## Development

To get started, you'll need [Node.js](https://nodejs.org/) installed.

```sh
# Step 1: Clone the repository.
git clone <YOUR_GIT_URL>

# Step 2: Navigate to the project directory.
cd <YOUR_PROJECT_NAME>

# Step 3: Install the necessary dependencies.
npm i

# Step 4: Configure environment variables for YouTube integration.
# Copy the example environment file and add your credentials.
cp .env.example .env

# Edit .env and add your YouTube API key and Channel ID:
# VITE_YOUTUBE_API_KEY=your_api_key_here
# VITE_YOUTUBE_CHANNEL_ID=your_channel_id_here

# Step 5: Start the development server.
npm run dev
```

## Environment Variables

To enable the YouTube video section, you need to set up the following environment variables:

1. **VITE_YOUTUBE_API_KEY**: Your YouTube Data API v3 key
   - Go to [Google Cloud Console](https://console.developers.google.com/)
   - Create a new project or select an existing one
   - Enable the **YouTube Data API v3** for your project
   - Create credentials (API key) under "Credentials" section
   - Copy your API key

2. **VITE_YOUTUBE_CHANNEL_ID**: Your YouTube channel ID
   - Go to [YouTube Studio](https://studio.youtube.com/)
   - Click on "Settings" → "Channel" → "Advanced settings"
   - Find your Channel ID and copy it

Create a `.env` file in the root directory with these variables (see `.env.example` for reference).

**Note**: The `.env` file is gitignored for security. For deployment platforms (Vercel, Netlify, etc.), add these variables in their respective environment variable settings.

## Deployment

You can deploy this project to any static hosting service.