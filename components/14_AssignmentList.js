
import Assignment from './07_Assignment.js';
import AssignmentTags from './11_AssignmentTags.js';

export default {

    components: { Assignment, AssignmentTags },

    template: `
            <section v-show="assignment.length" class="w-60">
            <div class="flex justify-between item-start">
                <h2 class="font-bold mb-2">
                    {{titre}}
                    <span> ({{assignment.length}}) </span>
                </h2>

                <button v-show="canToggle" @click="emit('toggle')">&times;</button>
            </div>
                <assignment-tags
                    v-model:currentTag="currentTag"
                    :initial-tags="assignment.map(a => a.tag)"
                >
                </assignment-tags>

                <ul class="border border-gray-300 rounded-lg p-4 space-y-2 divide-y divide-gray-300 mt-6">
                <assignment
                        v-for="todo in filteredAssignments"
                        :key="todo.id"
                        :todo="todo"
                        ></assignment>
                </ul>

                <slot></slot>
            </section>
        `,

        props: {
            assignment : Array,
            titre : String, 
            canToggle: { type: Boolean, default: false}
        },

        data () {
            return {
                currentTag: 'all',
            }
        },

        computed: {
            filteredAssignments() {
                if (this.currentTag === 'all') {
                    return this.assignment;
                }
                return this.assignment.filter(a => a.tag === this.currentTag);
            },
            
        }

    }