import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { MathComponent } from 'mathjax-react';


const Random = () => {
    const [questions , setQuestions] = useState('')
    const [number , setNumber] = useState('')
    const [cekX1 , setCekX1] = useState(0)
    const [cekX2 , setCekX2] = useState(0)
  
    const [loading, setLoading] = useState(false)
    const [nameX1, setNameX1] = useState(0)
    const [nameX2, setNameX2] = useState(0)

    const [kosong, setKosong] = useState(false)
    const [berhasil, setBerhasil] = useState(false)
    const [gagal, setGagal] = useState(false)

    useEffect(()=>{
        getQuestion();
    },[])

    const getQuestion = async()=>{
        setLoading(true)
        try{
            let response = await axios.get(`http://localhost:3003/soal`)
            // setQuestion(response.data)
            let dataSoal = response.data;
            let randomSoal = Math.floor(Math.random() * dataSoal.length)
            let randomSoalFix = dataSoal[randomSoal];
            setLoading(false)
            setNumber(randomSoalFix.no)
            setQuestions(randomSoalFix.question)

            setCekX1(randomSoalFix.x1)
            setCekX2(randomSoalFix.x2) 
            
            setKosong(false)
            setGagal(false)
            setBerhasil(false)

            setNameX1('')
            setNameX2('')
        }catch(e){
            setLoading(true)
            console.log(e.message);
        }
    
    } 


    const handleRandom = () =>{
        getQuestion();
    }

    const cekAnswer = (e)=> {
        e.preventDefault();
        if(nameX1===0 || nameX2===0 || nameX1==='' || nameX2===''){         
            setKosong(true)
            setBerhasil(false)
            setGagal(false)
        }else{
            const cekx1 = cekX1.toFixed(2);
            const cekx2 = cekX2.toFixed(2);
            const x1 = parseFloat(nameX1) 
            const x2 = parseFloat(nameX2)
            const fixX1 = x1.toFixed(2) 
            const fixX2 = x2.toFixed(2)   
             
                if(fixX1===cekx1 && fixX2===cekx2){
                
                    setBerhasil(true)
                    setGagal(false)
                    setKosong(false)
                }else{
                    setGagal(true)
                    setBerhasil(false)
                    setKosong(false)
                }
        }
        
       
    }

    // pesan berhasil dan gagal
    const KosongMessage = () =>{
        return (
                <div className="alert alert-warning col-sm-8" >
                    <p><b>Isi dahuluuu yaaa</b></p> 
                </div>
            
        )
    }
    const BerhasilMessage = () =>{
        return (
            <div className="alert alert-success col-sm-8">
                    <p><b>Selamat, Jawaban Kamu Benar ...</b></p> 
                    </div>
        )
    }
    const GagalMessage = () =>{
        return (
            <div className="alert alert-danger col-sm-8" >
                    <p>Hmm ... <b>x1 dan x2 salah</b>, coba lagi </p> 
                    </div>
        )
    }

    return (
        <div className="py-5">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-8">
                        {/* <input type="text" name="identifier" value={identifier} onChange={
                            (e)=>setIdentifier(e.target.value)
                        } className="form-control"/> */}

                        <button  className="btn btn-dark" onClick={handleRandom}>Acak</button>
                        <table className="table">
                             <tbody>
                                { loading ? <div className="alert alert-warning mt-2 col-sm-8"> Loading ...</div> :
                                 <tr>
                                 <td><MathComponent tex={String.raw`${number}`} /></td>
                                 <td><MathComponent tex={String.raw`${questions}`} /></td>
                                </tr>                      
                                }
                           
                             </tbody>
                                
                         </table>
                         <div className="row">
                         <div className="col-md-4" >
                         <form onSubmit={cekAnswer}  style={{
                             display:'flex',
                             justifyContent: 'space-between',
                             
                         }}> 
                                <label style={{
                                    marginRight:20,
                                }}><MathComponent  tex={String.raw`x1`} /></label>
                                <input type="text" value={nameX1 ? nameX1 : ''} onChange={(e)=> setNameX1(e.target.value)} name="nameX1" className="form-control mb-2" />
                                <label style={{
                                    marginLeft:20,
                                }}><MathComponent  tex={String.raw`x2`} /></label>
                                <input type="text" value={nameX2 ? nameX2 : ''} onChange={(e)=> setNameX2(e.target.value)} name="nameX2" className="form-control mb-2" style={{
                                    marginLeft:20,
                                }}  />
                                <button className="btn btn-dark mb-2" style={{ marginLeft:20}}>Cek</button>

                        </form>
                        </div>
                         </div>
                                {kosong  === true ? <KosongMessage /> : null }
                                {berhasil  === true ? <BerhasilMessage /> : null }
                                {gagal  === true ? <GagalMessage /> : null }
                        </div>
                    </div>
                        
                    </div>
         </div>
       
    )
}


export default Random;
