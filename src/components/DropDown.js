
const DropDown = ({ handleSelect }) => {
    return (
        <select onChange={handleSelect} name="animals" id="animals">
            <option value="All">All Animals</option>
            <option value="Dogs">Only Dogs</option>
            <option value="Cats">Only Cats</option>
        </select>
    )
}

export default DropDown