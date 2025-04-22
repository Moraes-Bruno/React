function Footer(){
    return(
        <footer className="d-flex flex-wrap justify-content-between align-items-center py-3  border-top container-fluid">
            <div className="col-md-4 d-flex align-items-center">
            <span className=" ms-4 mb-3 mb-md-0">@Bruno Silva</span>
            </div>
            <ul className="nav col-md-4 justify-content-end list-unstyled d-flex me-4">
      <li className="ms-3"><a href="https://github.com/Moraes-Bruno" target="_blank"><i
            className="bi bi-github text-dark"></i></a></li>
        <li className="ms-3"><a href="https://www.linkedin.com/in/bruno-moraes-9b2383231" target="_blank"><i
            className="bi bi-linkedin text-dark"></i></a></li>
    </ul>
        </footer>
    );
}

export default Footer