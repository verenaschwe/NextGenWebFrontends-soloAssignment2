import { computed, ref } from 'vue'
import { useLocalStorage } from './useLocalStorage'

export function useNotes() {
  const notes = useLocalStorage('quick-notes', [])

  const searchTerm = ref('')

  function addNote(note) {
    notes.value.push(note)
  }

  function deleteNote(id) {
    notes.value = notes.value.filter(note => note.id !== id)
  }

  const filteredNotes = computed(() => {
    const search = searchTerm.value.toLowerCase()

    if (!search) {
      return notes.value
    }

    return notes.value.filter(note =>
      note.title.toLowerCase().includes(search) ||
      note.content.toLowerCase().includes(search) ||
      note.tags.some(tag => tag.toLowerCase().includes(search))
    )
  })

  return {
    notes,
    searchTerm,
    filteredNotes,
    addNote,
    deleteNote
  }
}