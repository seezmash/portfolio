import fancynotebookImage from '../assets/img/projects/fancy-notebook.png'
import supercarblogImage from '../assets/img/projects/supercar-blog.png'

let listOfItems = [
  {
    title: 'Fancy Notebook',
    image: fancynotebookImage,
    overview:
      'A simple note manager hosted on Firebase that interacts with a Firestore database. Built with Next.js',
    gitHubUrl: 'https://github.com/seezmash/fancy-notebook',
    gitHubUrlShortened: 'github.com/seezmash/fancy-notebook',
    externalUrl: 'https://fancy-notebook.web.app',
    projectTags: ['React', 'Firebase', 'TailwindCSS']
  },
  {
    title: 'Supercar Blog',
    image: supercarblogImage,
    overview:
      'A motorsport website styled with TailwindCSS and built with Next.js',
    gitHubUrl: 'https://github.com/seezmash/supercar-blog',
    gitHubUrlShortened: 'github.com/seezmash/supercar-blog',
    externalUrl: 'https://supercar-blog.web.app',
    projectTags: ['Next.js', 'TailwindCSS']
  }
]

export default listOfItems
