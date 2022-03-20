app.component('hola-mundo', {
  setup() {
    const message = ref('Hola Mundo')
    return { message }
  },
  template: `
      <div>
        <h2>Componente Hola Mundo</h2>
        <p>{{ message }}</p>  
      </div>
    `
})

/* 
// Vue 2
Vue.component('hola-mund', {
  data () {
    return {
      message: 'Hola Mundo'
    }
  },
  template: `
    <div>
      <h2>Componente Hola Mundo</h2>
      <p>{{ message }}</p>
    </div>
  `
})
*/