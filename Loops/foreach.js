const languages = ["html", "css","js", "php", "python"]



languages.forEach(function(element) {

    console.log(element)
})

function myfunct1(item){
    console.log(item)
}

languages.forEach(myfunct1)


languages.forEach((items, index, arr)=> {
    console.log(items, index, arr)
})

let codeing = [
    {
        languageNmae:"javascript",
        developer:"frontend"

    },
    {
        languageNmae:"java",
        developer:"backend"

    },
    {
        languageNmae:"python",
        developer:"fullstak"
    }
]

codeing.forEach((Element) => {
    console.log(Element.developer)
})