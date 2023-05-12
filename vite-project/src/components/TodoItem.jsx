import { FaPlusCircle, FaTrash } from 'react-icons/fa';
import { AiFillEdit } from 'react-icons/ai';

function TodoItem() {
    return (
        <ul>
            <li className="list"><input type="checkbox" name="checkbox" id="check-box" /> Muneeb <button><AiFillEdit /> <FaTrash /></button></li>
            <li className="list"><input type="checkbox" name="checkbox" id="check-box" /> Muneeb <button><AiFillEdit /> <FaTrash /></button></li>
            <li className="list"><input type="checkbox" name="checkbox" id="check-box" /> Muneeb <button><AiFillEdit /> <FaTrash /></button></li>
        </ul>
    )
}

export default TodoItem; 