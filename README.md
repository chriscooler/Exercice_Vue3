# Vue3 Learning Exercises

## Exercise 01 — Absolute Basics (`01_index.html`)

**Key concepts:**
- `Vue.createApp()` + `.mount('#app')` — bootstrapping a Vue app
- `data()` — declaring reactive state
- `v-model` — two-way binding between an input and a data property
- `{{ }}` mustache interpolation — rendering reactive data in the template
- `mounted()` lifecycle hook — running code after the component is mounted (used here with `setTimeout` to update state after 2 seconds)

---

## Exercise 02 — Attribute Binding & Event Handling (`02_index.html`)

**Key concepts:**
- `:class` (shorthand for `v-bind:class`) — dynamically binding a CSS class using a ternary expression
- `@click` is shorthand for `v-on:click` — `v-on` is the directive, `click` is the event name; you can listen to any DOM event this way (`@input`, `@submit`, etc.)
- `methods` must be nested inside the options object passed to `createApp({})` — they are sibling keys to `data` and `computed`, not standalone functions
- Toggling state (`active: false` flipped by `toggle()`) to switch styles reactively

---

## Exercise 03 — Lists, Conditionals & Computed Properties (`03_index.html`)

**Key concepts:**
- `v-for` — rendering a list of items from an array; always pair with `:key`
- `v-show` — conditionally shows/hides an element by toggling `display: none`; the element stays in the DOM
- `v-if` — conditionally renders an element; removes it from the DOM entirely when false (use `v-if` when the condition rarely changes, `v-show` when it toggles frequently)
- `computed` — derived state that auto-updates when its dependencies change (used to split todos into `inProgress` and `completed` lists)
- `v-model` on a checkbox — two-way binding to a boolean property on each list item
- Tailwind CSS loaded via CDN for utility-class styling

---

## Vue 3 Quick Reference

| Concept | Syntax |
|---|---|
| Interpolation | `{{ value }}` |
| Attribute binding | `:attr="value"` |
| Event listener | `@event="handler"` |
| Two-way binding | `v-model="value"` |
| Conditional render | `v-if` / `v-else` / `v-show` |
| List render | `v-for="item in list" :key="item.id"` |
| Reactive state (Options) | `data() { return { ... } }` |
| Reactive state (Composition) | `ref(value)` |
| Derived state | `computed: { ... }` / `computed(() => ...)` |
| Lifecycle | `mounted()`, `created()`, etc. |
| Methods | `methods: { ... }` |
