export default function fetchData() {
    return function (dispatch) {
        return fetch("https://api.myjson.com/bins/1dlper")
            .then(response => response.json())
            .then(json => {
                dispatch({
                    type: "DATA_LOADED",
                    payload: json
                });
            }).catch(err => {
                dispatch({
                    type: "FETCH_FAILED",
                });
              });
    };
}

export function sortByNames(order) {
    return {
        type: order,
    };
}

export function sortByMarks(order) {
    return {
        type: order + "_MARKS",
    }
}

export function search(value) {
    return {
        type: "SEARCH",
        value: value.charAt(0).toUpperCase() + value.slice(1)
    }
}