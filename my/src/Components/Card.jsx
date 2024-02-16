import "./card.css"
export default function Card({title, img, desc}) {


    return (
        <div className="card">
            <img src={img} />
            <p><strong>{title}</strong></p>
            <p>{desc}</p>
    
        </div>
    )
}