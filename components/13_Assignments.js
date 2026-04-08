import AssignmentList from './13_AssignmentList.js';
import AssignmentCreate from './09_AssignmentCreate.js';

export default {
    components: {AssignmentList, AssignmentCreate},

    template: `
    <section class="space-y-6">
    <assignment-list :assignment="filters.inProgress" titre="In Progress"></assignment-list> 
    <assignment-list :assignment="filters.completed" titre="Completed"></assignment-list>
    
    <assignment-create @add="addAssignment"></assignment-create>
    </section>
    `,
    data() {
                return {
                    assignments: [],
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
                    })
                    .catch(err => console.error('Fetch failed: ', err));
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