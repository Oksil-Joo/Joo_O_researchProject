import { getData } from "./components/TheDataMiner.js";
import TheThumbnailComponent from "./components/TheThumbNail.js";
import TheLightboxComponent from "./components/TheLightboxComponent.js";

(() => {

    const myVue = new Vue({
        created: function() {
            
            getData(null, (data) => this.researchData = data);
        },

        data: {
            newProfData: [],
            message: "hello from Vue",
            isVisible: false,
            currentResearchItem: {}
        },

        methods: {
            popLightBox(item) {
                this.currentResearchItem = item;
                this.isVisible = true;
            },

            closeLightBox() {
                this.isVisible = false;
            }
        },

        components: {
            thumb: TheThumbnailComponent,
            lightbox: TheLightboxComponent
        }
    }).$mount("#app"); 
    
})();
