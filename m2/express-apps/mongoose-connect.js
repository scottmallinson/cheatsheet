// npm install mongoose

const mongoose = require('mongoose');
const database = 'database-name'

// --

mongoose.connect(`mongodb://localhost/${database}`, 
  {
    keepAlive: true,
    useNewUrlParser: true,
    reconnectTries: Number.MAX_VALUE
  })
  .then(()=> console.log('Connected to the database'))
  .catch(() => console.log('Unable to establish database connection'))

// OR when using provess.env to get ready for deploy

mongoose.connect(process.env.MONGODB_URI, {
  keepAlive: true,
  useNewUrlParser: true,
  reconnectTries: Number.MAX_VALUE
});
