export default async function data(){
    let studentsData
    await fetch("https://api.myjson.com/bins/1dlper")
            .then(response => response.json())
            .then(json => {
                studentsData = json;
            });
    return studentsData
}