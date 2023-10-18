import Card from "./Card";
import "../CSS/CardContainer.css";
import {BiDollarCircle} from 'react-icons/bi';
import {TiDocumentText} from 'react-icons/ti';
import {TbCoins} from 'react-icons/tb';
import {PiHandbagBold} from 'react-icons/pi';
function CardContainer(){
    let cardList=[
        {icon : <BiDollarCircle/>, title :"Earnings", count:"$198k",percent:"3.38%",span:"month",updown:1,bgcolor:'rgb(189, 245, 189)',icolor:'rgb(0, 230, 138)'},
        {icon : <TiDocumentText/>, title : "Orders", count:"$2.4k",percent:"2%",span:"month",updown:2,bgcolor:'rgb(224, 179, 255)',icolor:'rgb(173, 51, 255)'},
        {icon : <TbCoins/>, title :"Balance", count:"$2.4k",percent:"2%",span:"month",updown:2,bgcolor:'rgb(179, 209, 255)',icolor:'rgb(0, 71, 179)'},
        {icon : <PiHandbagBold/>, title :"Total Sales", count:"$89k",percent:"11%",span:"week",updown:1,bgcolor:'rgb(255, 204, 204)',icolor:'rgb(230, 0, 0)'},
        
    ]
    return(
<div className="card-container">
        {cardList.map((card, index) => (
            <Card  key= {index} title={card.title} icon={card.icon} count={card.count} percent={card.percent} span={card.span} updown={card.updown} bgcolor={card.bgcolor} icolor={card.icolor}></Card>
        ))}
        </div>
    );
}
export default CardContainer;