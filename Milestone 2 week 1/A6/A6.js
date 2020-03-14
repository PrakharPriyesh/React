

function compare() {
    ele = document.getElementById('file')

    view = document.getElementById('view')

    reader = new FileReader()

    reader.readAsText(ele.files[0])

    reader.onload = function () {
        var text = reader.result
        data = text.split("\r\n")
        var two = []
        data.forEach(element => {
            row = element.split(",")
            two.push(row)
        });
        console.log(two)
        result = []

        for (element in two) {
            obj = {}
            console.log(element)
            if (element == 0) {
                continue
            }
            else {
                let a = two[0]
                for (let i = 0; i < a.length; i++) {
                    obj[two[0][i]] = two[element][i]
                }
            }
            result.push(obj)
        }
        view.innerHTML = JSON.stringify(result)

    }


}