import React, { Component } from 'react';

class Gif extends Component{
    constructor(props){
        super(props);
    }

render(){
    if(this.props.clicked){
        return(

            <div className="panel-body">
            {this.props.data.map(gif =>
                <div className="row grid-column">
                    <div className="col-sm-12">
                        <div className='text-center'>
                        
                            <p><img type="image/gif" src={gif.media[0].gif.url}/></p>
                        </div>
                    </div>
                </div>
            )}
            </div>
            )
        } else {
            return(
                    <div className="panel-body">
                        <div className="row grid-column">
                            <div className="col-sm-12">
                                <div className='text-center'>
                                    <img type="image/gif" src='/image.jpeg'/>
                                </div>
                            </div>
                        </div>
                    </div>  
            )
        }
    }
}

export default Gif;

