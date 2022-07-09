import { MathComponent } from "mathjax-react";
import React, { useState } from 'react'
import Pagination from './Pagination'

const pertanyaan = require("../soal/soal.json") 

const Soal = () => {

  const [currentPage, setCurrentPage] = useState(1)
  const [postPerPage] = useState(5)

  const indexOfLastPost = currentPage * postPerPage;
  const indexOfFirstPost = indexOfLastPost - postPerPage;
  const currentPosts = pertanyaan.slice(indexOfFirstPost,indexOfLastPost);

  const paginate = (pageNumber) =>{
    setCurrentPage(pageNumber)
  }

    return (
        
        <div className="container" >
          <div className="card-header">
            <div className="ml-4">
          <h1>Mengambil Data dari file json </h1>
            </div>
          </div>
          <div className="card-body">
          {currentPosts.map((tes, index)=>{
            return (
              <div key={index}>
              
                <h3> <MathComponent tex={String.raw`${tes.question}`}/>  </h3>
                
            </div>
                  )
                }
              )
              }
              </div>
              <div className="card-footer">
                <div className="row justify-content-center">
                  <div className="col-md-4 ">
                 <Pagination postsPerPage={postPerPage} totalPosts={pertanyaan.length} paginate={paginate} />
                    </div>              
                </div>
              </div>
      </div>
      
    )
}

export default Soal
