export interface CharacterData {
  name: string
  description: string
  image: string
  backgroundClass: string
  textClass: string
  character: string
  chineseCharacters: {
    top: string
    bottom: string
  }
  issues: {
    name: string
    icon: string
  }[]
}
