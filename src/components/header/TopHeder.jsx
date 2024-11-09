const TopHeader = ({setToggle}) => {
    return ( 
    <div className="top-header">
        <div className="top-header-menu" onClick={() => setToggle(true)}>
            <i className="bi bi-list"></i>
        </div>
        <div className="top-header-logo">
            <i className="bi bi-basket2"></i>
            شام شوب
        </div>
        <div className="top-header-text">أهلا وسهلا بكم </div>
        <div className="top-header-phone">
            0951255464
            <i className="bi bi-telephone"></i>    
        </div>
    </div> 
    );
}
 
export default TopHeader;