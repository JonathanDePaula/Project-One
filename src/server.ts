import express from 'express';

const app = express();

app.get('/', (request, reponse) => {
  return reponse.json({message: 'Hello Jonathan'});
})

app.listen(3333, () => {
  console.log('Server Started on port 3333')
});
