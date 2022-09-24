<script>
import configureStore from "../store/configureStore";
import {bugAdded, bugRemoved} from "../store/bugs"

const store = configureStore()
const unsubscribe = store.subscribe(()=>{
    console.log("Store changed!",store.getState())
})

store.dispatch(bugAdded({description:"Bug 1"}))
store.dispatch(bugAdded({description:"Bug 2"}))
store.dispatch(bugRemoved({id:1}))


</script>