
const compareSearchValue = (title, searchValue) => {
    // console.log('title: ', title, 'Search value: ', searchValue);
    if (title.toLowerCase().includes(searchValue.toLowerCase())) {
        return true;}
    else {
            return false;
        }
}

export default compareSearchValue;