
export default function fetchData() {
    return function (dispatch) {
        return fetch("https://api.myjson.com/bins/1dlper")
            .then(response => response.json())
            .then(json => {
                // for (let key in json) {
                //     if (json.hasOwnProperty(key))         
                //         studentsData[key-110] = json[key]
                // }
                dispatch({
                    type: "DATA_LOADED",
                    payload: json
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
        type: order+"_MARKS",
    }
}

export function search(value) {
    return {
        type: "SEARCH",
        value: value.charAt(0).toUpperCase() + value.slice(1)
    }
}

