import {useState , useEffect ,useRef} from 'react'
import './Slidebar.css'
import { Link  } from 'react-router-dom'
import logo from '../Login/image/alteMedia.png'
import dashboradlogo from '../../style/img/dashboradlogo.png'
import computerlogo from '../../style/img/computer.svg'
import servicelogo from '../../style/img/service.svg'
import numberlogo from '../../style/img/number.svg'
import reportlogo from '../../style/img/report.svg'
import settinglogo from '../../style/img/setting.svg'
import morelogo from '../../style/img/more.svg'
import logoutlogo from '../../style/img/logout.svg'



export default function SlideBar() {

   
      const slidebars = document.querySelectorAll('.slibarDetailItem')
    
   

  
   


  slidebars.forEach( slidebar => {

    slidebar.onclick = function () {

        document.querySelector('.slibarDetailItem.activeSlidebar').classList.remove('activeSlidebar')
        
        this.classList.add('activeSlidebar')
        
                      
    }
})
   
  
    
    const [show ,setShow] = useState(false)

    const handleShow = () =>{
        setShow(!show)
        
    }




    return (
        <div className="SlideBar">
              <div className="SlidebarIMG">
                  <img src={logo}/>
              </div>
              <div className="slibarDetail">
                  <Link to="/dashboard">
                        <div className="slibarDetailItem activeSlidebar">
                            <div className="slibarDetailItemimg">
                                <img src={dashboradlogo} alt="" />
                            </div>
                            <span className="slibarDetailItemName">
                                Dashboard
                            </span>
                        </div>
                  </Link>
                  
                  <Link to="/equiment">
                    <div className="slibarDetailItem">
                            <div className="slibarDetailItemimg">
                                <img src={computerlogo} alt="" />
                            </div>
                            <span className="slibarDetailItemName">
                            Thi???t b???
                            </span>
                    </div> 
                    </Link>
                  
                  <Link to="/service">
                    <div className="slibarDetailItem">
                        <div className="slibarDetailItemimg">
                            <img src={servicelogo} alt="" />
                        </div>
                        <span className="slibarDetailItemName">
                        D???ch v???
                        </span>
                    </div> 
                  </Link>
                  <Link to="/number-level"><div className="slibarDetailItem">
                      <div className="slibarDetailItemimg">
                          <img src={numberlogo} alt="" />
                      </div>
                      <span className="slibarDetailItemName">
                      C???p s???
                      </span>
                  </div> </Link>
                  
                  <Link to="/report"><div className="slibarDetailItem">
                      <div className="slibarDetailItemimg">
                          <img src={reportlogo} alt="" />
                      </div>
                      <span className="slibarDetailItemName">
                      B??o c??o
                      </span>
                  </div> </Link>

                  <div className="slibarDetailItem  ">
                      <div className="slibarDetailItemimg">
                          <img src={settinglogo} alt="" />
                      </div>
                      <span className="slibarDetailItemName">
                            C??i ?????t h??? th???ng
                            <div className="settingMore " onClick={handleShow}>
                                <img src={morelogo} alt="" />
                             </div>   
                                    
                            
                            
                      </span>
                     

                  </div>

                  { show ?(
                      <ul
                       className="systemDropdown"
                        
                      >
                     <Link to="/system/role-management"><li>Qu???n l?? vai tr??</li></Link> 
                      <Link to="/user-list"><li>Qu???n l?? t??i kho???n</li></Link>
                      <Link to="/system/user-diary"><li>Nh???t k?? ng?????i d??ng</li></Link>
                      
          </ul>
                  )
                  : undefined
                  
                  }
                  

                 
              </div>
              <Link to="/">
              <div className="slidebarButton">
                      <div className="slidebarButtonimg">
                          <img src={logoutlogo} alt="" />
                      </div>
                      <span> ????ng xu???t</span>
                </div>
                </Link>
        </div>
    )
}
