const { createApp }  =  Vue;

createApp({
    data(){
        return{
           ArrayEmail : [],
        }
    },
    mounted(){
        for(let i=1; i<=10;i++){
            axios.get('https://flynn.boolean.careers/exercises/api/random/mail ').then((response)=>{
                this.ArrayEmail.push(response.data.response);
            })
        }
    }
}).mount('#app');