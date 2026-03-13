# Chrysta

Chrysta is a real-time collaborative document editor designed for modern teams, built with Next.js, Tiptap, and Yjs.

## Getting Started

First, install dependencies:
```bash
npm install
```

Then, run the development server:
```bash
npm run dev
```

Remember to also start the WebSocket server for real-time collaboration:
```bash
npm run socket
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Deploying on Vercel

Vercel is the easiest way to deploy a Next.js application. Follow these steps to deploy Chrysta:

1. **Push your code to GitHub, GitLab, or Bitbucket.**
   Make sure all your local changes (including `package.json` updates and the Next.js app) are pushed to your remote repository.

2. **Sign in to Vercel**
   Go to [vercel.com](https://vercel.com) and sign in using your Git provider.

3. **Import the Project**
   - Click on **Add New...** -> **Project**.
   - Select the repository containing Chrysta and click **Import**.

4. **Configure Project Settings**
   - Vercel will automatically detect that it's a Next.js project.
   - Expand the **Build and Output Settings** if necessary (the defaults usually work perfectly: `npm run build`).
   - If your project environment variables are needed, add them in the **Environment Variables** section.
   
5. **WebSocket Hosting (Important)**
   Because Vercel is a serverless environment, it does not support long-running processes like the `y-websocket` server out-of-the-box. 
   - You will need to host your WebSocket server separately. See the **Deploying WebSocket Server on Render** section below.
   - Once your WebSocket server is hosted elsewhere, update the WebSocket URL in your `Editor.tsx` connection to point to your new hosted WebSocket instance (e.g., `wss://your-hosted-ws-server.com`).

6. **Deploy**
   - Click the **Deploy** button. Vercel will build and launch your application.

7. **Visit your live site**
   Once the build completes, Vercel will provide you with a live, secure URL for your application!

## Deploying WebSocket Server on Render

[Render](https://render.com/) is a great free service for hosting the continuous Node.js server required for `y-websocket`.

1. Sign up for Render and click **New+** \> **Web Service**.
2. Connect your Git repository.
3. Configure the following settings for the new service:
   - **Language:** Node
   - **Branch:** `main` (or whatever your primary branch is)
   - **Root Directory:** `chrysta` (or leave blank if it's the root of the repo)
   - **Build Command:** `npm install`
   - **Start Command:** `npm run start:socket`
4. Choose the **Free** instance type and click **Create Web Service**.

Render will provision your server and give you a `.onrender.com` URL. You must change your frontend's connection string in `Editor.tsx` to `wss://your-app.onrender.com`.

### Keeping the Free Tier Server Awake (Cron Job)

Render's free tier spins down your server after 15 minutes of inactivity (Cold Starts), which means your first user connecting will face a 30-50 second delay before the WebSocket connects.

To fix this and keep the server awake 24/7 forever, you can use a free pinging service:

1. Create a free account at [cron-job.org](https://cron-job.org/)
2. Click **Create Cronjob**
3. **URL:** Enter `http://your-app.onrender.com/` (Make sure to use `http` or `https`, not `ws` or `wss`! The `y-websocket` server also responds to normal HTTP pings)
4. **Execution schedule:** Set it to ping every **10 minutes** (e.g. Every 10 minutes selected from the dropdown)
5. Save the job.

With this setup, cron-job.org will ping your server every 10 minutes, completely preventing the Render server from going to sleep.

## Technologies Used
- Next.js (App Router)
- React
- Tailwind CSS
- Tiptap (Rich Text Editor)
- Yjs (CRDT for collaboration)
- y-websocket (WebSocket binding for Yjs)




future scope:
chat should have attachments feature
enable sign in sign up to save the docs
the doc id generated should be small and can be pasted on the url directly
check security, password needed to enter the room or the room creator can allow or deny entry into room.
emojis in chat
chat should restrict offensive words

Hero section update - use gradient text Magic from react bits 
use scroll velocity
give it a modern look
use framer motion for animations
