export default
{
    template: `
    <div class="flex gap-2 flex-wrap">
                <button
                    @click="$emit('update:currentTag', tag)"
                    v-for="tag in tags" 
                    class="border text-xs px-2 rounded"
                    :class="{
                        'bg-blue-500 text-white':tag === currentTag,
                        }"
                    >{{tag}}
                </button>
            </div>
    `,

    props: {
        initialTags: Array,
        currentTag: String,
    },
    computed: {
        tags() {
            return ['all', ...new Set(this.initialTags)];
        }
    }
}
