import AssignmentList from './15_AssignmentList.js';
import AssignmentCreate from './09_AssignmentCreate.js';

export default {
    components: {AssignmentList, AssignmentCreate},

    template: `
    <section class="flex gap-8">
        <assignment-list :assignment="filters.inProgress" titre="In Progress">
            <assignment-create @add="addAssignment"></assignment-create>
        </assignment-list>

        <assignment-list
            v-show="showCompleted"
            :assignment="filters.completed"
            titre="Completed"
            canToggle
            @toggle="showCompleted = false"
        ></assignment-list>

        <button
            v-show="!showCompleted"
            @click="showCompleted = true"
            class="text-sm border border-gray-300 rounded px-3 py-1 self-start">
            Show Completed
        </button>
    </section>
    `,
    data() {
                return {
                    assignments: [],
                    showCompleted : false
                }
            }, 


            computed: {
            
                    
            filters() {
                return {
                        inProgress : this.assignments.filter(t => !t.done),
                        completed : this.assignments.filter(t => t.done),
                    };
                }
            },
            created() {
                fetch('http://localhost:3002/assignments')
                    .then(response => response.json())
                    .then(assignments=> {
                        console.log(assignments)
                        this.assignments = assignments;
                    });
            },

            methods: {
                addAssignment(name) {
                    if (name) {
                        this.assignments.push({
                            name: name,
                            done: false,
                            id: this.assignments.length + 1,
                        });
                    }
                }
            },

}