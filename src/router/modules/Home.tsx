import About from '@/pages/about/About'
import Snake from '@/pages/snake/Snake'

export default [
  {
    path: 'snake',
    element: <Snake />,
    meta: {
      label: 'Game'
    }
  },
  {
    path: 'about',
    element: <About />,
    meta: {
      label: 'About'
    }
  },
]