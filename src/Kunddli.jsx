import React from 'react'
import axios from 'axios';
import image from './image/img1.jpg'
export function Kunddli() {
    const [data,setData]=React.useState([]);

    const KunddliData=async()=>{
      const dataFetch=await axios.post('http://localhost:5000/listofbecholer',data)
      console.log("****",dataFetch.data)
    }
const onchangeInput=(e)=>{
    e.preventDefault();
    setData((pre)=>({...pre,[e.target.name]:e.target.value}))
}
    return (
        <>
            <div style={{ display: "grid", placeContent: "center",width:"50%",marginLeft:"28%", }}>
                <b><u>Kunddli</u></b>
                <div style={{backgroundColor:"lightyellow;",borderStyle:"groove"}}>
                    <div style={{ display: "flex", padding: "1rem",gap:"1rem"}}>
                        <div className='male'>
                            <img src={image} alt="no img" width={55} /> <br/><br/>
                            <input type="text" placeholder='name(M)'
                            name="Mname" 
                            value={data?.Mname} 
                            onChange={onchangeInput}/> <br />
                            <input type="text" placeholder='M-Age' 
                            name="Mage" 
                            value={data?.Mage}
                            onChange={onchangeInput} /> <br />
                            <input type="text" placeholder='M-qualification'
                            name="Mqualification"
                            value={data?.Mqualification}
                            onChange={onchangeInput} /> <br />
                            <input type="text" placeholder='M-fatherName'
                            name="Mfathername"
                            value={data?.Mfathername}
                            onChange={onchangeInput} /> <br />
                        </div>
                    <div className='female'>
                            <img src={image} alt="no img" width={55} /> <br/><br/>

                            <input type="text" placeholder='name(F)'
                            name="Fname" 
                            value={data?.Fname}
                            onChange={onchangeInput}/> <br />
                            <input type="text" placeholder='F-Age'
                            name="Fage"
                            value={data?.Fage} 
                            onChange={onchangeInput}/> <br />
                            <input type="text" placeholder='F-qualification'
                            name="Fqualificaton" 
                            value={data?.Fqualificaton}
                            onChange={onchangeInput}/> <br />
                            <input type="text" placeholder='F-fatherName'
                            name='Ffathername'
                            value={data?.Ffathername}
                            onChange={onchangeInput} /><br />

                        </div>

                    </div>
                    <button onClick={KunddliData}>Match</button>
                    {/* <button >Save</button> */}
                </div>

            </div>

        </>
    )
}
