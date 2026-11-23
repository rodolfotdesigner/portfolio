import vetexCover from '../assets/Images_Projects/vetex.png'
import buyMoreCover from '../assets/Images_Projects/BuyMore.png'
import pykoCover from '../assets/Images_Projects/Pyko.png'
import zestoCover from '../assets/Images_Projects/Zesto.png'

export type Project = {
  id: string
  slug: string
  name: string
  coverImage: string
  coverAltKey: string
}

export const projects: readonly Project[] = [
  {
    id: 'project-01',
    slug: 'vetex',
    name: 'Vetex',
    coverImage: vetexCover,
    coverAltKey: 'projects.coverAlt.vetex',
  },
  {
    id: 'project-02',
    slug: 'buymore',
    name: 'BuyMore',
    coverImage: buyMoreCover,
    coverAltKey: 'projects.coverAlt.buymore',
  },
  {
    id: 'project-03',
    slug: 'pyko',
    name: 'Pyko',
    coverImage: pykoCover,
    coverAltKey: 'projects.coverAlt.pyko',
  },
  {
    id: 'project-04',
    slug: 'zesto',
    name: 'Zesto',
    coverImage: zestoCover,
    coverAltKey: 'projects.coverAlt.zesto',
  },
]
