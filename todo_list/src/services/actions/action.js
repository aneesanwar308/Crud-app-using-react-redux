import { ADD_ITEM, DELETE_ITEM, EDIT_ITEM } from "../types"

export const addItem = (data) => {
    console.log(data)
    return {
        type: ADD_ITEM,
        data: data
    }
}
export const deleteItem = (id) => {
    return {
        type: DELETE_ITEM,
        id: id
    }
}
export const editItem = (id, data) => {
    return {
        type: EDIT_ITEM,
        id: id,
        data: data
    }
}