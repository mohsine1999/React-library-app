export const SprinnerLoading = () => {
    return (
      <div className="container m-5 d-flex justify-content-center" style={{height : 600}}>
        <div className="spinner-border text-primary" role="status">
            <span className="visually-hidden">
                    Loading...
            </span>
        </div>
      </div>              
    );
}