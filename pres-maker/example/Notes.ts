import { type } from 'os'

type Note = {
  title: string
  text: string
  background: string
  isPinned: boolean
  isArchived: boolean
}

type NotesModel = {
  notes: Array<Note>
  viewMode: 'grid' | 'list'
}

export type { Note, NotesModel }
