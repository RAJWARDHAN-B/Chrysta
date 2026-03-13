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
   - You will need to host your WebSocket server separately (e.g., on Render, Railway, or Heroku, or via a service like Hocuspocus/Liveblocks).
   - Once your WebSocket server is hosted elsewhere, update the WebSocket URL in your `Editor.tsx` connection to point to your new hosted WebSocket instance (e.g., `wss://your-hosted-ws-server.com`).

6. **Deploy**
   - Click the **Deploy** button. Vercel will build and launch your application.

7. **Visit your live site**
   Once the build completes, Vercel will provide you with a live, secure URL for your application!

## Technologies Used
- Next.js (App Router)
- React
- Tailwind CSS
- Tiptap (Rich Text Editor)
- Yjs (CRDT for collaboration)
- y-websocket (WebSocket binding for Yjs)
