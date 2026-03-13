1.
you will be helping me create a next project called "Chrysta" which would be a real time collaborative text editor with features. The project has to be modular and have different files for pages.
Start with home page in the design given below and use the @beautifulMentionfor logo.

<!DOCTYPE html>

<html lang="en"><head>
<meta charset="utf-8"/>
<meta content="width=device-width, initial-scale=1.0" name="viewport"/>
<title>Chrysta - Collaborative Document Editor</title>
<script src="https://cdn.tailwindcss.com?plugins=forms,container-queries"></script>
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&amp;display=swap" rel="stylesheet"/>
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght@100..700,0..1&amp;display=swap" rel="stylesheet"/>
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap" rel="stylesheet"/>
<script id="tailwind-config">
        tailwind.config = {
            darkMode: "class",
            theme: {
                extend: {
                    colors: {
                        "primary": "#2e5b60",
                        "background-light": "#FAF9F7",
                        "background-dark": "#151c1d",
                    },
                    fontFamily: {
                        "display": ["Inter", "sans-serif"]
                    },
                    borderRadius: {
                        "DEFAULT": "0.5rem",
                        "lg": "1rem",
                        "xl": "1.5rem",
                        "full": "9999px"
                    },
                },
            },
        }
    </script>
<style>
        body {
            font-family: 'Inter', sans-serif;
        }
        .soft-gradient-bg {
            background: radial-gradient(circle at 50% 50%, rgba(46, 91, 96, 0.05) 0%, rgba(250, 249, 247, 0) 50%);
        }
    </style>
</head>
<body class="bg-background-light dark:bg-background-dark text-slate-900 dark:text-slate-100 font-display selection:bg-primary/20">
<div class="relative min-h-screen overflow-x-hidden">
<div class="absolute inset-0 z-0 overflow-hidden pointer-events-none">
<div class="absolute -top-[10%] -left-[10%] w-[40%] h-[40%] rounded-full bg-primary/5 blur-[120px]"></div>
<div class="absolute top-[20%] -right-[5%] w-[30%] h-[30%] rounded-full bg-primary/10 blur-[100px]"></div>
</div>
<div class="relative z-10 layout-container flex flex-col min-h-screen">
<header class="mx-auto w-full max-w-7xl px-6 md:px-10 py-6 flex items-center justify-between">
<div class="flex items-center gap-2.5">
<div class="flex items-center justify-center size-9 bg-primary rounded-lg text-white">
<span class="material-symbols-outlined text-xl">edit_square</span>
</div>
<h2 class="text-xl font-bold tracking-tight text-slate-900 dark:text-slate-50">Chrysta</h2>
</div>
<nav class="hidden md:flex items-center gap-10">
<a class="text-sm font-medium text-slate-600 dark:text-slate-400 hover:text-primary transition-colors" href="#">Features</a>
<a class="text-sm font-medium text-slate-600 dark:text-slate-400 hover:text-primary transition-colors" href="#">Templates</a>
<a class="text-sm font-medium text-slate-600 dark:text-slate-400 hover:text-primary transition-colors" href="#">Pricing</a>
<a class="text-sm font-medium text-slate-600 dark:text-slate-400 hover:text-primary transition-colors" href="#">About</a>
</nav>
<div class="flex items-center gap-4">
<button class="hidden sm:block text-sm font-semibold text-slate-700 dark:text-slate-300 px-4 py-2 hover:bg-primary/5 rounded-lg transition-all">Log in</button>
<button class="bg-primary text-white text-sm font-bold px-5 py-2.5 rounded-lg hover:brightness-110 shadow-sm transition-all active:scale-95">
                        Sign Up
                    </button>
</div>
</header>
<main class="flex-1">
<section class="max-w-5xl mx-auto px-6 pt-20 pb-16 md:pt-32 md:pb-24 text-center">
<div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold mb-6 tracking-wide uppercase">
<span class="relative flex h-2 w-2">
<span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
<span class="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
</span>
                        v2.0 is now live
                    </div>
<h1 class="text-5xl md:text-7xl font-black text-slate-900 dark:text-slate-50 leading-[1.1] tracking-tight mb-6">
                        Chrysta
                    </h1>
<p class="text-lg md:text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto mb-10 leading-relaxed">
                        A real-time collaborative document editor designed for modern teams. Write, brainstorm, and publish in one fluid workspace.
                    </p>
<div class="flex flex-col sm:flex-row items-center justify-center gap-4">
<button class="w-full sm:w-auto min-w-[200px] bg-primary text-white h-14 px-8 rounded-xl font-bold text-lg shadow-lg shadow-primary/20 hover:shadow-xl hover:translate-y-[-2px] transition-all flex items-center justify-center gap-2">
<span class="material-symbols-outlined">add</span>
                            Create Document
                        </button>
