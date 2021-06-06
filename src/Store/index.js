import HomeStore from 'Pages/Home/store'
import SearchStore from 'Pages/Search/store'

const AppStore = {
    homeStore: new HomeStore(),
    searchStore: new SearchStore()
}

export default AppStore