import "./styles.css"

const Display = ({ authentification, error }) => {

    return (
        <>
            {authentification && <p className="sucess"> Acesso liberado. </p>}
            {error && <p className="error"> Acesso negado! </p>}
        </>
    )
}

export default Display