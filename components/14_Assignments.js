import AssignmentList from './14_AssignmentList.js';
import AssignmentCreate from './09_AssignmentCreate.js';

export default {
    components: {AssignmentList, AssignmentCreate},

    template: `
    <section class="flex gap-8">
        <assignment-list :assignment="filters.inProgress" titre="In Progress">
            <assignment-create @add="addAssignment"></assignment-create>
        </assignment-list>

        <div v-show="showCompleted">
            <assignment-list 
                v-if="showCompleted"
                :assignment="filters.completed" 
                titre="Completed" 
                can-Toggle
                @toggle="showCompleted = !showCompleted"
                ></assignment-list>
        </div>
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