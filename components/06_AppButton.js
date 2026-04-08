export default {
    template : `
        <button
            :class="{
                'relative text-white font-bold py-2 px-4 rounded disabled:cursor-not-allowed': true,
                'bg-purple-400 hover:bg-pink-200 text-white font-bold py-2 px-4 rounded': type === 'primary',
                'bg-yellow-500 hover:bg-pink-200 text-white font-bold py-2 px-4 rounded': type === 'secondary',
                'bg-green-800 hover:bg-pink-200 text-white font-bold py-2 px-4 rounded': type === 'success',
                'bg-red-900 hover:bg-pink-200 text-white font-bold py-2 px-4 rounded': type === 'danger',
                'is-processing' : processing,
            }"
            :disabled="processing"
            >
            <slot />
        </button>
        `,

        props : {
            type : {
                type : String,
                default : 'primary',
            },

            processing : {
                type : Boolean,
                default : false,
            },
        },

}