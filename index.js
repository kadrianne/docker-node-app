const app = require('express')()

app.get('/', (request, response) => {
  response.json({ message: 'hi'})
})

app.listen(4000)