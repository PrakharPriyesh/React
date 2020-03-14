

function compare() {
    j1 = document.getElementById('j1').value
    j2 = document.getElementById('j2').value

    try {
        json1 = JSON.parse(j1)
        json2 = JSON.parse(j2)
        console.log(JSON.stringify(json1))
        console.log(json2)

        if (JSON.stringify(json1) === JSON.stringify(json2)) {
            alert("Equal")
        }
        else {
            alert("Unequal")
        }
    }
    catch {
        console.log("Not Json")
    }
}