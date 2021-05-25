const fs=require('fs');

//Create
fs.writeFile('example.json','{"name": "Employee 1 Name", "salary": 2000}','utf8',err=>{
    if(err) console.log(err);
    console.log("Dosya oluşturuldu")
})

//Read
fs.readFile('./example.json', 'utf8',(err, data) => {
    if (err) throw err;
    console.log(data);
    console.log("Dosya okundu")
});
//Update
fs.appendFile('./example.json','\n {"name": "Employee 1 Name", "salary": 2000}','utf8',(err)=>{
    if (err) throw err;
    console.log("Dosya güncellendi")
})

//Delete
fs.unlink('example.json',err=>{
    if(err) console.log(err);
    console.log('Dosya silindi')
})