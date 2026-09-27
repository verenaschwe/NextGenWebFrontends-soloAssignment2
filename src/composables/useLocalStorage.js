import { ref, watch } from 'vue'

export function useLocalStorage(key, initialValue) {
  // Prüfen, ob bereits ein gespeicherter Wert im localStorage vorhanden ist
  const storedValue = localStorage.getItem(key)

  // Wenn ein gespeicherter Wert vorhanden ist, wird er aus JSON zurückgewandelt.
  // Ansonsten wird der übergebene Startwert verwendet.
  const data = ref(
    storedValue ? JSON.parse(storedValue) : initialValue
  )

  // Beobachtet Änderungen an den Daten und speichert sie automatisch.
  // deep: true sorgt dafür, dass auch Änderungen innerhalb eines Arrays
  // oder Objekts erkannt werden.
  watch(
    data,
    (newValue) => {
      localStorage.setItem(key, JSON.stringify(newValue))
    },
    { deep: true }
  )

  // Die reaktiven Daten werden an useNotes zurückgegeben
  return data
}