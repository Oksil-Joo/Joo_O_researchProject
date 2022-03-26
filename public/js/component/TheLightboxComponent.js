import TheAudioComponent from "./TheAudioComponent.js";
import TheVideoComponent from "./TheideoComponent.js";

export default {
    name: "TheLightboxComponent",

    props: ["piece"],

    computed: {
        activeComponent: function() {
            return `${this.piece.mediaType} + "Component"`;
        }
    },

    template:
    `<section class="lightboxWrapper">
        <i @click="closeMe" class="fa-solid fa-circle-xmark"></i>
       <h1>Type of Work: {{piece.mediaType}}<h1>
        <component v-if="piece.mediaType" :is="activeComponent"></component>
        <h1> {{piece.name}} </h1>
        <h2> {{piece.des}}  </h2>
        <img :src='"images/" + piece.biopic' :alt="piece.name">
        
    </section>
    `,

    methods: {
        closeMe() {
            // document.querySelector(".lightbox").classList.remove('visible');
            this.$emit("closelb");
        }
    },
    components: {
        AudioComponent: TheAudioComponent,
        VideoComponent: TheVideoComponent
    }
    
}