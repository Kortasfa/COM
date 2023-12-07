import { Doc, Slide } from '../../testData/PresentationMakerStructure'

const startSlide: Slide = {
  ID: 1,
  background: 'white',
  objects: [],
}

const doc: Doc = {
  slides: [startSlide],
  name: 'Name of your presentation',
}

export { doc }