<button class="w-full sm:w-auto min-w-[200px] bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-200 h-14 px-8 rounded-xl font-bold text-lg hover:bg-slate-50 transition-all">
                            View Demo
                        </button>
</div>
<div class="mt-20 relative mx-auto max-w-4xl group">
<div class="absolute -inset-1 bg-gradient-to-r from-primary/20 to-primary/5 rounded-2xl blur opacity-30 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
<div class="relative bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 shadow-2xl overflow-hidden aspect-[16/10]">
<img alt="Interface Preview" class="w-full h-full object-cover opacity-90" data-alt="Minimalistic workspace interface with document editor" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDMgRf1p8XIshHzVmfgihDMfcgzSA8ER1bup4AQe3X5JAe07BfvNTsazj8YlLR_Q4eJ08G1YBDznn-kSKnikElP0BD_WXKgm1qMmBhMVBcg9Vewzz23dpbpaGPdM9w18_yQP86l0MSuLDzlKgFSbfqoU3vCz3odci7_mtrI_QrTQ7Es7hBY5GoYljJZLyif0HtYC_2wbROPwm9hFi_mzwmtNNpbEN3tLQ_ZHyhsu5ioVDYMLdhefZdmRVrUdWlLhFrfhdKs0DZL5HjQ"/>
<div class="absolute inset-0 bg-gradient-to-t from-white/20 to-transparent"></div>
</div>
</div>
</section>
<section class="max-w-7xl mx-auto px-6 py-20 border-t border-slate-100 dark:border-slate-800">
<div class="grid grid-cols-1 md:grid-cols-3 gap-12">
<div class="flex flex-col gap-4">
<div class="size-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center">
<span class="material-symbols-outlined text-2xl">bolt</span>
</div>
<h3 class="text-xl font-bold text-slate-900 dark:text-slate-50">Real-time Sync</h3>
<p class="text-slate-600 dark:text-slate-400 leading-relaxed">Experience zero-latency collaboration. Watch your team's thoughts take shape instantly as they type.</p>
</div>
<div class="flex flex-col gap-4">
<div class="size-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center">
<span class="material-symbols-outlined text-2xl">cloud_off</span>
</div>
<h3 class="text-xl font-bold text-slate-900 dark:text-slate-50">Offline Mode</h3>
<p class="text-slate-600 dark:text-slate-400 leading-relaxed">Keep your flow state regardless of connection. Changes sync automatically the moment you're back online.</p>
</div>
<div class="flex flex-col gap-4">
<div class="size-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center">
<span class="material-symbols-outlined text-2xl">markdown</span>
</div>
<h3 class="text-xl font-bold text-slate-900 dark:text-slate-50">Rich Markdown</h3>
<p class="text-slate-600 dark:text-slate-400 leading-relaxed">The power of markdown with the ease of a visual editor. Slash commands make formatting effortless.</p>
</div>
</div>
</section>
<section class="max-w-7xl mx-auto px-6 py-20 bg-primary/5 rounded-3xl mb-24">
<div class="text-center mb-16">
<h2 class="text-3xl md:text-4xl font-bold text-slate-900 dark:text-slate-50 mb-4">Built for modern workflows</h2>
<p class="text-slate-600 dark:text-slate-400">Everything you need to ship great content with your team.</p>
</div>
<div class="grid grid-cols-1 md:grid-cols-2 gap-8">
<div class="bg-white dark:bg-slate-900 p-8 rounded-2xl border border-slate-100 dark:border-slate-800 shadow-sm flex flex-col gap-6">
<div class="h-48 w-full bg-slate-100 dark:bg-slate-800 rounded-xl overflow-hidden">
<img alt="Shared Workspace" class="w-full h-full object-cover" data-alt="People collaborating in a bright modern office space" src="https://lh3.googleusercontent.com/aida-public/AB6AXuD4wSLsacGiJ91Q2ZduZkIEAXYvZHIYfNgwUlfeoKMbZ6ha7wR_QnFfe_2j5J0EYt7Q6QMzJBqL6kwTJuydh04iLdEZ8ZACwXX2XTTANLhWIQGXnqhoP8eJdqOyrWhb6D18F-iR0WxjCH9CyVR0SHknQjn94rdmksIBW18V7ZBFKfOv23fAGNxpd8IvgrxyynUbkRIKBjiwYUE270u3GAB21mMgrFU9uGBkmwJ_u7Y4LMh3HYJ3aQz-Kc1b2KN6e4RBOA2hwk4DsZpr"/>
</div>
<div>
<h4 class="text-lg font-bold text-slate-900 dark:text-slate-50 mb-2">Shared Workspaces</h4>
<p class="text-slate-600 dark:text-slate-400 text-sm">Organize projects, client docs, and internal wikis in dedicated folders with granular permissions.</p>
</div>
</div>
<div class="bg-white dark:bg-slate-900 p-8 rounded-2xl border border-slate-100 dark:border-slate-800 shadow-sm flex flex-col gap-6">
<div class="h-48 w-full bg-slate-100 dark:bg-slate-800 rounded-xl overflow-hidden">
<img alt="Version History" class="w-full h-full object-cover" data-alt="Close up of digital document history interface" src="https://lh3.googleusercontent.com/aida-public/AB6AXuB_W21T19rmvPP2dFRxXeuQazuVz4kKF5xr2_wjUkVFceUMtgozx8-wYpe-jHgQk6JtO3b6S5-BMESisbYOSLMz2Kd94UfPhRSDV85Bvv_X4s0YFf8v-hZBscjAhSG50ZkvNhYjNWJlMm45HjbPORnVM-agcGCuYJalIW44iRW5eexGgOb4GXVYZEIshR9IZcsISTpCpldMFGvV0c5sw7bWjyltvz6TBgYP9Kg-XkpYOt2FPUd-a2IFl4rwxmPTFy9ErrQloGNF9sZx"/>
</div>
<div>
<h4 class="text-lg font-bold text-slate-900 dark:text-slate-50 mb-2">Version History</h4>
<p class="text-slate-600 dark:text-slate-400 text-sm">Review every edit ever made. Restore previous versions with a single click and never lose work again.</p>
</div>
</div>
</div>
</section>
</main>
<footer class="border-t border-slate-200 dark:border-slate-800 py-12 px-6">
<div class="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
<div class="flex items-center gap-2.5 opacity-80">
<div class="size-6 bg-primary rounded text-white flex items-center justify-center">
<span class="material-symbols-outlined text-sm">edit_square</span>
</div>
<h2 class="text-sm font-bold tracking-tight text-slate-900 dark:text-slate-50">Chrysta</h2>
</div>
<div class="flex gap-8 text-sm text-slate-500 dark:text-slate-500">
<a class="hover:text-primary transition-colors" href="#">Privacy</a>
<a class="hover:text-primary transition-colors" href="#">Terms</a>
<a class="hover:text-primary transition-colors" href="#">Twitter</a>
<a class="hover:text-primary transition-colors" href="#">Contact</a>
</div>
<p class="text-sm text-slate-400">© 2026 Chrysta Editor Inc.</p>
</div>
</footer>
</div>
</div>
</body></html>

