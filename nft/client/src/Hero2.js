
export default function Hero2() {
    return (
        <>
            <section id="hero-2" className="hero-section">
                <div className="bg-fixed bg-lightgrey hero-2-txt division">
                    <div className="container">
                        <div id="hero-2-content" className="row">
                            
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

function saveToWaitList() {
    var email = document.getElementById('s-email').value;
    console.log(email);
    fetch("https://0js0bgb4o6.execute-api.us-east-2.amazonaws.com/api/waitList/add", {
        method: "POST",
        body: JSON.stringify({
            email: email
        }),
        headers: {
            "content-type": "application/json",
        },
    }).then(d => d.json()).then(d => {
        console.log('ok');
        console.log(d.message)
        if (d.message == "0") {
            console.log(d.message)
            document.getElementById("lemail").innerText = 'Ya estás registrado en nuestra lista de espera.'
        } else {
            document.getElementById("lemail").innerText = 'Gracias por registrarte a nuestra lista de espera.'
        }

    })
        .catch((e) => console.log(e));
}
/*
<div className="hero-newsletter-form">
                                        <div className="input-group">
                                            <input type="email" className="form-control" placeholder="Ingresa a la lista de espera." required id="s-email" />
                                            <span className="input-group-btn">
                                                <button type="submit" className="btn btn-primary-color black-hover" onClick={() => saveToWaitList()}>Empezar</button>
                                            </span>
                                        </div>
                                        <label id="lemail" htmlFor="s-email" className="form-notification"></label>
                                    </div>
*/