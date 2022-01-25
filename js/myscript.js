// Attraverso l’apposita API di Boolean
// https://flynn.boolean.careers/exercises/api/random/mail
// generare 10 indirizzi email e stamparli in pagina all’interno di una lista.
// Bonus
// Far comparire gli indirizzi email solamente quando sono stati tutti generati.



let app = new Vue ({
    el: "#miapp",
    data: {
        email: [],
    },
    methods:{
        ciclo: function(){
            axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
            .then((risposta) =>  {
                this.email.push(risposta.data.response)
            })
            .catch(function (error) {
            console.log(error);
            });
        },
        creaMail: function(){
            for (let i = 0; i < 10; i++) {
                this.ciclo()      
            }
            console.log(this.email);
        }
    }
})