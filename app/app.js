
import { renderPosts , renderSearchedPosts , renderByCategoryPosts } from "./asyncPosts.js";

renderPosts();

const $searchPostsField = document.getElementById('search-posts-field');
const $categoryPicker = document.getElementById('category-picker');

$searchPostsField.addEventListener('keyup', function (event) {
    // $searchPostsField.value
    let inputValue = event.target.value.trim();

    if(inputValue.length > 0) {
        renderSearchedPosts(inputValue);
    }
    else {
        renderPosts();
    }
});

$categoryPicker.addEventListener('change', function(event) {
    let category = event.target.value;

    if(category != '') {
        renderByCategoryPosts(category);
    } else {
        renderPosts();
    }

});