import { computed, ref } from 'vue'
import { useLocalStorage } from './useLocalStorage'

export function useNotes() {
  // Die Notizen werden über useLocalStorage gespeichert und geladen
  const notes = useLocalStorage('quick-notes', [])

  // Enthält den aktuellen Suchbegriff
  const searchTerm = ref('')

  // Fügt eine neue Notiz zur Liste hinzu
  function addNote(note) {
    notes.value.push(note)
  }

  // Entfernt eine Notiz anhand ihrer ID
  function deleteNote(id) {
    notes.value = notes.value.filter(note => note.id !== id)
  }

  // Erstellt automatisch eine gefilterte Liste,
  // wenn sich die Notizen oder der Suchbegriff ändern
  const filteredNotes = computed(() => {
    // Groß-/Kleinschreibung bei der Suche ignorieren
    const search = searchTerm.value.toLowerCase()

    // Wenn nichts gesucht wird, werden alle Notizen angezeigt
    if (!search) {
      return notes.value
    }

    // Suche wird auf Titel, Inhalt und Tags angewendet
    return notes.value.filter(note =>
      note.title.toLowerCase().includes(search) ||
      note.content.toLowerCase().includes(search) ||
      note.tags.some(tag => tag.toLowerCase().includes(search))
    )
  })

  // Diese Werte und Funktionen können von den Komponenten verwendet werden
  return {
    notes,
    searchTerm,
    filteredNotes,
    addNote,
    deleteNote
  }
}