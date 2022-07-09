import { MathComponent } from 'mathjax-react';
import React,{useEffect, useState} from 'react';
import {useHistory} from 'react-router-dom';
import {useLocation} from 'react-router-dom';

const Hasil = () => {
    const location = useLocation();
    const history = useHistory();

    useEffect(()=>{
        if(!location.state) history.push('/')
    },[])

    
    return (
        !location.state ?(<h1>gakda</h1>):(
        <div className="container">
            <h2 className="text-center">Hasil </h2>
           <div className="card ">
           <div className="card-footer">
               <div style={{
                   display:'flex',
                   justifyContent:'space-between'
               }}>
                    <h4 className="text-center text-success">Benar = <strong>{location.state.score.correct}</strong>  </h4>
                    <h4 className="text-center text-danger"> Salah = <strong>{location.state.score.false}</strong></h4>
               </div>
                                      
                    <div className="row justify-content-center">
                    <h2 className="col-md-4 alert alert-success text-center">Nilai : <strong>{location.state.score.correct * 10}</strong> </h2>                                                             
                    </div>
                </div>
           </div>
            {location.state.quiz.map((item,index) =>(
                <div className="card mb-4" key={index}>
                <div className="card-header bg-white" style={{
                    display:'flex',
                    justifyContent: 'space-between',
                                     
                }}>
                <MathComponent  tex={String.raw`${index +1}`}/>                  
                <MathComponent  tex={String.raw`${item.pertanyaan}`}/>  
                </div>

                <div className="card-body">
                {
                       item.options.map((item,index)=>(
                           <div
                           style={{
                               display: 'flex',
                               fontSize: 18,
                           }}
                           key={index}
                           >
                               <div 
                               style={{
                                height:20,
                                width:20,
                                borderRadius: 100,
                                backgroundColor : item?.selected ? "green" : "grey",
                                cursor:"pointer",
                                marginRight: 10,
                               }}
                               className=""/>
                               {item.title}
                           </div>
                       ))}
                </div>
                
                <div className="card-footer">
                {
                    item.options.find(
                        (option)=> option.correct && option.selected === option.correct
                    ) ? (
                        <div className="alert alert-success"> Jawaban Kamu <strong>Benar</strong>  : {
                            item.options.find((item)=> item.correct).title
                        } </div>
                    ) : (
                        <div>
                        <div className="alert alert-danger">
                            Jawaban Kamu <strong>Salah</strong>:{" "} 
                            {item.options.find((item)=> item.selected)?.title ??
                            "Kamu tidak menjawab"
                            }
                        </div>
                        <div className="alert alert-primary">
                        <strong>Yang Benar " 
                        {item.options.find((item)=> item.correct).title}
                            "
                        </strong>
                        </div>
                        </div>
                    )
                }
                </div>
    
                </div>
            ))}
            
        </div>
        )
        )
    
}

export default Hasil
