

function upload() {
    ele = document.getElementById('read')
    path = document.getElementById('path').value


    reader = new FileReader();

    reader.readAsText(ele.files[0])

    reader.onload = function () {

        data = reader.result
        json = JSON.parse(data)
        console.log(json)

        loc = path.split(",")
        console.log(loc)

        for (let i = 0; i < loc.length; i++) {
            out = json[loc[i]]
            if (out === undefined) {
                console.log("Not available")
                return;
            }
            json = out
        }
        console.log(json)
    }
}