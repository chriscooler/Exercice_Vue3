import AssignmentList from './07_AssignmentList.js';
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
                    todos: [
                        { name: 'Finish Project', done: false, id: 1, tag: 'math' },
                        { name: 'Read Chapter 4', done: false, id: 2, tag: 'science' },
                        { name: 'Turn in Homework', done: false, id: 3, tag: 'math' },
                    ]
                }
            }, 


            computed: {
            
                    
            filters() {
                return {
                inProgress : this.todos.filter(t => !t.done),
                completed : this.todos.filter(t => t.done),
                }
            }
            },

            methods: {
                addAssignment(name) {
                    if (name) {
                        this.todos.push({
                            name: name,
                            done: false,
                            id: this.todos.length + 1,
                        });
                    }
                }
            },

}