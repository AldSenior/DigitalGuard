import "./VseStati.css"

export default function Statiaobraz({title, desc}) {


    return (
            <>
            <h1 className="h1"><strong>{title}</strong></h1>
            <p className="p">{desc}</p>
            </>
    )
}