const app = new Vue ({
    el: '#app',
    data:{
        emails: []
    },
    methods:{
        getEmail(){
            axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
        .then(response => {
            //console.log(this, response.data);
            if (!this.emails.includes(response.data.response)){
                this.emails.push(response.data.response)
            } else {
                return
            }
            //console.log(this.emails);
        })
        }
    },
    mounted(){

        for (let i=this.emails.length; i < 10; i++){
            this.getEmail()
        }

        
    }   
})