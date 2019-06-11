// Global app controller

import Search from "./models/Search";
import * as searchView from "./views/searchView";
import { elements } from "./views/base";

/** Globa state of the app
* - search object
* - current recipe object
* - shopping list object
* - liked recipes
*/

const state = {};

const constrolSearch = async () => {
    // 1) get the query from the view
    const query = searchView.getInput();

    if (query) {
        // 2) New search object and add to query
        state.search = new Search(query);
        // 3) Prepare UI for results
        searchView.clearInput();
        searchView.clearResults();

        // 4) Search for recipe
        await state.search.getResults();

        // 5) Render results on the UI
        searchView.renderResults(state.search.result);
    }
}

elements.searchForm.addEventListener('submit', e => {
    e.preventDefault();
    constrolSearch();
});
