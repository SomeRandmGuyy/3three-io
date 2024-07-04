const middleware = {}

middleware['loading'] = require('../middleware/loading.js')
middleware['loading'] = middleware['loading'].default || middleware['loading']

export default middleware
