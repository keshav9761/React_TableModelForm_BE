let express=require('express')
let cors=require('cors');
let app=express();
app.use(cors());
app.use(express.json());

app.get('/',(req,res)=>{
    res.status(200).send("hello Kunddli");
})
let becholer=[{
    id:"1",
    Mname:"dabbu",
    Mage:"12",
    Mqualification:"Bca",
    Mfathername:"harveer",

    Fname:"Rani",
    Fage:"10",
    Fqualificaton:"BA",
    Ffathername:"hanshraj",
    status:false
}]
    

const becholerId=()=>{
    return `ks${new Date().getTime()}`;
}

//http://localhost:5000/listofbecholer
app.post('/listofbecholer',(req,res)=>{
    const data=req.body;
    data.id=becholerId();
   if(data?.Fage==data?.Mage+2){
       data.status=false;
}
else{
    data.status=true;
   }
    becholer.push(data);
    res.status(200).send({msg:"submited",body:data})
})

//http://localhost:5000/shortListbecholer
app.get('/shortListbecholer',(req,res)=>{
    res.status(200).send(becholer)
})

//http://localhost:5000/deletebecholer
app.delete('/deletebecholer',(req,res)=>{
    const {id}=req.query
    const outData=becholer.filter((e)=>e.id !=id)
    console.log(outData)
    becholer=outData;
    res.status(200).send({msg:"Data Deleted"})
})

//http://localhost:5000/findbecholer
app.get('/findbecholer',(req,res)=>{
    const {id}=req.query;
    const found=becholer.find((f)=>f.id ==id)
    console.log(found);
    res.status(200).send(found);
})

//http://localhost:5000/editbecholer
app.patch('/editbecholer',(req,res)=>{
    const editIndex=becholer.findIndex((i)=>i.id ==req.body.id);
    console.log("$$$$$$",editIndex)
    becholer[editIndex]=req.body;
    res.status(200).send({msg:"updated",body:becholer[editIndex]})
})
app.listen(5000,()=>{
    console.log("haa bol port 5000")
})