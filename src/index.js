// import `.scss` files
import './scss/bootstrap.scss'

// import UserList class
// which will provide API of our plugin
import {UserList as defaultExport} from './lib/user-list'

// export default UserList class
// I used `defaultExport` to state that variable name doesn't matter

export default defaultExport
