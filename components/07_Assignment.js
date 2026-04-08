export default {
    template: `
        <li>
                <label class="flex justify-between items-center space-x-2">
                    {{ todo.name }}
                    <input type="checkbox" v-model="todo.done" class="ml-6">  
                </label>
                </li>
    `,
    props: { 
        todo : Object,
}
}