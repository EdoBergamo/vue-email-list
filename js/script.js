const { createApp } = Vue

createApp({
    data() {
        return {
            emails: [],
            loading: true
        }
    },
    created() {
        this.generateEmail();
    },
    methods: {
        generateEmail() {
            axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
            .then(response => {
                this.emails.push(response.data.response)

                if (this.emails.length < 10) {
                    this.generateEmail()
                } else {
                    this.loading = false;
                }
            })

            .catch(error => console.error(error))
        }
    }
}).mount('#app')