import SearchBar from "../../components/SearchBar/SearchBar"
import "./homePage.scss"

function HomePage () {
    return (
        <div className="homePage">
            <div className="textContainer">
                <div className="wrapper">
                <h1 className="title">Find Real Estate & Get Your Dream Place</h1>
                
                <p className="description">Lorem ipsm dolor sit amet consectetur adipisicing elit. Ecos explicabo suscipt cum eius, iure est nulla animi consequatur facilis id pariatur fugit quos laundantium temporibus dolor ea repellet providet impedit!</p>
                <SearchBar />
                <div className="boxes">
                    <div className="box">
                        <h1>16+</h1>
                        <h2>Years of Experience</h2>
                    </div>
                    <div className="box">
                        <h1>200</h1>
                        <h2>Award Gained</h2>
                    </div>
                    <div className="box">
                        <h1>3200+</h1>
                        <h2>Property Ready</h2>
                    </div>
                </div>
                </div>
            </div>
            <div className="imgContainer">
                <img src="/bg.png" alt=""/>
            </div>
        </div>
    )
}

export default HomePage