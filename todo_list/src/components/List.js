import { addItem, deleteItem, editItem } from "../services/actions/action"
import { useDispatch, useSelector } from "react-redux"
import { useState } from "react"
function List() {
    const dispatch = useDispatch()
    const [state, setState] = useState('')
    const [id, setId] = useState();
    const [isEdited, setIsEdited] = useState(false)
    function getValue(e) {
        let value = e.target.value;
        setState(value)
    }
    const addItems = () => {
        if (state != "") {
            dispatch(addItem(state));
            setState("")
        } else {
            alert("enter something in input field")
        }
    }
    const deleteItems = (id) => {
        dispatch(deleteItem(id))
        alert("item deleted successfully")
    }
    function editData(index, itm) {
        setId(index);
        setState(itm)
        setIsEdited(true)
    }
    const editItems = () => {
        if (state != "") {
            dispatch(editItem(id, state))
            setIsEdited(false)
            setState("")
        } else {
            alert("enter something in input field")
        }
    }
    function edit_addItm() {
        if (isEdited) {
            editItems()
        } else {
            addItems()
        }
    }
    const list = useSelector(state => state.listItems.list)
    return (
        <>
            <div className="list">
                <div className="getValue">
                    <input type="text" onChange={getValue} value={state} />
                    <i className="fa fa-plus-circle" onClick={edit_addItm} aria-hidden="true" title="Click to add Item"></i>
                </div>
                <div className="items">
                    {
                        list.map((itm, index) => {
                            return (
                                <div className="item" key={index}>
                                    <div className="text">
                                        {itm}
                                    </div>
                                    <div className="icons">
                                        <i className="fa fa-pencil-square-o" onClick={() => { editData(index, itm) }} aria-hidden="true"></i>
                                        <i className="fa fa-trash-o" onClick={() => { deleteItems(index) }} aria-hidden="true"></i>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </>
    )
}

export default List