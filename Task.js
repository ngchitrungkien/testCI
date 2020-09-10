import {BaseComponent} from "./BaseComponent.js";


const style = /*html*/ `
<style>
#content {
    width: 50px;
    background-color:red;
}

#is-completed {
    width: 50px;
    background-color: green;
}

#date-modified {
    width: 50px;
    background-color: blue;
}

.task {
    display: inline-block;
}

#btn-edit {
    width: 50px;
    background-color: indianred;
    cursor: pointer;
}

#btn-delete {
    width: 50px;
    background-color: purple;
    cursor: pointer;
}

</style> `
class Task extends BaseComponent {
    constructor() {
        super();
        // vì nội dung của 1 task do thuộc tính quyết định
        // mà thuộc tính được truyền từ ngoài vào --> props
        this.props = {
            'content': '',
            'is-completed': false,
            'is-editing': true,
            'date-modified': null
        };
    }

    static get observedAttributes() {
        return ['content','is-completed','is-editing','date-modified']
    }

    render() {
        let contentEditable = (this.props['is-editing'] != 'false')
        ? `<textarea id ='edit-content'>${this.props.content}</textarea>`
        : this.props.content;

        let dateEditable = (this.props['is-editing'] != 'false')
        ? `<input type ='datetime-local' id='edit-date-modified' value='${this.props['date-modified']}>`
        : this.props['date-modified'];

        let btnEdit = (this.props['is-editing'] != 'false')
        ? `<div id='btn-save'>Save</div>`
        : `<div id='btn-edit'>Edit</div>`;

        this._shadowRoot.innerHTML = /*html*/ `
            ${style}
           
            <div class='task'>
                <div id='content'>${contentEditable}</div>
                <div id='is-completed'>${this.props['is-completed']}</div>
                <div id='date-modified'>${dateEditable}</div>
                ${btnEdit}
                <div id='btn-delete'>Delete</div> 
            </div>
        `;

        this.$btnEdit = this._shadowRoot.getElementById('btn-edit');
        this.$btnEdit.onclick = (event) => {
            let editTask = new CustomEvent('edit-task',{
                bubbles: true,
                detail: {
                    content: this.props['content']
                }
            });

            this.dispatchEvent(editTask);
        }
        
        this.$btnDelete = this._shadowRoot.getElementById('btn-delete');
        this.$btnDelete.onclick = (event) => {
            console.log('vừa xóa 1 task');
            // xóa trên giao diện
            // this.remove();
            let deleteTask = new CustomEvent('delete-task',{
                bubbles: true,
                detail: {
                    content: this.props['content']
                }
            });

            this.dispatchEvent(deleteTask);

            // xóa trong state của list
        }
    }

}

window.customElements.define('task-container',Task)

// khi mà bấm vào delete của 1 task --> phát ra 1 event gọi là deleteTask
// event deleteTask được nổi lên List --> List có 1 listener để xử lý event deleteTask