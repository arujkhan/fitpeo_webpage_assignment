import {AiOutlineArrowUp} from 'react-icons/ai';
import {AiOutlineArrowDown} from 'react-icons/ai';

function Card(props){
    let color =null;
    let upIcon =null ;
    if (props.updown==1) {
      upIcon = <AiOutlineArrowUp/>;
      color ='rgb(95, 238, 95)';
      
    }
   else{
    upIcon =<AiOutlineArrowDown/>;
    color = 'red';
   }
  
    console.log(props);
    return(
        <div className="card" >
                <div className="card-icon" style={{backgroundColor:props.bgcolor,color:props.icolor}}>
                    {props.icon}
                </div>
                <div className="card-text">
                    <div className="card-title">{props.title}</div>
                    <div className="card-count"><b>{props.count}</b></div>
                    <div className="card-percent"><div className="card-number" style={{color:color}}>{upIcon}{props.percent}</div> &nbsp;this {props.span}</div>
                </div>
            </div>
    );
}

export default Card;