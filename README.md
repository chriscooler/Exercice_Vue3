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

## Exercise 04 — Your First Component (`04_index.html`)

**Key concepts:**

- Components registered under the `components` key in the app options object
- Custom elements (`<app-button>`) map to registered component names (kebab-case)
- This exercise sets up the shell — the component registration is intentionally left empty as a starting point

---

## Exercise 05 — One Component Per File (`05_index.html` + [components/AppButton.js](components/AppButton.js))

**Key concepts:**

- Exporting a component as a plain JS object with `export default { ... }` (no build step required)
- Importing a component via ES module `import` in a `<script type="module">` block
- `<slot />` — renders whatever content the parent passes between the component tags (like `<app-button>PARIS</app-button>`)
- Component `data()` for local reactive state (e.g. `processing: true` to drive a disabled state)
- Separating components into their own files under a `components/` directory for organisation

---

## Exercise 06 — Component Props & Dynamic Classes (`06_index.html` + [components/AppButton.js](components/AppButton.js))

**Key concepts:**

- `props` — declaring inputs a component accepts from the parent (e.g. `type`, `processing`)
- `:class` with an object — keys are class strings, values are conditions; only truthy entries are applied
- Outside of `:class` binding you can pass a plain object `{ 'class-name': condition }` directly
- `is-processing` class conditionally adds a CSS spinner via `::before` pseudo-element — only applied when `processing === true`
- `position: relative` on the button is required so the `position: absolute` spinner is contained within it
- `:disabled="processing"` — disables the button natively while processing

---

## Exercise 07 — Multi-Component Architecture (`07_index.html` + `07_App.js` + `07_Assignments.js` + `07_AssignmentList.js` + `07_Assignment.js`)

**Key concepts:**

- Component tree: `App → Assignments → AssignmentList → Assignment` (leaf)
- `props` — data flows down from parent to child (`:assignment`, `:titre`, `:todo`)
- `$emit` pattern previewed — events flow up (used more in ep 09)
- `computed` used in two places: `filters()` in `Assignments` (split inProgress/completed), `filteredAssignments()` in `AssignmentList` (filter by tag)
- `v-show` on `<section>` — hides list when empty (element stays in DOM)
- `v-for` + `:key` — rendering the filtered list
- `v-model` on checkbox — two-way binding to `todo.done` boolean

---

## Exercise 08 — Styling Without Changing Logic (`08_index.html`)

**Key concepts:**

- Same `07_App.js` import — logic is unchanged
- Shows that component logic and visual style are decoupled
- Reinforces that you can restyle an app without touching JS

---

## Exercise 09 — Form Handling & Custom Events (`components/09_AssignmentCreate.js`)

**Key concepts:**

- `@submit.prevent` — event modifier that calls `preventDefault()` so the form doesn't reload the page
- `v-model="newAssignment"` — binds the input to local data
- `this.$emit('add', this.newAssignment)` — sends a custom event up to the parent
- Parent (`07_Assignments.js`) listens with `@add="addAssignment"` and pushes to todos
- After emitting, `newAssignment` is reset to `''` — keeps the form clean
- Demonstrates the props-down / events-up pattern that keeps child components stateless and reusable

---

## Exercise 11 — Tag Filtering with Deduplication (`components/11_AssignmentTags.js`)

**Key concepts:**

- `props`: `initialTags` (Array from parent) + `currentTag` (String — which tag is active)
- `computed tags()` — uses `new Set(this.initialTags)` to deduplicate tag values, then spreads into `['all', ...tags]`
- `v-for` over `tags` computed array to render each button
- `@click="$emit('change', tag)"` — emits the selected tag up to `AssignmentList`
- `:class` object binding — `'bg-blue-500 text-white': tag === currentTag` highlights the active button
- Parent (`AssignmentList`) stores `currentTag` in `data()` and filters with computed `filteredAssignments()`
- Shows how a presentational component (Tags) can drive state in its parent purely through events

---

## Exercise 12 — Understanding v-model Under the Hood (`12_index.html`)

**Key concepts:**

- `v-model` on a native input is syntactic sugar for `:value="name" @input="name = $event.target.value"`
- `$event` — the native browser event object; `.target.value` is the current input value
- **`v-model` on a custom component** expands to `:modelValue="x" @update:modelValue="x = $event"` — child must accept a `modelValue` prop and emit `update:modelValue`
- **Named v-model** — you can use a custom name: `v-model:currentTag="currentTag"` expands to `:currentTag="currentTag" @update:currentTag="currentTag = $event"`; child then uses `props: { currentTag: String }` + `$emit('update:currentTag', value)`
- Key takeaway: `v-model` = bind a value in + listen for an event out — works the same for native inputs and custom components

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
