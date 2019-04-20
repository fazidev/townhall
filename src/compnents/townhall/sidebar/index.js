import React , {Component} from 'react';
class sideBar extends Component{
    render(){
        return(
            <div>
               <div className="primary-container">
                      <div className="back-btn">
                          <div className="back-button">
                              <img src={require('../../../assets/images/arrow-left.svg')}/>
                          </div>
                      </div>
                  <div className="logo-wrapper">
                       <div className="logo-img">
                           <div className="logo-wrp">
                              <img src={require('../../../assets/images/logo.png')}/>
                           </div>
                       </div>
                       <div className="logo-below">
                           <h1>Townhall Webcast</h1>
                           <h2>12.12.2018</h2>
                       </div>
                  </div>
                        <div className="list-option">
                           <ul>
                               <li><img src={require('../../../assets/images/media.png')}/> <span>Media Library</span></li>
                           </ul>
                       </div>
               </div>
            </div>
            )
    }
}
export default sideBar;