const React = require('react')

const Info = (props) => {
    return <div>
        <p>Nazwisko: <b>{props.surname}</b></p>
        <p>Email: {props.email}</p>
        <p>Wiek: {props.age}</p>
    </div>
}

module.exports = Info