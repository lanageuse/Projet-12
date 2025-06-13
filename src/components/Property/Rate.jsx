import { ReactComponent as StarIcon } from '../../assets/star.svg'

function Rate({ rate }) {
    return (
        <div className='rate-container'>
            {[...Array(5)].map((_, index) => (
                <StarIcon
                    key={index}
                    fill={index < rate ? '#FF6060' : '#e3e3e3'}
                    className='star'
                />
            ))}
        </div>
    )
}

export default Rate;