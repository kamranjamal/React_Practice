
import { useNavigate } from 'react-router'

function ContactPage() {
const navigator= useNavigate()
    function historyBack(){
        navigator(-1)
    }


    return (
        <div>
            <div>ContactPage</div>
            <button onClick={historyBack}>Back</button>
        </div>
    )
}

export default ContactPage