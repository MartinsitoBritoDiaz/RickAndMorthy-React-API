
export const CharacterItem = ({ name, status, species, gender, url }) => {
    
    return(
        <div className="characterCard">
            <div className="characterCard--img" >
                <img src={url} ></img>    
            </div>

            <div className="characterCard--description" >
                <h2>{ name }</h2>
                <div className="character--info">
                    <p><span>Status</span> { status }</p>
                    <p><span>Specie</span> { species }</p>
                    <p><span>Gender</span> { gender }</p>
                </div>
            </div>
        </div>
    )
}