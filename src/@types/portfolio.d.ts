
type urlList = {
  url: string,
  name: string
}

type imageList = {
  src: string,
  alt: string
}

export interface portfolioItemData {
  id: number,
  title: string,
  gitRepo: Array<urlList>,
  liveSite: string,
  description: string,
  features: Array<string>,
  projectDate: string,
  techStack: Array<string>,
  images: Array<imageList>
}
