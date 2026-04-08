import Assignments from "./15_Assignments.js";
import Panel from "./15_Panel.js";

export default {

    components: { Assignments, Panel},

    template: `
        <div class="grid gap-6">
            <assignments></assignments>

            <panel>  
                    This is my default content.
            </panel>

            <panel>
                <template v-slot:heading>
                    Hello Again
                </template>        
        
                    This is my default content.
            </panel>

            <panel>
                <template v-slot:heading>
                Hi There
                </template>

                this is my default content.

            <template v-slot:footer>
                    click here to learn more.
                </template>  
            </panel>

            <panel theme="light">
                <template v-slot:heading>
                Hi There
                </template>

                this is my light content.

            <template v-slot:footer>
                    click here to learn more.
                </template>  
            </panel>

            <panel theme="dark">
                <template v-slot:heading>
                Hi There
                </template>

                this is my dark content.

            <template v-slot:footer>
                    click here to learn more.
                </template>  
            </panel>

        </div>
        

      
    `
}
   