2.
Goal: Build a minimal MVP with rich-text editing, real-time collaboration, and a chat sidebar.

Requirements:

1. Pages & Routing

/ → Homepage with "Create Document" button

/doc/[id] → Collaborative editor page with a unique document room

Clicking "Create Document" generates a UUID and navigates to /doc/:id

2. Collaborative Editor

Use Tiptap as the rich-text editor

Implement:

Typography: font family, font size, text color

Text styling: bold, italic, underline

Structure: title, subtitle, normal text

Lists: bullet points

Alignment: left, center, right

Integrate Yjs + y-websocket for real-time collaboration

Sync document state live for multiple users in the same room

Show cursors or user presence optionally

3. Chat Sidebar

Sidebar on the right side of the editor

Users in the same room can send messages

Messages are synced in real time

Show scrollable chat history during the session

Include an input box with “Enter to send”

4. Styling

Use Tailwind CSS

Elegant, minimal layout similar to Notion or Craft

Light background, soft accent colors (#2F5D62, #FAF9F7)

Toolbar at the top with formatting buttons

Editor in the center, chat sidebar on the right

5. Backend / WebSocket

Implement y-websocket server using Node.js or Express

Connect the Tiptap + Yjs client to the WebSocket server

Ensure live updates are reflected for all users

6. Extra

Generate a copy link button in the toolbar to share the document

Show online users in the room (optional)

No authentication required, anonymous users

Output Requested

React / Next.js component code for:

Editor page (/doc/[id])

Toolbar with formatting options

Chat sidebar and input

Integration with Yjs WebSocket

Minimal backend code for y-websocket server

Tailwind styling for layout

Generate production-ready Next.js + React + Tailwind + Tiptap + Yjs code step by step. Include comments explaining key parts. Keep it modular and easy to extend.



3. 
make sure the chat feature works too and make the editor page responsive, it looks like this currrently

4.
there should also be a feedback when the link is copied after clicking the share button