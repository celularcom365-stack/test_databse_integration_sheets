const arr = [["Pablo","Mendez","24"],["Dana","Mendez","22"], ["Ana","Lopez","30"], ["Luis","Garcia","28"]]
const cab = ["Nombre","Apellido","Edad"]

const res = arr.map(item => {
    const obj = {}
    cab.forEach((key, i) => {
        obj[key] = item[i]
    })
    return obj
})
console.log(res)