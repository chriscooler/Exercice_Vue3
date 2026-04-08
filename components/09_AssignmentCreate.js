export default {
    template: `
    <form @submit.prevent="addAssignment" class="w-full">
        <div class="border border-gray-300 text-black flex">
            <input v-model="newAssignment" name="newAssignment" placeholder=" New Assignment" class="py-2 flex-1 min-w-0">
            <button type="submit" class="bg-white text-black border-l border-gray-300 px-4 py-2">Add</button>
        </div>
    </form>
    `,
    data() {
        return {
            newAssignment: ''
        }
    },
    methods: {
        addAssignment() {
            this.$emit('add', this.newAssignment);
            this.newAssignment = '';
        }   
    }
}
