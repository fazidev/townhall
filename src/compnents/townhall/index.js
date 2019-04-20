import React , {Component} from 'react';
import Sidebar from '../../compnents/townhall/sidebar';
import VideoContent from '../../compnents/townhall/vedios';
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
                             <VideoContent/>
                        </div>
                    </div>
                </div>
                
            </div>
            )
    }
}
export default townHall;