import { FaPlusCircle } from 'react-icons/fa';

function InputTodo() {
    return (
        <form action="#">
            <input className="Input-data" type="text"  placeholder="Add Todo.."/>
            <button type='submit' className='input-submit'> <FaPlusCircle /></button>
        </form>
    )
}

export default InputTodo;