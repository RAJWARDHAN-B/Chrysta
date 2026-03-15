import { MetadataRoute } from 'next'
 
export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Chrysta Collaborative Editor',
    short_name: 'Chrysta',
    description: 'A real-time collaborative document editor for modern teams.',
    start_url: '/',
    display: 'standalone',
    background_color: '#ffffff',
    theme_color: '#6366f1',
    icons: [
      {
        src: '/chrystalogobg.png',
        sizes: 'any',
        type: 'image/png',
      },
    ],
  }
}
