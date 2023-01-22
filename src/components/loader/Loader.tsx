import './Loader.css'

export function Loader() {
    return (
        <div>
            <div className='overlay'
                 style={{
                     display: 'flex',
                     alignItems: 'center',
                     justifyContent: 'center',
                 }}></div>
            <div className="loader">
                <div className="lds-ripple">
                    <div></div>
                    <div></div>
                </div>
            </div>
        </div>
    );
}
