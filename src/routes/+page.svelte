<script>
import configureStore from "../store/configureStore";
import {bugAdded, bugResolved, getUnresolvedBugs,getBugsByUser, bugAssignedToUser} from "../store/bugs"
import {userAdded} from "../store/users"

const store = configureStore()
const unsubscribe = store.subscribe(()=>{
    console.log("Store changed!",store.getState())
})

store.dispatch(userAdded({name:"User 1"}))
store.dispatch(userAdded({name:"User 2"}))
store.dispatch(bugAdded({description:"Bug 1"}))
store.dispatch(bugAdded({description:"Bug 2"}))

store.dispatch(bugAssignedToUser({bugId:1, userId:1}))
store.dispatch(bugResolved({id:1}))
const UnresolvedBugs=getUnresolvedBugs(store.getState())
const AssignedBugs=getBugsByUser(1)(store.getState())

console.log(UnresolvedBugs)
console.log(AssignedBugs)
</script>