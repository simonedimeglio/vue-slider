Vue.config.devtools = true;

new Vue(
    {
        el: '#app',
        
        data: { 
            photos: [ // picture list
                'img/img1.jpg',
                'img/img2.jpg',
                'img/img3.jpg',
                'img/img4.jpg',
            ],
            photoIndex: 0,
        },

        // VueJs pages now created
        created() {
            // i decide to set my interval to 5 seconds
            setInterval(() => {
                this.next();
            }, 5000)
        },

        methods: {
            next: function(){  // for netx photos
               // if already on the last picture, start from the first
                if(this.photoIndex === (this.photos.length - 1)) {
                    this.photoIndex = 0;
                } else { // else, go to next photo
                    this.photoIndex++;
                }
                
            },
            prev: function() { // go back to the previous photo
                // if already on the first, go to last
                if(this.photoIndex === 0) {
                    this.photoIndex = this.photos.length - 1;
                } else { // else, go to the previous photo
                    this.photoIndex--;
                }
            },
            moveTo: function(index) { // for change photos on click (dots)
                this.photoIndex = index;
            },

            // different class name
            // if index = this.pictureINdex
            currentPictureDot: function(index) {
                if(index === this.photoIndex) {
                    return 'now-showing'
                } else {
                    return '';
                }
            }
        }
    }
);
