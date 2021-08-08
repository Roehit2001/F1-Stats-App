const ConstructorIndCard = ({ constructorsList }) => {
    if (constructorsList.length === 0) {
        return (
            <div className="mx-auto">
                <img className="preloader" src="/Assets/img/preloader.gif" alt="preloader" />
            </div>
        )
    }


    return (
        <div className="card-deck">
            {

                constructorsList.MRData.ConstructorTable[0].Constructor.map(constructor => {
                    return (
                        <div className="col-lg-4 mt-5" key={constructor.$.constructorId}>
                            <div className="constructorCard card h-100" >
                                <img id={constructor.$.constructorId + "img"} className="card-img-top mx-auto my-auto h-100" src={"/Assets/constructorsImages/" + constructor.Name + "_lg.png"} alt="" />
                                <div className="card-body">
                                    <a href={constructor.$.url}><h5 className="card-title">{constructor.Name}</h5></a>

                                    <p className="card-text">{"Nationality: " + constructor.Nationality}</p>
                                </div>
                                {/* <div className="card-footer">
                                <small className="text-muted col-6" id={constructor.$.constructorId + "len"}>Resource not Available</small>
                                <small className="text-muted col-6" id={constructor.$.constructorId + "alt"}>Resource not Available</small>
                            </div> */}
                            </div>
                        </div>
                    )
                })}
        </div>
    )

}
export default ConstructorIndCard