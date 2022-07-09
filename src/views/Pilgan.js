import React, { useEffect, useState } from 'react'
// import { useTimer } from 'react-timer-hook';
import { quiz as quizData} from "../components/pilganfix/Pilgansoal"
import { Link} from 'react-router-dom';
import { MathComponent } from 'mathjax-react';


const Pilgan = () => { 

// const history = useHistory();
    
const [currentIndex, setCurrentIndex] = useState(0);
const [quiz ,setQuiz] = useState(quizData);    
const [score ,setScore] = useState({
    correct :0,
    false : 0,
});

const { pertanyaan , options} = quiz[currentIndex];


// waktu ujian
// const menit = 1 * 60;
// const time = new Date();
// time.setSeconds(time.getSeconds() + menit);
// const { seconds,minutes,hours
//     } = useTimer({ expiryTimestamp : time, onExpire: () => alert('WAKTU HABIS !') });
// waktu ujian



const nextQuestion = ()=>{
    if(quiz.length  - 1 === currentIndex) return;
   setCurrentIndex( currentIndex + 1)
}
const previousQuestion = ()=>{
    if(currentIndex === 0) return;
   setCurrentIndex( currentIndex - 1)
}

const selectOption = (indexSelected , indexSelectedOptions) => {
    setQuiz(
        quiz.map((item, index)=>
            index === indexSelected ? 
            { ...item,selected:true,
                options:options.map((item ,index)=>     
                index === indexSelectedOptions ? 
                {... item, selected:true} 
                : {... item ,selected:false}
                )            
            } 
            : item
        )
    )
}

const checkScore = ()=>{
    const questionAnswered = quiz.filter((item)=> item.selected)
    const questionCorrect = questionAnswered.filter(
        (item)=> 
        item.options.find((option) => option.correct && option.selected === option.correct)
        )
    setScore({
        correct : questionCorrect.length,
        false : quiz.length - questionCorrect.length,
    })    
}

useEffect(()=>{
    checkScore();
},[quiz])

    return (
        <div className="container">
               <h2 className="text-center">Pilihan Ganda</h2> 
               {/* <h5 className="text-center">Timer : {hours};{minutes};{seconds}</h5>  */}

            <div className="card">
                <div className="card-body" style={{display:'flex'}}>
                    {quiz.map((item,index)=>(
                        <div className="border"
                        style={{
                            display:'flex',                            
                            justifyContent:'center',
                            alignItems:'center',
                            height:40,
                            width:40,
                            marginRight:10,
                            borderRadius:8,
                            backgroundColor: index === currentIndex ? "skyblue" 
                            : item?.selected ?"limegreen" :
                             "transparent",                             
                             fontWeight:'bold',
                             color: item?.selected ? "white" : "black",
                            
                             
                        }}
                        onClick={()=> setCurrentIndex(index)}
                        >
                            {index + 1}
                        </div>
                    ))}
                    
                </div>
            </div>

            <div className="card mt-2">
               <div className="card-header">
                   <div className="" style={{
                       display:'flex',
                       justifyContent:'space-between',
                       marginRight:50,
                       marginLeft:50,
                   }}>
               <MathComponent tex={String.raw`${currentIndex + 1 })`} /> 
               <MathComponent tex={String.raw`${pertanyaan}`} /> 
                   </div>
               </div>

                <div className="card-body">
                   {
                       options.map((item,index)=>(
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
                                backgroundColor : item?.selected ? "limegreen" : "lightgrey",
                                cursor:"pointer",
                                marginRight: 10,
                               }}
                               onClick={()=>selectOption(currentIndex , index)}
                               />
                               {item.title}
                           </div>
                       ))}
                </div>

            </div>
            <div 
            style={{
                display:'flex',
                justifyContent:'space-between',
                paddingTop : 15,
            }}
            >
                <button className="btn btn-danger col-sm-2" 
                onClick={()=> previousQuestion()}
                disabled={ currentIndex === 0 ? true : false}
                >Previous</button>
                
                {quiz.length - 1 === currentIndex ? (
                    <Link className="btn btn-warning col-sm-2"
                   
                    to={{
                        pathname:"/hasil",
                         state:{
                             quiz,
                             score,
                             
                         },
                    }}> Finish </Link>
                ) : (
                    <button className="btn btn-dark col-sm-2" 
                    onClick={()=> nextQuestion()}
                    >Next </button>            
                )
                }

            </div>
        </div>
    )
}

export default Pilgan;
