
const compareSearchValue = (title, searchValue) => {
    if (title.toLowerCase().includes(searchValue.toLowerCase())) {
        return true;}
    else {
            return false;
        }
}

export default compareSearchValue;