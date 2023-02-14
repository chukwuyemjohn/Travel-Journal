export default function Main (props){
    return(
        <div className="main">
            
            <img src={props.item.imageUrl} alt=""  className="main--img" />
            <div className="main--side">

                <img src="images/pin.png" alt=""  className="main--pin"/>
                <span className="main--location">
                    {props.item.location}
                </span>
                <span className="main--google"> <a href={props.item.googleMapsUrl}>View on Google Maps</a> </span>
                <h1 className="main--title">{props.item.title}</h1>
                <span className="main--start_date">{props.item.startDate} -</span> <span className="main--end_date">{props.item.endDate}</span>
                <p className="main--description">{props.item.description} 
                </p>


            </div>
         
        </div>
    )
}