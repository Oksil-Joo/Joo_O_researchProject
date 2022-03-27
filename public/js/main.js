import { getData } from "./component/TheDataMiner.js";
import TheThumbnailComponent from "./component/TheThumbNail.js";
import TheLightboxComponent from "./component/TheLightboxComponent.js";

(() => {

    const myVue = new Vue({
        created: function() {
            
            getData(null, (data) => this.researchData = data);
        },

        data: {
            researchData: [],
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
