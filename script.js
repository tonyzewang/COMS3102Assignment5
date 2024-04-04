fetch("https://randomuser.me/api/?results=5").then((data)=>{
    return data.json();
}).then((objectData)=>{
    console.log(objectData.results);
    let tableData = "";
    results = objectData.results;
    results.map((value) =>{
        tableData +=` <tr>
        <td> ${value.name.first} </td>
        <td> ${value.location.city} </td>
    </tr>`;
    });
    document.getElementById("table_body").innerHTML=tableData;
}).catch((err) =>{
    console.log(err);
})