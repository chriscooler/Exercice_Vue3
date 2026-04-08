import Assignment from './07_Assignment.js';
import AssignmentTags from './11_AssignmentTags.js';
export default {

    components: { Assignment, AssignmentTags },

    template: `
        <section v-show="assignment.length">
            <h2 class="font-bold mb-2">
            {{titre}}
            <spin> ({{assignment.length}}) </spin>
            </h2>

            <assignment-tags
                v-model:currentTag="currentTag"
                :initial-tags="assignment.map(a => a.tag)"
                @change="currentTag = $event">
            
            </assignment-tags>

            <ul class="border border-gray-300 rounded-lg p-4 space-y-2 divide-y divide-gray-300 mt-6">
            <assignment 
                    v-for="todo in filteredAssignments"
                    :key="todo.id"
                    :todo="todo"
                    ></assignment>
            </ul>

        </section>
        `,

        props: {
            assignment : Array,
            titre : String,  
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