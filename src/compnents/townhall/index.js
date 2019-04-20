import React , {Component} from 'react';
import Sidebar from '../../compnents/townhall/sidebar';
<<<<<<< HEAD
import VideoContent from '../../compnents/townhall/vedios';
=======
import Header from '../commoncomponent/header'
>>>>>>> origin/saju
class townHall extends Component{
    render(){
        return(
            <div>
                <div className="container-fluid ">
                    <div className="row">
                        <div className="col-3 sidebar">
                            <Sidebar/>
                        </div>
                        <div className="col-9">
<<<<<<< HEAD
                             <VideoContent/>
=======
                           <Header/>
>>>>>>> origin/saju
                        </div>
                    </div>
                </div>
                
            </div>
            )
    }
}
export default townHall;