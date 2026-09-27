Prompt: „Wie kann ich in Vue eine eigene Input-Komponente mit v-model erstellen?“
Übernommen: modelValue als Prop und update:modelValue als Event in SearchBar.vue.

Prompt: „Wie kann ich in Vue eine Notiz über eine Form erstellen und an die Parent-Komponente weitergeben?“
Übernommen: defineEmits und das add-note-Event in NoteForm.vue.

Prompt: „Wie kann ich Notizen mit localStorage speichern und nach einem Reload wieder laden?“
Übernommen: useLocalStorage mit localStorage.getItem(), localStorage.setItem() und watch().

Prompt: „Wie kann ich eine Liste in Vue nach Titel, Text und Tags filtern?“
Übernommen: computed() und die Filterung mit includes() bzw. some().