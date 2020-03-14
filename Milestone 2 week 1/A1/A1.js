

function upload() {
    ele = document.getElementById('read')

    var reader = new FileReader();
    
    reader.readAsBinaryString(ele.files[0]);
    reader.onload = function () {
        var text = reader.result
        data = text.split("\n")
        var two = []
        data.forEach(element => {
            row = element.split(",")
            two.push(row)
        });
        console.log(two)
    };


}