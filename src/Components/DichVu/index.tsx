
import './DichVu.css'
import ChuongNguoiDung from '../ChuongNguoiDung'
import searchlogo from '../../style/img/search.svg'
import {Link} from 'react-router-dom'
import Dropdown, { Option } from 'react-dropdown';
import React, { useState ,useEffect} from "react";
import DatePicker from "react-datepicker";
import Vector from '../../style/img/Vector.svg'
import addSquare from '../../style/img/add-square.svg'
import ChosePage from '../ChosePage'

import "react-datepicker/dist/react-datepicker.css";

import prevArrow from '../../style/img/prevArrow.svg'
import nextArrow from '../../style/img/nextArrow.svg'
import ReactPaginate from 'react-paginate';


import {connect} from 'react-redux';



import {fetchDataChart} from '../../redux/DatAlta/DataAltaActions'



function DichVu({dataTableRedux,fetchDataChart}:any) {

        useEffect(() => {
        
                fetchDataChart()
                
            
            
            },[])

            
            


        const DichVuActivePoint = ()=>{
                return (
                        <><span className="ActivePoint"></span><span>Hoạt động</span></>
                )
        }  
                
                       
                
        

        const DichVuUnactivePoint = ()=>{
              return (  <><span className="UnActivePoint"></span><span>Ngưng hoạt động</span></>
              
              ) 
        }

        // const data1= [

        //         {
        //                 codeDichVu : 'KIO_01',
        //                 nameDichVu : 'Kiosk',
        //                 desDichVu : 'Mô tả dịch vụ 1',
        //                 stateDichVu : <DichVuActivePoint />,
        //                 stateFilter:'Hoạt động'
        //         },
        //         {
        //                 codeDichVu : 'KIO_01',
        //                 nameDichVu : 'Kiosk',
        //                 desDichVu : 'Hoạt động',
        //                 stateDichVu :  <DichVuUnactivePoint />,
        //                 stateFilter:'Ngưng hoạt động'

        //         },
        //         {
        //                 codeDichVu : 'KIO_01',
        //                 nameDichVu : 'Kiosk',
        //                 desDichVu : ' Hoạt động',
        //                 stateDichVu :  <DichVuActivePoint />
        //                 ,
        //                 stateFilter:'Hoạt động'
        //         },
        //         {
        //                 codeDichVu : 'KIO_01',
        //                 nameDichVu : 'Kiosk',
        //                 desDichVu : 'Hoạt động',
        //                 stateDichVu :  <DichVuActivePoint /> ,
        //                 stateFilter:'Hoạt động'
        //         },
        //         {
        //                 codeDichVu : 'KIO_01',
        //                 nameDichVu : 'Kiosk',
        //                 desDichVu : 'Hoạt động',
        //                 stateDichVu : <DichVuActivePoint /> ,
        //                 stateFilter:'Hoạt động'
        //         },
        //         {
        //                 codeDichVu : 'KIO_01',
        //                 nameDichVu : 'Kiosk',
        //                 desDichVu : 'Hoạt động',
        //                 stateDichVu :  <DichVuActivePoint /> ,
        //                 stateFilter:'Hoạt động'
        //         },
        //         {
        //                 codeDichVu : 'KIO_01',
        //                 nameDichVu : 'Kiosk',
        //                 desDichVu : 'Hoạt động',
        //                 stateDichVu :  <DichVuActivePoint /> ,
        //                 stateFilter:'Hoạt động'
        //         },
        //         {
        //                 codeDichVu : 'KIO_01',
        //                 nameDichVu : 'Kiosk',
        //                 desDichVu : 'Hoạt động',
        //                 stateDichVu : <DichVuUnactivePoint /> ,
        //                 stateFilter:'Ngưng hoạt động'
        //         },
        //         {
        //                 codeDichVu : 'KIO_01',
        //                 nameDichVu : 'Kiosk',
        //                 desDichVu : 'Hoạt động',
        //                 stateDichVu :   <DichVuActivePoint />,
        //                 stateFilter:'Hoạt động'
        //         }
                
                
        // ]

        const data = dataTableRedux.dataDichVu
        

        const [dataDichVuTable , setDataDichVuTable] = useState(data)




    const options = [
        'Tất cả', 'Hoạt động', 'Ngưng hoạt động'
      ];

     
   const defaultOption = options[0];

  

         ////Pagination:
        
        
         const [pageNumber , setpageNumber] = useState(0)

         const dataPerPage = 9
 
         const pagesVisited =  pageNumber * dataPerPage
 
         const dataBeforDisplay = dataDichVuTable.slice( pagesVisited , pagesVisited + dataPerPage )
 
         const dataDisplay = dataBeforDisplay.map ( (item:any,index:any)=> 
                         
         <div className="DichVuTableDetailItem" key={index}>
                 <div className="DichVuTableDetailTitles_Item">
                         <span> {item.codeDichVu}</span>    
                 </div>
                 <div className="DichVuTableDetailTitles_Item">
                         <span> {item.nameDichVu} </span>      
                 </div>
                 <div className="DichVuTableDetailTitles_Item">
                         <span> {item.desDichVu} </span>      
                 </div>
                 <div className="DichVuTableDetailTitles_Item">
                         <span> {item.stateFilter == 'Hoạt động'? <DichVuActivePoint/> : <DichVuUnactivePoint/>}</span>      
                 </div>
                 <div className="DichVuTableDetailTitles_Item">
                         <span> <Link to="/DichVu/detail-DichVu">Chi tiết </Link> </span>      
                 </div>
                 <div className="DichVuTableDetailTitles_Item">
                         <span> <a href="">Cập nhật</a>  </span>      
                 </div>
         </div>

          )     
         
         
 
         const pageCount =  Math.ceil(data.length / dataPerPage)
 
        const changePage = ( {selected}:any ) =>{
                 setpageNumber(selected)
        }
        /////


        const handleDropdownValue = (e: any)=>{
            
                if(e.value=='Hoạt động'){
                        const filterdata = data.filter( (item:any)=> item.stateFilter == 'Hoạt động')
                        setDataDichVuTable(filterdata)
                }else if(e.value=='Ngưng hoạt động') {
                        const filterdata = data.filter((item:any) => item.stateFilter == 'Ngưng hoạt động')
                        setDataDichVuTable(filterdata)
                }
                
                else{
                        setDataDichVuTable(data)
                }
                 
           }

        const [startDate, setStartDate] = useState<Date | null>(new Date());


        const [search , setSeatch] = useState('')

        

    return (
        <div className="DichVu">

            <div className="DichVuInfor">

                <div className="DichVuInforTitle">
                      <span className="DichVuTItle">Dịc vụ</span>   
                      <span className="DichVupointer">{'>'}  </span>
                      <span className="ListDichVu">Danh sách dịch vụ</span>   
                </div>

                <div className="DichVuInforUser">
                    <ChuongNguoiDung/>
                </div>


            </div>

           <div className="DichVuCOntainer">
                
            <div className="DichVuDropdownsSearchTItle">
                        Quản lý dịch vụ
            </div>
                
            <div className="DichVuDropdownsSarch">

                    <div className="DichVuDropdownsItem1">
                            <div className="DichVuDropdownsSarchFirst">
                                    <div className="DichVuDropdownsSarchFirstName">Trạng thái hoạt động</div>
                                    <div className="DichVuDropdowns_1">
                                    <Dropdown options={options} 
                                            
                                            onChange={(e)=>handleDropdownValue(e)} 
                                            value={defaultOption} placeholder="Select an option" />
                                    </div>
                            </div>
                            <div className="DichVuDropdownsSarchFirst">
                                    <div className="DichVuDropdownsSarchFirstName chooseTime">Chọn thời gian</div>
                                    <div className="DichVuDropdowns_1">
                                   
                                        <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} />
                                         
                                                 <img src={Vector} alt="" /> 
                                        
                                        <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} />
                                    
                                    
                                    </div>
                            </div>
                    </div>
                    <div className="DichVuDropdownsSarchFirst  DichVuDropdownsSarchFirst_input">
                            <div className="DichVuDropdownsSarchFirstName choseKey">Từ khóa</div>
                            <div className="DichVuDropdowns_input">
                                    <input placeholder="Nhập từ khóa" value={search} onChange={(e)=> setSeatch(e.target.value)}/>
                                    <div className="seacrchlogo">
                                    <img src={searchlogo} alt="" />
                            </div>
                            </div>
                            
                    </div>

            </div>

            <div className="DichVuTableDetail">

                <div className="DichVuTableDetailTitles">
                        <div className="DichVuTableDetailTitles_Item">
                                <span> Mã dịch vụ  </span>    
                        </div>
                        <div className="DichVuTableDetailTitles_Item">
                                  <span> Tên dịch vụ  </span>      
                        </div>
                        <div className="DichVuTableDetailTitles_Item">
                                  <span> Mô tả </span>      
                        </div>
                        <div className="DichVuTableDetailTitles_Item">
                                  <span> Trạng thái hoạt động  </span>      
                        </div>
                        <div className="DichVuTableDetailTitles_Item">
                                  <span>  </span>      
                        </div>
                        <div className="DichVuTableDetailTitles_Item">
                                  <span>   </span>      
                        </div>
                </div>
                
              
                {
                        //  dataDichVuTable.map ( (item:any,index:any)=> 
                         
                        // <div className="DichVuTableDetailItem" key={index}>
                        //         <div className="DichVuTableDetailTitles_Item">
                        //                 <span> {item.codeDichVu}</span>    
                        //         </div>
                        //         <div className="DichVuTableDetailTitles_Item">
                        //                 <span> {item.nameDichVu} </span>      
                        //         </div>
                        //         <div className="DichVuTableDetailTitles_Item">
                        //                 <span> {item.desDichVu} </span>      
                        //         </div>
                        //         <div className="DichVuTableDetailTitles_Item">
                        //                 <span> {item.stateFilter == 'Hoạt động'? <DichVuActivePoint/> : <DichVuUnactivePoint/>}</span>      
                        //         </div>
                        //         <div className="DichVuTableDetailTitles_Item">
                        //                 <span> <Link to="/DichVu/detail-DichVu">Chi tiết </Link> </span>      
                        //         </div>
                        //         <div className="DichVuTableDetailTitles_Item">
                        //                 <span> <a href="">Cập nhật</a>  </span>      
                        //         </div>
                        // </div>

                        //  )     
                }
                {dataDisplay}
                
               
                


                   
          </div>     





           </div>

           





        <Link to="/DichVu/add-DichVu"> <div className="DichVuAdd">
                                        <div className="DichVuAddIMG">
                                                <img src={addSquare} alt="" />  
                                        </div>
                                        <span>Thêm dịch vụ</span>
                                </div>
        </Link>         

        <div className="Pagination">
                        <ReactPaginate 

                                previousLabel={ 
                                        <div className="ChosePage__preArrow">
                                                <img src={prevArrow} alt="" />
                                        </div>}
                                nextLabel={
                                        <div className="ChosePage__preArrow">
                                                <img src={nextArrow} alt="" />
                                        </div>
                                } 
                                pageCount={pageCount} 
                                onPageChange={changePage}   
                                containerClassName={"paginationBttns"}      
                                previousLinkClassName={"previousBttn"}    
                                nextLinkClassName = {"nextBttn"}  
                                disabledClassName={"paginationDisabled"}     
                                activeClassName={"paginationActive"}         
                />
            </div>
       
        </div>


    )
}




const mapStateToProps = (state:any) =>{
        return {
          dataTableRedux:state.dataAlta
      
         
            
            
            
        }
      }
      
      
      
      
      const mapDispatchToProps = (dispatch:any) =>{
        return {
                fetchDataChart: ()=>  dispatch(fetchDataChart()),
          
        }
      }
      
      
      
      
      export default connect(mapStateToProps,mapDispatchToProps)(DichVu)
      
      