import propTypes from 'prop-types'

function Home(props){
    return(
        // <div className='authentication-containers'>
        //     <p>{props.text}</p>
        // </div>
        <button className='btn authentication-containers'>
            <p>{props.text}</p>
        </button>
    )

}
Home.propTypes ={
    text: propTypes.string
}
Home.defaultProp ={
    text: ""
}
export default Home