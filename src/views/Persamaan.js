// import { MathComponent } from 'mathjax-react';
import { MathComponent } from 'mathjax-react';
import React, { useState } from 'react'



const Persamaan = () => {
    
    const [pesanE, setPesanE] = useState(false);    
    const [rasionalM, setRasionalM] = useState(false);    
    const [imajinerM, setImajinerM] = useState(false);    
    
    const ValueD=()=>{
       const D = Math.pow(nameB,2) - 4 * nameA * nameC
    return D;
    }        
    
    const [nameA, setNameA] = useState(0)
    const [nameB, setNameB] = useState(0)
    const [nameC, setNameC] = useState(0)
   
    const [hasilx1, setHasilx1] = useState(0)
    const [hasilx2, setHasilx2] = useState(0)
   
    // const testJa = (nameA)=>{
        
    //     console.log(nameA.target.value);
    // }
    
    const submitHasil=(e)=>{      
        e.preventDefault() 
        const Determinan = ValueD()
        
        if(nameA===0 ||nameB===0 ||nameC===0||nameA==='' ||nameB==='' ||nameC===''){
            setPesanE(true)
            setImajinerM(false)
            setRasionalM(false)
            return;
        }
        else if(Determinan> 0){
            let x1 = ((-nameB + Math.sqrt(Determinan)) / (2 * nameA)).toFixed(2)
            let x2 = ((-nameB - Math.sqrt(Determinan)) / (2 * nameA)).toFixed(2)
            
            setHasilx1(x1)
            setHasilx2(x2)
            setPesanE(false)
            setImajinerM(false)
        }else if(Determinan=== 0){
            let x1 =(-nameB / (2 * nameA)).toFixed(2)
            let x2 = x1
            setHasilx1(x1)
            setHasilx2(x2)            
            setRasionalM(true)
            setPesanE(false)
            setImajinerM(false)
        }
        else{
            setHasilx1('')
            setHasilx2('')
            setRasionalM(false)
            setPesanE(false)
            setImajinerM(true)
        }
        
        setNameA('')
        setNameB('')
        setNameC('')
    }


    // function pesan ...

    const RasionalMessage = () =>{
        return (
            <div className="alert alert-primary" role="alert">
                    <p><b>Karena Determinan = 0</b>, Maka  maka persamaan kuadrat tersebut memiliki satu akar bilangan rasional </p> 
                    </div>
        )
    }
    const ImajinerMessage = () =>{
        return (
            <div className="alert alert-warning" role="alert">
                    <p><b>Karena D kurang dari 0</b>, Maka Imajiner </p> 
                    </div>
        )
    }
    const PesanEror = () =>{
        return(
            <div className="alert alert-warning" role="alert">
                    <b>
                    Isi terlebih dahulu
                    </b>
                    </div>
        )
    }

    return (
        <div className="py-5">
            <div className="container">
            <div className="row">
                <div className="col">
                    <div className="card col-sm-8">
                        <div className="card-header justify-content-center">
                                <h4> Persamaan Kuadrat </h4> 
                        </div>
                            <div className="card-body">
                                <div className="mb-3">
                                    <MathComponent tex={String.raw`ax+bx+c = 0`} />
                                </div>
                            <form onSubmit={submitHasil}> 
                                <div className="mb-3">
        
                                    <label htmlFor="A" className="form-label">A</label>
                                    <input type="text" 
                                    value={nameA ? nameA : ''}  
                                    name="nameA" id="nameA" onChange={(e)=> setNameA(e.target.value)}  className="form-control"/>
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="B" className="form-label">B</label>
                                    <input type="text" 
                                    value={nameB ? nameB : ''}   onChange={(e)=> setNameB(e.target.value)} 
                                    name="nameB" id="nameB" className="form-control"/>
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="C" className="form-label">C</label>
                                    <input type="text" 
                                    value={nameC ? nameC : ''} onChange={(e)=> setNameC(e.target.value)} 
                                    name="nameC" id="nameC" className="form-control"/>
                                </div>
                                <button type="submit" className="btn btn-block btn-dark">HASIL</button>
                                </form>
                            </div>
                    </div>
                </div>

                <div className="col-md-4">
                    <div className="card">
                        <div className="card-header justify-content-center">
                            <h3>Hasil</h3>
          
                        </div>
                        <div className="card-body">
                            <div style={{
                                display:'flex',
                                justifyContent:'center',
                                
                            }} >
                          <h6 style={{marginRight:30}}> <MathComponent tex={String.raw`x1`}  />= {hasilx1 ? hasilx1 : '...'}</h6>
                          <h6><MathComponent tex={String.raw`x2`} />= {hasilx2 ? hasilx2 : '...'} </h6> 
                            </div>                         
                        {pesanE  === true ? <PesanEror /> : null }
                        {rasionalM  === true ? <RasionalMessage /> : null }
                        {imajinerM  === true ? <ImajinerMessage /> : null }
                        </div>
                    </div>
                </div>
            </div>
        </div>

        </div>
            )
}

export default Persamaan;
