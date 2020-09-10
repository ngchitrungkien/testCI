import {BaseComponent} from './BaseComponent.js'

class List extends BaseComponent {
    constructor() {
        super();

        this.state = {
            tasks: [
                {'is-editing':'false','content': 'đi học','is-completed': true,'date-modified': '2020/09/07'},
                {'is-editing':'false','content': 'đi chơi với crush','is-completed': false,'date-modified': '2020/09/07'},
                {'is-editing':'false','content': 'đi chơi với bạn thân','is-completed': false,'date-modified': '2020/09/07'},
                {'is-editing':'false','content': 'đi ăn quán','is-completed': false,'date-modified': '2020/09/07'},
            ]
            // Ctrl + Shift + Alt + Xuống: chọn tương tự kiểu Ctrl + D
        };
    }

    render() {
        let html = '';
        for(let task of this.state.tasks) {
            html += /*html*/ `<task-container is-editing="${task['is-editing']}" content= "${task.content}" is-completed="${task['is-completed']}" date-modified="${task['date-modified']}"></task-container>`
        }

        this._shadowRoot.innerHTML = `
        <form id='form-add-task'>
            <textarea name='content' placeholder='Enter content here!'></textarea>
            <input type='datetime-local' name='dateModified' placeholder='Date modified'>
            <button>Add Task</button>
        </form>

        <div class='list'>
            ${html}
        </div>

        `
        this.$list =  this._shadowRoot.querySelector('.list');
        this.$list.addEventListener('delete-task',(event) => {
            this.deleteTask(event.detail.content);
        });

        this.$list.addEventListener('edit-task',(event) => {
            this.editTask(event.detail.content);
        });

        this.$formAddTask = this._shadowRoot.getElementById('form-add-task');
        this.$formAddTask.onsubmit = (event) => {
            event.preventDefault();
            let newTask = {
                'content': this.$formAddTask.content.value,
                'is-completed': false,
                'date-modified': this.$formAddTask.dateModified.value
            }

            // this.state.tasks.push(newTask);
            // this.render();
            // this.componentDidUpdate();

            this.setState({
                tasks: [
                    ...this.state.tasks,
                    newTask
                ]
            })

            // let $task = document.createElement('task-container');
            // $task.setAttribute('content', newTask.content);
            // $task.setAttribute('is-completed', newTask['is-completed']);
            // $task.setAttribute('date-modified', newTask['date-modified']);

            // // append task-container vào list
            // this.$list = this._shadowRoot.querySelector('.list');
            // this.$list.appendChild($task);
            // console.log('đã thêm');
        }
    }
    
    deleteTask(taskContent) {
        // lọc những task có content không phải là taskContent truyền vào
        // let newTasks = this.state.tasks.filter(function(task){
        //     return task.content != taskContent;
        // });
        // đặt lại tasks của List
        // this.state.tasks = newTasks;
        // this.setState(this.state);

        this.setState({
            tasks: this.state.tasks.filter(function(task) {
                return task.content != taskContent;
            })
        });
        // this.setState();
    }

    editTask(taskContent) {
        this.setState({
            tasks: this.state.tasks.map(function(task) {
                if (task.content == taskContent) task['is-editing'] = 'true';
                return task;
            })
        });
    }
}

window.customElements.define('list-container',List);

// state: những dữ liệu mà bản thân component có sẵn
// prpos: những dữ liệu mà được truyền từ ngoài vào, readOnly
// state và props là những thứ quyết định nội dung nằm bên trong 1 component

// event
