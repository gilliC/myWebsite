export const FETCH_LIST = "FETCH_LIST";
export const FETCH_ACTIVE_ITEM = "FETCH_ACTIVE_ITEM";

export const CHANGE_ACTIVE_ITEM = "CHANGE_ACTIVE_ITEM";

export const changeActiveItem = (activeItem) => ({
    type: CHANGE_ACTIVE_ITEM,
    payload: activeItem
});

export const fetchList = () => ({
    type: FETCH_LIST
});

export const fetchActiveItem = () => ({
    type: FETCH_ACTIVE_ITEM
});

