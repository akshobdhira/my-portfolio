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

# Step 4: Configure environment variables (optional for YouTube section)
# Copy the example environment file
cp .env.example .env

# Edit .env and add your YouTube API credentials:
# - VITE_YOUTUBE_API_KEY: Get from https://console.cloud.google.com/apis/credentials
# - VITE_YOUTUBE_CHANNEL_ID: Find in your YouTube channel settings

# Step 5: Start the development server.
npm run dev
```

## Configuration

### YouTube API Setup (Optional)

The portfolio includes a YouTube section that displays your latest videos. To enable this feature:

1. **Get a YouTube API Key:**
   - Go to [Google Cloud Console](https://console.cloud.google.com/)
   - Create a new project or select an existing one
   - Enable the YouTube Data API v3
   - Create credentials (API Key)
   - Copy your API key

2. **Find your YouTube Channel ID:**
   - Go to [YouTube Advanced Settings](https://www.youtube.com/account_advanced)
   - Your Channel ID is displayed under "Channel ID"
   - Or find it in your channel URL: `https://youtube.com/channel/YOUR_CHANNEL_ID`

3. **Configure the environment variables:**
   - Copy `.env.example` to `.env`
   - Add your API key and Channel ID to the `.env` file

**Note:** If you don't configure the YouTube API, the YouTube section will show an error message. This won't affect other parts of the portfolio.

## Deployment

You can deploy this project to any static hosting service.